## 문제발생

1. header의 popover을 구현하던 중, 두 popover간 상호작용을 할 방법을 찾아야했다. 내 지식으론 부족했고, 인터넷과 공식문서를 살펴보게 되었다.

## 경과

1. 한 번은 부모 요소에서 상태를 설정한 후, 자식 요소에서 popover의 open을 받아 지정하는 방식을 시도해봤지만 객체지향원칙에도 어긋나고 실제 동작에서도 문제가 생겼다. github의 discuss에 따르면, 캡슐화 문제와 아예 동작과정에서 문제가 발생하기에 할 수 없다고 되어있었다.

## 해결

1. headlessui의 popover는 독립적인 작동을 원칙으로 하기에 원하는 옵션이 존재하지 않았다. 결국 아예 popover의 open과 관련된 상태를 이용하지 않고, static 옵션을 주고 부모 요소에서 상태를 설정한 후, document.addEventListener에서 close 이벤트를 추가하고, button쪽은 addEventListener와 e.preventDefault와 e.stoppropagation()으로 전파를 막고 동작하게 해주고, pannel쪽도 같은 방법으로 막아줌으로써 해결했다. 차라리 다른 라이브러리나 처음부터 custom ui를 작성해야 했다.
