import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState, Fragment } from "react";
import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

export const Body = () => {
  return (
    <main className="pt-[50px]">
      <Header />
      <ExampleSection />
    </main>
  );
};

const Header = () => {
  const scroll = useScroll({});
  const [isBottom, setIsBottom] = useState(false);
  const container = useRef<HTMLHeadElement | null>(null);
  useMotionValueEvent(scroll.scrollY, "change", () => {
    if (
      container.current &&
      !isBottom &&
      window.innerHeight + scroll.scrollY.get() >=
        container.current?.clientHeight + 50
    )
      setIsBottom(true);
    else if (
      container.current &&
      isBottom &&
      window.innerHeight + scroll.scrollY.get() <
        container.current?.clientHeight + 50
    )
      setIsBottom(false);
  });
  return (
    <header className="w-full" ref={container}>
      <div className="relative flex flex-col items-center text-balance text-center break-keep cursor-default">
        <div className="container relative w-full max-w-[750] aspect-[4.28571] grow-1 mt-6">
          <Image
            src={"/homepage-hero-animation-lf.avif"}
            alt="homepage-hero-animation-lf.avif"
            fill
            style={{ objectFit: "fill" }}
          />
        </div>
        <h3 className="container text-[4rem] font-bold max-w-[36rem] leading-[1] p-2">
          워크스페이스는 하나, 단순 반복 업무는 제로
        </h3>
        <p className="container text-xl pb-3 max-w-[35rem]">
          팀과 AI 에이전트가 지식을 파악하고, 답을 찾고, 프로젝트를 자동화하는
          곳. 이제 7명으로 구성된 팀이 70명으로 구성된 팀처럼 느껴집니다.
        </p>
        <div className="container flex gap-4 justify-center">
          <Link
            className="flex items-center px-5 py-3 text-white bg-blue-500 hover:bg-blue-500/90 rounded-md transition-colors duration-100 font-[--font-sansation] font-[550]"
            href={"/"}
          >
            Notion 무료 다운로드
          </Link>
          <Link
            className="flex items-center px-5 py-3 text-blue-500 bg-blue-100 hover:bg-blue-100/40 rounded-md transition-colors duration-100 font-[--font-sansation] font-[550]"
            href={"/"}
          >
            영업팀 문의하기
          </Link>
        </div>
        <div className="relative max-w-[1200px] aspect-[1.6] mt-6 mb-18 w-full">
          <Image
            src={"/ko-KR_Hero.avif"}
            alt="ko-KR_Hero.avif"
            fill
            style={{
              objectFit: "fill",
              boxShadow: "0px 8px 56px 3px rgba(0,0,0,0.1)",
            }}
          ></Image>
        </div>
        <div className={clsx("sticky left-0 bottom-0 w-full bg-white")}>
          <div
            className={clsx(
              "container flex w-full gap-8 justify-between items-center max-w-[1200px] h-[76px] px-4 border-t",
              isBottom ? "border-white" : "border-gray-300"
            )}
            style={{ boxSizing: "content-box" }}
          >
            <h4 className="text-[0.9rem] text-gray-400">
              Notion을 믿고 쓰는 고객
            </h4>
            <span
              className="relative block"
              style={{
                maxWidth: 744,
                aspectRatio: 744 / 268,
                maxHeight: 24,
              }}
            >
              <Image
                src={"/gsenc-logo.avif"}
                alt={"gsenc-logo.avif"}
                width={744}
                height={268}
                style={{ objectFit: "contain" }}
              />
            </span>
            <span
              className="relative block"
              style={{
                maxWidth: 283,
                aspectRatio: 283 / 60,
                maxHeight: 24,
              }}
            >
              <Image
                src={"/KakaoStyle_Logo.avif"}
                alt={"KakaoStyle_Logo.avif"}
                width={283}
                height={60}
                style={{ objectFit: "contain" }}
              />
            </span>
            <span
              className="relative block"
              style={{
                maxWidth: 308,
                aspectRatio: 308 / 56,
                maxHeight: 24,
              }}
            >
              <Image
                src={"/logo_ko.avif"}
                alt={"logo_ko.avif"}
                width={308}
                height={56}
                style={{ objectFit: "contain" }}
              />
            </span>
            <span
              className="relative block"
              style={{
                maxWidth: 2100,
                aspectRatio: 2100 / 1350,
                maxHeight: 24,
              }}
            >
              <Image
                src={"/Daangn_Signature_RGB.avif"}
                alt={"Daangn_Signature_RGB.avif"}
                width={2100}
                height={1350}
                style={{ objectFit: "contain" }}
              />
            </span>
            <span
              className="relative block"
              style={{
                maxWidth: 204,
                aspectRatio: 204 / 60,
                maxHeight: 24,
              }}
            >
              <Image
                src={"/socar.avif"}
                alt={"socar.avif"}
                width={204}
                height={60}
                style={{ objectFit: "contain" }}
              />
            </span>
            <span
              className="relative block"
              style={{
                maxWidth: 150,
                aspectRatio: 150 / 41,
                maxHeight: 24,
              }}
            >
              <Image
                src={"/devsisters-logo_1__1_.avif"}
                alt={"devsisters-logo_1__1_.avif"}
                width={150}
                height={41}
                style={{ objectFit: "contain" }}
              />
            </span>
            <span
              className="relative block"
              style={{
                maxWidth: 1129,
                aspectRatio: 1129 / 307,
                maxHeight: 24,
              }}
            >
              <Image
                src={"/OpenAI-black-wordmark-cropped.avif"}
                alt={"OpenAI-black-wordmark-cropped.avif"}
                width={1129}
                height={307}
                style={{ objectFit: "contain" }}
              />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

const ExampleSection = () => {
  const [slideIdx, setSlideIdx] = useState(0);

  return (
    <section className="p-1 bg-neutral-100">
      <div className="container max-w-[1200] pt-16">
        <h2 className="cursor-default text-5xl font-extrabold pb-8">
          Notion 3.0을 소개합니다.
        </h2>
        <div className="flex rounded-xl bg-white aspect-7/3 hover:shadow-md transition duration-300">
          <div className="flex flex-col w-1/3 grow-0 shrink-0 justify-between">
            <div className="p-6">
              <a className="group" href={"/"}>
                <h4 className="flex items-center pb-2">
                  맞춤 에이전트
                  <strong className="ml-2 w-max h-max text-[0.75rem] font-semibold bg-sky-100/60 text-blue-700 rounded-xl px-1.25 py-0 tracking-wider">
                    New
                  </strong>
                </h4>
                <h5 className="text-[1.6rem] leading-8 font-bold break-keep pb-3">
                  작업을 배정하면, 에이전트가 작업을 수행합니다.
                </h5>
                <div
                  className={clsx(
                    "w-8 rounded-full p-2 group-hover:bg-black/80 bg-black"
                  )}
                >
                  <ArrowRightIcon color="white" />
                </div>
              </a>
            </div>
            <div className="p-3">
              {[
                [
                  "단순·반복 업무 자동화",
                  "며칠씩 걸리던 작업을 단 몇 분 만에. 목표만 알려주면 놀라운 결과를 눈으로 확인할 수 있습니다.",
                ],
                [
                  "팀원들과 함께하는 AI",
                  "우리 팀을 전담하는 든든한 전문가가 생긴 셈이죠.",
                ],
                [
                  "내가 아는 정보를 공유합니다",
                  "페이지와 메시지, 파일, 웹을 모두 검색해 정확한 답을 바로 찾아줍니다.",
                ],
                [
                  "사용자 맞춤형",
                  "나의 업무 스타일을 학습하는 에이전트. 행동부터 디자인까지 사용자가 직접 설정할 수 있습니다.",
                ],
              ].map((v, idx) => (
                <Fragment key={idx}>
                  <button
                    className={clsx(
                      "w-full text-left break-keep p-3 bg-white transition-colors cursor-default rounded-md",
                      slideIdx !== idx && "hover:bg-neutral-200 cursor-pointer"
                    )}
                    onClick={() => {
                      setSlideIdx(idx);
                    }}
                  >
                    <h4 className="font-semibold">{v[0]}</h4>
                    <motion.p
                      className="text-gray-500 overflow-hidden"
                      initial={{ height: 0 }}
                      animate={
                        slideIdx === idx ? { height: "auto" } : { height: 0 }
                      }
                      exit={{ height: 0 }}
                    >
                      {v[1]}
                    </motion.p>
                  </button>
                  {idx !== 3 && (
                    <hr className="mx-3 border-t-1 border-neutral-200" />
                  )}
                </Fragment>
              ))}
            </div>
          </div>
          <div className="w-2/3 h-full grow-0 shrink-0 overflow-hidden">
            <div className="flex h-full bg-[url('../public/accordion-background.avif')] relative">
              <div className="absolute top-0 left-0 w-full h-full">
                <button
                  className={clsx(
                    "group absolute top-0 left-0 w-1/2 h-full z-10 cursor-pointer",
                    slideIdx === 0 && "hidden"
                  )}
                  onClick={() => {
                    setSlideIdx(slideIdx - 1);
                  }}
                >
                  <span className="hidden group-hover:flex justify-center items-center w-8 aspect-square rounded-full shadow-btn ml-9 bg-white">
                    <ChevronLeftIcon className="w-5" strokeWidth={3} />
                  </span>
                </button>
                <button
                  className={clsx(
                    "group absolute top-0 right-0 flex justify-end items-center w-1/2 h-full z-10 cursor-pointer",
                    slideIdx === 3 && "hidden"
                  )}
                  onClick={() => {
                    setSlideIdx(slideIdx + 1);
                  }}
                >
                  <span className="hidden group-hover:flex justify-center items-center w-8 aspect-square rounded-full shadow-btn mr-3 grow-0 shrink-0 bg-white border border-neutral-200">
                    <ChevronRightIcon className="w-5" strokeWidth={3} />
                  </span>
                </button>
              </div>
              {[
                [
                  "slide_A_1584x1080_isolated_Final_KR_Compressed_500k.mp4",
                  1584 / 1080,
                  "Slide_A_1584x1080_Isolated_Final_KR_Compressed_500k.avif",
                ],
                [
                  "slide_B_1584x1080_isolated_Final_KR_Compressed_1100k.mp4",
                  1584 / 1080,
                  "Slide_B_1584x1080_Isolated_Final_KR_Compressed_1100k.avif",
                ],
                [
                  "slide_C_1584x1080_isolated_Final_KR_Compressed_1100k.mp4",
                  1584 / 1080,
                  "Slide_C_1584x1080_Isolated_Final_KR_Compressed_1100k.avif",
                ],
                [
                  "slide_D_1584x1080_isolated_Final_KR_Compressed_500k.mp4",
                  1584 / 1080,
                  "Slide_D_1584x1080_Isolated_Final_KR_Compressed_500k.avif",
                ],
              ].map((v, idx) => (
                <div
                  className={"w-full grow-0 shrink-0 pl-6 pt-6"}
                  key={idx}
                  hidden={slideIdx !== idx}
                >
                  <figure className="flex flex-col justify-between items-center m-0">
                    <div className="inline-block w-full rounded-lg overflow-hidden">
                      <video
                        className=""
                        src={v[0] as string}
                        style={{
                          aspectRatio: v[1],
                          borderStartStartRadius: "0.75rem",
                        }}
                        loop
                        autoPlay
                        muted
                        playsInline
                        poster={v[2] as string}
                        width={1584}
                        height={1080}
                      ></video>
                    </div>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
