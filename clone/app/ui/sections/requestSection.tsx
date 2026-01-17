import Image from "next/image";
import Link from "next/link";

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
        <div className="mt-6 p-6 hover:shadow-btn rounded-lg border border-neutral-200">
          <form>
            <ul className="grid grid-cols-3 grid-rows-4">
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
            <div className="grid grid-cols-3 grid-rows-1 bg-neutral-100 font-bold mt-5 p-5 rounded-lg">
              <div>
                <h5 className="text-lg">팀 규모</h5>
                <input
                  type="number"
                  className="w-3/5 h-[3.5rem] border border-neutral-300 bg-white rounded-md outline-none cursor-pointer hover:border-blue-600 transition-colors duration-200 text-[2.5rem] leading-11 px-2"
                  min={1}
                  defaultValue={10}
                ></input>
              </div>
              <div>
                <h5 className="text-lg pb-1">월간 절감액</h5>
                <strong className="text-[2.5rem] leading-11">US$690</strong>
              </div>
              <div>
                <h5 className="text-lg pb-1">연간 절감액</h5>
                <strong className="text-[2.5rem] leading-11">US$8,280</strong>
              </div>
            </div>
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
  return (
    <li className="flex">
      <label className="w-full flex items-stretch gap-x-1 py-1 cursor-pointer">
        <input className="peer" type="checkbox" name={name}></input>
        <h4 className="flex items-end font-bold pl-1">{title}</h4>
        <p className="peer-checked:flex items-end hidden text-xs group h-full text-neutral-400">
          {intro}
        </p>
      </label>
    </li>
  );
};
