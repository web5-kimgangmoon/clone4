import Image from "next/image";
import Link from "next/link";
import { useId } from "react";

export const RequestSection = () => {
  return (
    <section>
      <div className="container max-w-[1200] py-12">
        <div className="grid grid-cols-2 grid-rows-2">
          <div className="row-span-2">
            <h2 className="text-5xl font-extrabold">
              더 적은 도구, 더 높은 생산성
            </h2>
            <p className="py-5">
              모든 툴과 팀을 한곳에 모으고, 절감 비용을 바로 확인해 보세요.
            </p>
            <Link className="text-blue-600 hover:text-blue-900" href={"/"}>
              <span className="hover:underline">요금제 보기</span>
              <span className="text-sm">→</span>
            </Link>
          </div>
          <div
            className="relative"
            style={{ gridColumn: "2 / span 1", gridRow: "2 / span 1" }}
          >
            <Image
              src={"/asset-calculator.avif"}
              alt="asset-calculator.avif"
              fill
            ></Image>
          </div>
        </div>
        <div className="p-6 hover:shadow-btn">
          <form>
            <ul className="grid grid-cols-4 grid-rows-3">
              {[
                { title: "AI 검색", intro: "US$35/사용자" },
                { title: "AI 챗봇", intro: "US$20/사용자" },
                { title: "AI 노트", intro: "US$18/사용자" },
                { title: "AI 글쓰기 도우미", intro: "US$20/사용자" },
                { title: "AI 이메일 앱", intro: "US$30/사용자" },
                { title: "AI 리서치", intro: "US$40/사용자" },
                { title: "캘린더 일정 잡기", intro: "US$15/사용자" },
                { title: "팀 위키", intro: "US$10/사용자" },
                { title: "프로젝트 관리 툴", intro: "US$24/사용자" },
                { title: "기본 CRM", intro: "US$20/사용자" },
                { title: "사이트 빌더", intro: "US$20/사용자" },
                { title: "폼", intro: "US$15/사용자" },
              ].map((v, idx) => (
                <CheckItem name="" title={v.title} intro={v.intro} key={idx} />
              ))}
            </ul>
          </form>
        </div>
      </div>
    </section>
  );
};

const CheckItem = ({
  name,
  title,
  intro,
}: {
  name: string;
  title: string;
  intro: string;
}) => {
  const inputId = useId();
  return (
    <li className="flex">
      <input type="checkbox" name={name} id={inputId}></input>
      <label htmlFor={inputId}>
        <h4>{title}</h4>
        <p>{intro}</p>
      </label>
    </li>
  );
};
