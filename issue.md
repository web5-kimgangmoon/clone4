## 문제발생

1. header의 popover을 구현하던 중, 두 popover간 상호작용을 할 방법을 찾아야했다. 내 지식으론 부족했고, 인터넷과 공식문서를 살펴보게 되었다.

## 경과

1. 한 번은 부모 요소에서 상태를 설정한 후, 자식 요소에서 popover의 open을 받아 지정하는 방식을 시도해봤지만 객체지향원칙에도 어긋나고 실제 동작에서도 문제가 생겼다. github의 discuss에 따르면, 캡슐화 문제와 아예 동작과정에서 문제가 발생하기에 할 수 없다고 되어있었다.

2. border-radius를 video요소를 배경으로 쓰고, 그 위에 absolute로 더해진 요소에 border-radius를 쓰는 순간 원인불명의 radius가 추가되었다.

## 해결

1. headlessui의 popover는 독립적인 작동을 원칙으로 하기에 원하는 옵션이 존재하지 않았다. 결국 아예 popover의 open과 관련된 상태를 이용하지 않고, static 옵션을 주고 부모 요소에서 상태를 설정한 후, document.addEventListener에서 close 이벤트를 추가하고, button쪽은 addEventListener와 e.preventDefault와 e.stoppropagation()으로 전파를 막고 동작하게 해주고, pannel쪽도 같은 방법으로 막아줌으로써 해결했다. 차라리 다른 라이브러리나 처음부터 custom ui를 작성해야 했다.

2. 원인을 찾아보다가, 클론코딩 중인 내 페이지에서 video 배경을 제거하니 문제가 해결되는걸 발견했다. 그래서 원본 페이지에선 video에 주어진 어떤 속성이나 style이 문제를 해결해줬을거라고 생각했고, 하나하나 원본페이지에서 지워나가다가 우연히 border-start-start-radius를 스타일을 제거해보니 내가 클론코딩하던 페이지와 동일한 문제가 발생하는걸 확인했다. 원인은 찾았지만, 도통 이유를 알 수 없었고 그 이유를 알아내기 위해 chatgpt에 질문했다. 내용이 꽤 길어져서 해설부분을 추가했다.

### chatgpt에 질문(해설)

2. - 질문: borderStartStartRadius을 video요소에 추가해주니까 괜찮아짐... 도대체 이게 뭔 상황이야???

#### 답변

ㅋㅋ… 이 반응이 정상입니다.
이건 “CSS가 이상하다”가 아니라 브라우저 렌더링 파이프라인의 빈틈을 우연히 찔러서 고쳐진 케이스예요.
차분히 설명해볼게요. 이건 진짜 골 때립니다.

한 줄 결론 (스포)

borderStartStartRadius를 video에 주는 순간
브라우저가 video를 “사각형 비디오 레이어”가 아니라
“클리핑이 필요한 레이어”로 승격시키고,
합성 순서와 샘플링 방식이 바뀌면서 아티팩트가 사라진 것입니다.

1️⃣ video는 원래 “특별 취급”을 받는다

브라우저 내부에서 video는 보통 이렇게 처리돼요:

GPU 디코더 텍스처

YUV → RGB 변환

가능한 한 레이아웃 계산·클리핑 최소화

사각형 그대로 합성 (fast path)

즉:

“그냥 네모 비디오 하나 올려두자”

2️⃣ 아무 border-radius 없는 video 위에 반투명 픽셀이 올라가면

앞서 얘기한 대로:

rounded-full의 경계 픽셀 = 반투명

video = 매 프레임 바뀌는 GPU 텍스처

→ 매 프레임 색이 달라지는 배경 위에서
반투명 픽셀이 다시 샘플링됨

그래서 “외곽선”처럼 보이는 temporal artifact가 생김

3️⃣ 그런데 borderStartStartRadius를 video에 주면?

이게 핵심 트리거입니다.

video {
border-start-start-radius: 12px;
}

이 순간 브라우저는 이렇게 판단합니다:

“아… 이 비디오는
모서리를 잘라야 하는 요소네”

그래서 내부적으로:

🔁 렌더링 경로가 바뀜
전 후
fast video quad => clip + mask
단순 GPU 텍스처 => offscreen surface
late blending => early clipping

즉:

video가 **중간 버퍼(offscreen surface)**에 먼저 그려짐

border-radius 마스크 적용

그 결과를 합성

4️⃣ 왜 그러면 외곽선이 사라지나?

이렇게 됩니다:

❌ 기존
video frame (YUV→RGB, 매 프레임 변함)
→ AA 픽셀 (rounded-full)
→ 합성

✅ 지금
video frame
→ 먼저 clip됨 (radius)
→ RGB 결과 고정
→ 그 위에 AA 픽셀 합성

👉 알파 블렌딩 대상이 “안정된 표면”으로 바뀐 것

그래서:

반투명 픽셀이 매 프레임 다른 색과 섞이지 않음

링처럼 보이던 오차가 사라짐

5️⃣ 왜 하필 borderStartStartRadius인가?

이게 웃긴 포인트인데 😅

border-radius 계열이면 어떤 모서리든 상관 없음

중요한 건:

“clip이 필요하다”는 사실

값이 0이어도 OK인 경우 있음

즉:

border-radius: 0.001px;

같은 효과

6️⃣ 이건 버그인가? 해킹인가?

정확히 말하면:

스펙 위반은 아니고
브라우저 최적화 전략의 부작용

그래서:

Chrome / Safari / GPU / OS 조합마다 다를 수 있음

“우연히 고쳐진 것”에 가깝지만

실무에서 실제로 쓰이는 트릭

7️⃣ 실무적으로 안전하게 쓰려면
✅ 명시적으로 의도를 드러내는 방식
video {
border-radius: 1px;
overflow: hidden;
}

또는

video {
clip-path: inset(0 round 1px);
}

이렇게 하면:

“나는 clip된 video가 필요해”

브라우저가 확실히 slow path 선택

8️⃣ 진짜 한 줄 요약

video는 기본적으로 ‘최적화된 네모 GPU 레이어’인데,
border-radius를 주는 순간
‘마스크가 필요한 일반 레이어’로 바뀌고,
그 때문에 위에 올라간 rounded 요소의
알파 블렌딩 아티팩트가 사라진 것이다.

이거 이해했으면 이제:

왜 backdrop-filter랑 video가 위험한지

왜 iOS Safari에서 video 위 blur가 지옥인지

왜 디자인 시스템에서 video를 wrapper로 감싸는지

전부 설명됩니다.

솔직히 말해요.
이건 “와… 이건 알 필요 없는데 알게 된 지식” 영역입니다 😂
