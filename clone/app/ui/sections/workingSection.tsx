import { Book } from "@/app/svgStore/book";
import { Globe } from "@/app/svgStore/globe";
import { Map } from "@/app/svgStore/map";
import { Person } from "@/app/svgStore/person";
import { QuestionCircle } from "@/app/svgStore/questionCircle";
import { Tableware } from "@/app/svgStore/tableware";
import { Target } from "@/app/svgStore/target";
import { ThreeDot } from "@/app/svgStore/threeDot";
import Image from "next/image";
import Link from "next/link";

export const WorkingSection = () => {
  return (
    <section className="bg-white">
      <div className="container max-w-[1200] py-12">
        <div className="grid grid-cols-2 grid-rows-1">
          <div className="flex flex-col gap-y-4">
            <h2 className="text-5xl font-extrabold text-balance break-keep">
              시간 소모적인 반복 업무는 이제 Notion AI에게 맡기세요.
            </h2>
            <p className="text-[1.02rem]">
              실제 사례를 통해 내게 꼭 맞는 Notion 활용법을 알아보세요.
            </p>
            <Link
              className="text-blue-600 hover:text-blue-900 group"
              href={"/"}
            >
              <span className="group-hover:underline">더 살펴보기</span>
              <span className="text-sm">→</span>
            </Link>
          </div>
          <div className="flex justify-end items-end">
            <div className="relative h-32 aspect-[73/20]">
              <Image
                src={"/asset-use-cases.png"}
                alt="asset-use-cases.png"
                style={{ objectFit: "contain" }}
                fill
              />
            </div>
          </div>
        </div>
        <ul className="grid grid-cols-4 gap-6 pt-8">
          {[
            {
              href: "/",
              content: "브레인스토밍에서 로드맵까지 한 번에",
              icon: <QuestionCircle />,
            },
            {
              href: "/",
              content: "회의 기록을 SNS 콘텐츠로",
              icon: <ThreeDot />,
            },
            { href: "/", content: "워크스페이스 정리", icon: <Book /> },
            { href: "/", content: "신입직원 온보딩", icon: <Person /> },
            { href: "/", content: "랜딩 페이지 다듬기", icon: <Globe /> },
            { href: "/", content: "워크샵 계획", icon: <Map /> },
            { href: "/", content: "맛집 트래커", icon: <Tableware /> },
            {
              href: "/",
              content: "메모를 바로 실행 가능한 작업으로",
              icon: <Target />,
            },
          ].map((v, idx) => (
            <li className="" key={idx}>
              <Link
                className="h-full flex flex-col justify-between gap-y-4 px-5 py-3 border border-neutral-300 rounded-lg hover:shadow-btn transition-shadow duration-200"
                href={v.href}
              >
                <span className="block w-6 aspect-square text-neutral-400">
                  {v.icon}
                </span>
                <p className="break-keep text-balance">
                  <span className="font-bold">{v.content}</span>→
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
