import Link from "next/link";
import { Logo } from "../svgStore/logo";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

export const Header = () => {
  return (
    <nav className="relative z-11 bg-white px-6.5 pt-5.5 flex justify-between">
      <Link href={"/"}>
        <Logo />
      </Link>
      <ul className="flex gap-1 text-[0.85rem] font-[--font-sansation] font-[500]">
        <PopoverLi title="Notion">
          <NotionComp />
        </PopoverLi>
        {[
          ["메일", "/"],
          ["캘린더", "/"],
          ["AI", "/"],
          ["대기업", "/"],
          ["가격", "/"],
        ].map((v, idx) => (
          <LinkLi key={idx} href={v[1]}>
            {v[0]}
          </LinkLi>
        ))}
        <PopoverLi title="둘러보기">
          <div></div>
        </PopoverLi>
        <LinkLi href="/">영업팀 문의하기</LinkLi>
      </ul>
      <div></div>
    </nav>
  );
};

const Li = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="bg-white hover:bg-neutral-100 rounded-md transition-colors duration-200">
      {children}
    </li>
  );
};

const LinkLi = ({ children, href }: { children: string; href: string }) => {
  return (
    <Li>
      <Link className="flex items-center px-3 py-1" href={href}>
        {children}
      </Link>
    </Li>
  );
};

const PopoverLi = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isHoverBtn, setIsHoverBtn] = useState<boolean>(false);
  const [isHoverPannel, setIsHoverPannel] = useState<boolean>(false);
  return (
    <Li>
      <Popover>
        {({ open }) => (
          <>
            <PopoverButton
              className={clsx(
                "group px-2 py-1 flex items-center gap-2 outline-none transition-colors cursor-pointer duration-200",
                {
                  "bg-neutral-100 rounded-xl":
                    isHoverBtn || isHoverPannel || open,
                }
              )}
              as={motion.button}
              onHoverStart={() => setIsHoverBtn(true)}
              onHoverEnd={() => setIsHoverBtn(false)}
            >
              {title}
              <ChevronDownIcon className="w-4 h-4 group-hover:hidden" />
              <ChevronUpIcon className="w-4 h-4 hidden group-hover:block " />
            </PopoverButton>
            <AnimatePresence>
              {(open || isHoverBtn || isHoverPannel) && (
                <PopoverPanel
                  static
                  className={"w-full h-max bg-white z-10 py-6 px-24"}
                  anchor={{ to: "bottom" }}
                  as={motion.div}
                  onHoverStart={() => setIsHoverPannel(true)}
                  onHoverEnd={() => setIsHoverPannel(false)}
                  initial={{ opacity: 0, translateY: -10 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  exit={{ opacity: 0, translateY: -10 }}
                >
                  {children}
                </PopoverPanel>
              )}
            </AnimatePresence>
          </>
        )}
      </Popover>
    </Li>
  );
};

const NotionComp = () => {
  const notionList: Array<
    [string, string, string, boolean] | [string, string, string]
  > = [
    ["Notion AI", "구축, 작성, 자동화를 위한 툴", "/"],
    ["문서", "간단하면서도 강력한 툴", "/"],
    ["에이전트", "수동 작업 처리", "/", true],
    ["지식 베이스", "모든 지식을 한데 모은 허브", "/"],
    ["기업 통합 검색", "즉시 답변을 찾을 수 있는 기능", "/"],
    ["프로젝트", "어떤 프로젝트든 관리할 수 있는 툴", "/"],
    ["AI 노트", "AI가 완벽하게 정리해 드립니다.", "/"],
    ["사이트", "뭐든 빠르게 게시할 수 있는 툴", "/"],
  ];

  const startList: Array<
    [string, string, string, boolean] | [string, string, string]
  > = [
    ["AI 사용 사례 살펴보기", "Notion AI로 할 수 있는 작업 보기", "/", true],
    ["마켓플레이스 둘러보기", "모든 것을 위한 템플릿", "/"],
    ["API 통합 보기", "Notion에 앱 연결하기", "/"],
    ["Web Clipper 다운로드", "웹에서 가져와 Notion에 저장하세요.", "/"],
  ];
  return (
    <section className="flex">
      <nav className="font-[--font-pretendard] grow-2">
        <h2 className="text-[0.9rem] text-neutral-500 p-2">기능</h2>
        <ul className="pt-2 grid grid-rows-4 grid-cols-2">
          {notionList.map((v, idx) => (
            <li key={idx}>
              <Link
                href={v[2]}
                className="block group p-2 bg-white hover:bg-neutral-100 rounded-xl"
              >
                <h4 className="flex gap-2 items-center">
                  <span className="text-[1.4rem] font-semibold leading-7">
                    {v[0]}
                  </span>
                  {v[3] && (
                    <strong className="w-max text-[0.75rem] font-semibold bg-sky-100 text-blue-600 rounded-xl px-1.25 py-0">
                      New
                    </strong>
                  )}
                </h4>
                <p className="text-[0.8rem] text-neutral-500">{v[1]}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="grow-1">
        <h2>시작하기</h2>
      </nav>
      <div className="grow-1"></div>
    </section>
  );
};
