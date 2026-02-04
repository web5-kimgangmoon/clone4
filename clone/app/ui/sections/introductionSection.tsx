import { Briefcase } from "@/app/svgStore/briefcase";
import { Globe } from "@/app/svgStore/globe";
import { Heart } from "@/app/svgStore/heart";
import { Rocket } from "@/app/svgStore/rocket";
import { Star } from "@/app/svgStore/star";
import { Trophy } from "@/app/svgStore/trophy";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import {
  PlayIcon,
  RocketLaunchIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import YouTube, { YouTubePlayer } from "react-youtube";
import {
  motion,
  useAnimate,
  useMotionValue,
  useMotionValueEvent,
  useTime,
  useTransform,
} from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  return (
    <section className="bg-neutral-100">
      <div className="container max-w-[1200] py-12">
        <h2 className="text-5xl font-extrabold pb-10">
          결과로 말하는 팀이 믿고 쓰는 Notion
        </h2>
        <ul className="grid grid-rows-4 grid-cols-3 gap-8">
          <li className="flex bg-white p-6 rounded-lg row-span-2 col-span-3">
            <div className="flex flex-col justify-between grow-1">
              <div>
                <Image
                  src={"/OpenAI-black-wordmark-cropped.avif"}
                  alt="OpenAI-black-wordmark-cropped.avif"
                  className="w-26"
                  width={1129}
                  height={307}
                ></Image>
                <p
                  className={clsx(
                    "relative mt-4 font-(family-font:--font-gowunDodum) text-4xl break-keep",
                    "-ml-3",
                    `before:content-['"']`,
                    `after:content-['"']`
                  )}
                >
                  Notion은 하나의 플랫폼에서 모든 업무를 <br />
                  <span className="ml-3">가능하게 하는 강력한 도구입니다.</span>
                </p>
              </div>
              <Link
                className="text-blue-600 hover:text-blue-900 group"
                href={"/"}
              >
                <span className="group-hover:underline">더 보기</span>
                <span className="text-sm">→</span>
              </Link>
            </div>
            <div className="flex items-center">
              <button
                className="relative aspect-[384/232] group cursor-pointer"
                onClick={() => setOpenDialog((v) => !v)}
              >
                <Image
                  className="group-hover:opacity-80 transition-opacity duration-200 rounded-lg"
                  src={"/image.avif"}
                  alt="image.avif"
                  width={384}
                  height={232}
                ></Image>
                <span className="absolute bottom-3 right-3 w-9 p-[0.6rem] aspect-square rounded-full bg-white text-neutral-600">
                  <PlayIcon color="currentColor" fill="currentColor" />
                </span>
              </button>
            </div>
            <Dialog
              onClose={() => setOpenDialog(false)}
              open={openDialog}
              className={clsx("relative z-30", openDialog || "hidden")}
              static
            >
              <div
                className="fixed top-0 left-0 w-screen h-full bg-neutral-600/20"
                onClick={() => setOpenDialog(false)}
              >
                <DialogPanel
                  className={
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 max-w-220 aspect-[11/7] p-4 bg-white rounded-xl"
                  }
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <DialogTitle className={"flex justify-end w-full h-max"}>
                    <button
                      className="hover:bg-neutral-100 text-neutral-400 p-1 cursor-pointer transition-colors rounded-md"
                      onClick={() => setOpenDialog(false)}
                      title="대화창 닫기"
                    >
                      <XMarkIcon
                        className="w-[1.35rem] aspect-square"
                        color="currentColor"
                        strokeWidth={2}
                      />
                    </button>
                  </DialogTitle>
                  <YoutubePannel openDialog={openDialog} />
                  <Link
                    className="text-blue-600 hover:text-blue-900 ml-4 group"
                    href={"/"}
                  >
                    <span className="group-hover:underline">더 보기</span>
                    <span className="text-sm">→</span>
                  </Link>
                </DialogPanel>
              </div>
            </Dialog>
          </li>

          {[
            {
              text: `워크플로를 간소화하여 타임라인을 3분의 1로 줄였습니다.→`,
              src: "toyota-red.svg",
              imgW: 55,
              imgH: 22,
              href: "/",
            },
            {
              text: `“Notion 덕분에 Ramp의 모든 팀원에게 개인 AI 에이전트가 생겼습니다.”→`,
              src: "ramp.png",
              imgW: 1288,
              imgH: 380,
              href: "/",
            },
            {
              text: `“Notion은 하나의 툴로 많은 문제를 해결할 수 있다는 것을 보여 줍니다.”→`,
              src: "vercel-logotype-light.svg",
              imgW: 2048,
              imgH: 407,
              href: "/",
            },
            {
              text: `“Notion은 워크플로를 간소화하는 가장 강력하고 영향력 있는 툴입니다.”→`,
              src: "match.png",
              imgW: 386,
              imgH: 60,
              href: "/",
            },
            {
              text: `“Notion 같은 AI 네이티브 툴은 중요한 경쟁력이 되어 줍니다.”→`,
              src: "cursor.avif",
              imgW: 872,
              imgH: 186,
              href: "/",
            },
            {
              text: `업무와 AI를 통합하는 하나의 허브 공간으로 모두가 정보를 공유하면서 업무 흐름을 원활하게 유지할 수 있습니다.→`,
              src: "Figma-logo-color.svg",
              imgW: 640,
              imgH: 178,
              href: "/",
            },
          ].map((v, idx) => (
            <li className="block rounded-lg" key={idx}>
              <Link
                href={v.href}
                className="block w-full h-full bg-white p-6 rounded-lg hover:shadow-lg transition duration-200"
              >
                <div className="relative h-[24px] mb-6">
                  <Image
                    className="h-[24px] !w-auto"
                    src={"/" + v.src}
                    alt={v.src}
                    // width={v.imgW}
                    // height={v.imgH}
                    style={{ objectFit: "contain" }}
                    fill
                  />
                </div>
                <p className="break-keep">{v.text}</p>
              </Link>
            </li>
          ))}
        </ul>
        <SlidePannel />
      </div>
    </section>
  );
};

const YoutubePannel = ({ openDialog }: { openDialog: boolean }) => {
  const youtubeRef = useRef<YouTubePlayer | null>(null);
  useEffect(() => {
    if (youtubeRef.current !== null) {
      if (openDialog) youtubeRef.current.playVideo();
      else youtubeRef.current.pauseVideo();
    }
  }, [openDialog]);
  return (
    <YouTube
      className="w-full h-full p-4"
      iframeClassName="w-full h-full rounded-xl"
      videoId="HubmluaaFmc"
      onReady={(e) => {
        youtubeRef.current = e.target;
      }}
    ></YouTube>
  );
};

const SlidePannel = () => {
  const [isPause, setIsPause] = useState(false);
  const time = useTime();
  const timing = useMotionValue(0);
  const translateX = useTransform(timing, [0, 5000], ["0%", "-50%"]);
  useMotionValueEvent(time, "change", () => {
    if (timing.get() === 5000) timing.set(0);
    else timing.set(timing.get() + 1);
    console.log(timing.get());
  });

  const viewrRef = useRef<null | HTMLUListElement>(null);
  return (
    <motion.div
      className="-mx-6 overflow-hidden mt-6"
      style={{
        maskImage:
          "linear-gradient(to left, transparent, #000000 5%, #000000 95%, transparent)",
      }}
      onHoverStart={() => {
        setIsPause(true);
      }}
      onHoverEnd={() => {
        setIsPause(false);
      }}
    >
      <motion.ul
        className="flex w-max"
        style={{ translateX: timing }}
        transition={{ duration: 50, ease: "linear", repeat: Infinity }}
        // style={{ translateX }}
        ref={viewrRef}
      >
        {[
          { p: "1억 명 이상의 전 세계 사용자", img: Globe },
          { p: "#3년 연속 지식 베이스 1위 (G2)", img: Trophy },
          { p: "#AI 기업 통합 검색 1위 (G2)", img: Briefcase },
          { p: "#AI 글쓰기 1위 (G2)", img: Star },
          { p: "Fortune 100대 기업 중 62%가 사용", img: Rocket },
          { p: "YC 기업의 50% 이상", img: Heart },
          { p: "140만 명이 넘는 커뮤니티 멤버", img: Globe },
          { p: "1억 명 이상의 전 세계 사용자", img: Globe },
          { p: "#3년 연속 지식 베이스 1위 (G2)", img: Trophy },
          { p: "#AI 기업 통합 검색 1위 (G2)", img: Briefcase },
          { p: "#AI 글쓰기 1위 (G2)", img: Star },
          { p: "Fortune 100대 기업 중 62%가 사용", img: Rocket },
          { p: "YC 기업의 50% 이상", img: Heart },
          { p: "140만 명이 넘는 커뮤니티 멤버", img: Globe },
        ].map((v, idx) => (
          <li
            className="flex grow-0 shrink-0 basis-1 items-center gap-2 mx-4 items-center"
            key={idx}
            style={{ gridRow: "auto", gridColumn: "auto" }}
          >
            <div className="w-6 aspect-square text-neutral-400">{v.img()}</div>
            <p className="text-nowrap text-sm font-semibold text-neutral-400 cursor-default">
              {v.p}
            </p>
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
};
