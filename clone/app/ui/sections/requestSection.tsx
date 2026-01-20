import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const RequestSection = () => {
  const liList = [
    { title: "AI 검색", value: 35 },
    { title: "AI 챗봇", value: 20, checked: true },
    { title: "AI 노트", value: 18 },
    { title: "AI 글쓰기 도우미", value: 20 },
    { title: "AI 이메일 앱", value: 30 },
    { title: "AI 리서치", value: 40 },
    { title: "캘린더 일정 잡기", value: 15 },
    { title: "팀 위키", value: 10, checked: true },
    { title: "프로젝트 관리 툴", value: 24, checked: true },
    { title: "기본 CRM", value: 20 },
    { title: "사이트 빌더", value: 20 },
    { title: "폼", value: 15 },
  ];
  const [headcount, setHeadcount] = useState(10);
  const [feeSum, setFeeSum] = useState(0);
  useEffect(() => {
    liList.map((v) => {
      if (v.checked) setFeeSum((s) => s + v.value);
    });
  }, []);
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
        <div className="mt-6 p-6 hover:shadow-btn rounded-lg border border-neutral-200 transition duration-200">
          <form>
            <ul className="grid grid-cols-3 grid-rows-4">
              {liList.map((v, idx) => {
                return (
                  <CheckItem
                    name={v.title}
                    title={v.title}
                    value={v.value}
                    setFeeSum={(v: number) => setFeeSum((s) => s + v)}
                    key={idx}
                    checked={v.checked}
                  />
                );
              })}
            </ul>
            <div className="grid grid-cols-3 grid-rows-1 bg-neutral-100 font-bold mt-5 p-5 rounded-lg">
              <label>
                <h5 className="text-lg">팀 규모</h5>
                <input
                  type="number"
                  className="w-3/5 h-[3.5rem] border border-neutral-300 bg-white rounded-md outline-none cursor-pointer hover:border-blue-600 transition-colors duration-200 text-[2.5rem] leading-11 px-2 visibleSpinButton"
                  min={1}
                  defaultValue={10}
                  onChange={(ev) => {
                    setHeadcount(+ev.currentTarget.value);
                  }}
                ></input>
              </label>
              <div>
                <h5 className="text-lg pb-1">월간 절감액</h5>
                <strong className="text-[2.5rem] leading-11">
                  US${headcount * feeSum}
                </strong>
              </div>
              <div>
                <h5 className="text-lg pb-1">연간 절감액</h5>
                <strong className="text-[2.5rem] leading-11">
                  US${headcount * feeSum * 12}
                </strong>
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
  value,
  checked,
  setFeeSum,
}: {
  name: string;
  title: string;
  value: number;
  checked?: boolean;
  setFeeSum: (v: number) => void;
}) => {
  return (
    <li className="flex">
      <label className="w-full flex items-stretch gap-x-1 py-1 cursor-pointer">
        <input
          className="peer"
          type="checkbox"
          name={name}
          onChange={(ev) =>
            ev.currentTarget.checked ? setFeeSum(value) : setFeeSum(-value)
          }
          defaultChecked={checked}
        ></input>
        <h4 className="flex items-end font-bold pl-1">{title}</h4>
        <p className="peer-checked:flex items-end hidden text-xs group h-full text-neutral-400">
          {`US$${value}/사용자`}
        </p>
      </label>
    </li>
  );
};
