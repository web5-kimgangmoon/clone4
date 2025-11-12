import Link from "next/link";
import { Logo } from "../svgStore/logo";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="relative z-11 bg-white px-6.5 pt-5.5 flex justify-between">
      <Link href={"/"}>
        <Logo />
      </Link>
      <Nav />
      <div></div>
    </header>
  );
};

const Nav = () => {
  const [openNotionPop, setOpenNotionPop] = useState<boolean>(false);
  const [openStartPop, setOpenStartPop] = useState<boolean>(false);

  useEffect(() => {
    const closePopover = (e: MouseEvent) => {
      setOpenNotionPop(false);
      setOpenStartPop(false);
    };
    document.addEventListener("click", closePopover);
    return () => {
      document.removeEventListener("click", closePopover);
    };
  }, []);
  return (
    <nav>
      <PopoverGroup
        className={
          "flex gap-1 text-[0.85rem] font-[--font-sansation] font-[500]"
        }
      >
        <PopoverWrapper
          title="Notion"
          hoverLock={openStartPop}
          openFn={() => {
            setOpenNotionPop(true);
            setOpenStartPop(false);
          }}
          closeFn={() => setOpenNotionPop(false)}
          open={openNotionPop}
        >
          <NotionComp />
        </PopoverWrapper>
        {[
          ["메일", "/"],
          ["캘린더", "/"],
          ["AI", "/"],
          ["대기업", "/"],
          ["가격", "/"],
        ].map((v, idx) => (
          <LinkItem key={idx} href={v[1]}>
            {v[0]}
          </LinkItem>
        ))}
        <PopoverWrapper
          title="둘러보기"
          hoverLock={openNotionPop}
          openFn={() => {
            setOpenStartPop(true);
            setOpenNotionPop(false);
          }}
          closeFn={() => setOpenStartPop(false)}
          open={openStartPop}
        >
          <div></div>
        </PopoverWrapper>
        <LinkItem href="/">영업팀 문의하기</LinkItem>
      </PopoverGroup>
    </nav>
  );
};

// bg-white hover:bg-neutral-100 rounded-md transition-colors duration-200
const LinkItem = ({ children, href }: { children: string; href: string }) => {
  return (
    <Link
      className="flex items-center px-3 py-1 bg-white hover:bg-neutral-100 rounded-md transition-colors duration-200"
      href={href}
    >
      {children}
    </Link>
  );
};

const PopoverWrapper = ({
  title,
  children,
  hoverLock,
  openFn,
  closeFn,
  open,
}: {
  title: string;
  hoverLock: boolean;
  openFn: () => void;
  closeFn: () => void;
  children: React.ReactNode;
  open: boolean;
}) => {
  const [isHoverBtn, setIsHoverBtn] = useState<boolean>(false);
  const [isHoverPannel, setIsHoverPannel] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const btnRef = useRef<null | HTMLButtonElement>(null);
  const panelRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (btnRef.current !== null) {
      const clickEvent = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        open ? closeFn() : openFn();
      };
      btnRef.current.addEventListener("click", clickEvent);
      return () => btnRef.current?.removeEventListener("click", clickEvent);
    }
  }, [btnRef.current, open]);
  useEffect(() => {
    if (panelRef.current !== null) {
      const clickEvent = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
      };
      panelRef.current.addEventListener("click", clickEvent);
      return () => panelRef.current?.removeEventListener("click", clickEvent);
    }
  }, [panelRef.current]);

  return (
    <Popover>
      <PopoverButton
        className={clsx(
          "group px-2 py-1 flex items-center gap-2 outline-none transition-colors cursor-pointer duration-200 rounded-xl",
          {
            "bg-neutral-100": isHoverBtn || isHoverPannel || open,
          }
        )}
        as={motion.button}
        onHoverStart={() => setIsHoverBtn(true)}
        onHoverEnd={() => setIsHoverBtn(false)}
        ref={btnRef}
      >
        {title}
        <ChevronDownIcon
          className={clsx(
            "w-4 h-4",
            open || ((isHoverBtn || isHoverPannel) && !hoverLock)
              ? "hidden"
              : "block"
          )}
        />
        <ChevronUpIcon
          className={clsx(
            "w-4 h-4",
            open || ((isHoverBtn || isHoverPannel) && !hoverLock)
              ? "block"
              : "hidden"
          )}
        />
      </PopoverButton>
      <AnimatePresence>
        {(open || ((isHoverBtn || isHoverPannel) && !hoverLock)) && (
          <PopoverPanel
            static
            className={clsx("w-full h-max bg-white py-6 px-24")}
            anchor={{ to: "bottom" }}
            as={motion.div}
            onHoverStart={(e) => {
              isAnimating || setIsHoverPannel(true);
            }}
            onHoverEnd={() => setIsHoverPannel(false)}
            initial={{ opacity: 0, translateY: -10 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: -10 }}
            ref={panelRef}
            style={{ boxShadow: "0px 0px 5px 2px rgba(0,0,0,0.1)" }}
            onAnimationStart={() => {
              !(isHoverBtn || isHoverPannel) && setIsAnimating(true);
            }}
            onAnimationEnd={() => {
              setIsAnimating(false);
            }}
          >
            {children}
          </PopoverPanel>
        )}
      </AnimatePresence>
    </Popover>
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
    <section className="w-full flex">
      <nav className="font-[--font-pretendard] flex-1/2 grow-0 shrink-0 pr-8">
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
      <nav className="font-[--font-pretendard] flex-1/4 grow-0 shrink-0 pr-8">
        <h2 className="text-[0.9rem] text-neutral-500 p-2">시작하기</h2>
        <ul className="pt-2 grid grid-rows-4 grid-cols-1">
          {startList.map((v, idx) => (
            <li key={idx}>
              <Link
                href={v[2]}
                className="block group p-2 bg-white hover:bg-neutral-100 rounded-xl"
              >
                <h4 className="flex gap-2 items-center">
                  <span className="text-[1rem] font-semibold leading-7 text-neutral-600 ">
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
      <div className="flex-1/4 grow-0 shrink-0 rounded-xl font-[--font-sansation] font-semibold pr-32 text-neutral-600">
        <div className="flex flex-col w-full h-full p-5 bg-neutral-100 rounded-xl">
          <h4 className="pb-4">
            더 빠른 경험을 위한 Notion 데스크톱 앱 다운로드
          </h4>
          <button className="w-max bg-sky-600 text-white py-1.5 px-5 rounded-lg mb-2">
            앱 다운로드
          </button>
          <div className="py-3 px-4 grow-1">
            <div className="relative w-full h-full">
              <Image
                src={"/startups_background.avif"}
                alt={"startups_background.avif"}
                fill
                style={{ objectFit: "contain" }}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
