import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import { Fragment, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const ExampleSection = () => {
  return (
    <section className="p-1 bg-neutral-100">
      <div className="container max-w-[1200] py-16 flex flex-col gap-8">
        <h2 className="cursor-default text-5xl font-extrabold">
          Notion 3.0을 소개합니다.
        </h2>
        <ExampleSectionBoxF />
        <ExampleSectionBoxS />
        <ExampleSectionBoxT />
        <ExampleSectionBoxFo />
        <h2 className="pt-4 text-center text-[2.5rem] font-(family-name:--font-gowunDodum)">
          "AI의 모든 것을 담은 앱."
        </h2>
        <div className="-mt-6 flex justify-center items-center">
          <Image
            className="w-20"
            src={"/forbes.png"}
            alt="forbes.png"
            width={388}
            height={100}
          ></Image>
        </div>
      </div>
    </section>
  );
};

const ExampleSectionBoxF = () => {
  const [slideIdx, setSlideIdx] = useState(0);
  const iconRef = useRef<HTMLVideoElement | null>(null);
  return (
    <div className="flex rounded-xl bg-white aspect-11/5 hover:shadow-md transition duration-300 overflow-hidden">
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
      <motion.div
        className="w-2/3 h-full grow-0 shrink-0 overflow-hidden"
        onHoverStart={() => {
          iconRef.current?.play();
        }}
      >
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
              <span className="hidden group-focus:flex group-hover:flex justify-center items-center w-8 aspect-square rounded-full shadow-btn ml-9 bg-white">
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
              <span className="hidden group-focus:flex group-hover:flex justify-center items-center w-8 aspect-square rounded-full shadow-btn mr-3 grow-0 shrink-0 bg-white border border-neutral-200">
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
              <figure className="">
                <div className="w-full">
                  <video
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
          <div className="inline-block absolute bottom-0 right-0 mask-[url(../public/mask_noseyDuck.png)] mask-contain mask-no-repeat">
            <video
              src={"clip_noseyDuck.mp4"}
              className="w-[128px] aspect-square"
              muted
              playsInline
              preload="metadata"
              poster="first_noseyDuck.png"
              width={256}
              height={256}
              ref={iconRef}
            ></video>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ExampleSectionBoxS = () => {
  const iconRef = useRef<HTMLVideoElement | null>(null);
  return (
    <motion.div
      className="relative grid w-full h-auto rounded-lg min-h-[280px] hover:shadow-btn overflow-hidden transition duration-250"
      style={{ gridTemplateColumns: "1fr 2fr" }}
      onHoverStart={() => {
        iconRef.current?.play();
      }}
    >
      <div className="p-6 bg-white">
        <h4 className="text-lg">
          커스텀 에이전트
          <strong className="ml-2 w-max h-max text-[0.75rem] font-semibold bg-sky-100/60 text-blue-700 rounded-xl px-1.25 py-0 tracking-wider">
            출시 예정
          </strong>
        </h4>
        <h5 className="pt-1 text-[1.7rem] font-bold">
          반복 작업을 자동화하세요.
        </h5>
        <div className={clsx("w-8 rounded-full p-2 bg-black")}>
          <ArrowRightIcon color="white" />
        </div>
      </div>
      <div className="grid grid-cols-2 bg-stone-500">
        <div className="pl-6 pt-24">
          <div
            className=" w-full overflow-hidden"
            style={{
              borderStartStartRadius: "0.75rem",
            }}
          >
            <Image
              src={"/ko-KR_agents-a.avif"}
              alt="ko-KR_agents-a.avif"
              style={{
                objectFit: "fill",
                scale: "1.4",
                transformOrigin: "0% 0%",
              }}
              width={1728}
              height={1055}
            ></Image>
          </div>
        </div>
        <div className="relative z-2 pt-6 flex">
          <div
            className="w-full shadow-overlap overflow-hidden border-l border-t border-neutral-200 "
            style={{
              borderStartStartRadius: "0.75rem",
            }}
          >
            <Image
              src={"/ko-KR_agents-b.avif"}
              alt="/ko-KR_agents-b.avif"
              style={{
                objectFit: "fill",
                scale: "1.4",
                transformOrigin: "0% 0%",
              }}
              width={1728}
              height={1206}
            ></Image>
          </div>
        </div>
      </div>
      <span className="inline-block absolute bottom-0 right-0 z-3 mask-[url(../public/mask_customAgents.png)] mask-contain mask-no-repeat">
        <video
          className="aspect-square w-[128px]"
          muted
          playsInline
          ref={iconRef}
          poster="first_customAgents.avif"
          src={"clip_customAgents.mp4"}
        ></video>
      </span>
      <Link
        className="absolute z-10 top-0 left-0 w-full h-full"
        href={"/"}
      ></Link>
    </motion.div>
  );
};

const ExampleSectionBoxT = () => {
  const iconRef1 = useRef<HTMLVideoElement | null>(null);
  const iconRef2 = useRef<HTMLVideoElement | null>(null);

  return (
    <div className="w-full min-h-[360px] grid grid-cols-2 gap-x-8">
      <motion.div
        className="relative flex flex-col bg-white overflow-hidden rounded-lg hover:shadow-btn transition duration-250"
        onHoverStart={() => {
          iconRef1.current?.play();
        }}
      >
        <div className="p-6">
          <h4 className="flex items-center pb-2">기업 통합 검색</h4>
          <div className="w-full flex justify-between items-start">
            <h5 className="text-[1.6rem] leading-8 font-bold break-keep pb-3">
              모든 검색을 한 번에.
            </h5>
            <div
              className={clsx(
                "w-8 rounded-full p-2 group-hover:bg-black/80 bg-black"
              )}
            >
              <ArrowRightIcon color="white" />
            </div>
          </div>
        </div>
        <div className="flex justify-start w-full bg-red-400/90 px-6 pt-6 grow">
          <Image
            style={{
              borderTopLeftRadius: "0.75rem",
              borderTopRightRadius: "0.75rem",
              objectFit: "fill",
            }}
            src={"/ko-KR_EnterpriseSearch.avif"}
            alt="ko-KR_EnterpriseSearch.avif"
            width={1728}
            height={1176}
          />
        </div>
        <span className="inline-block absolute bottom-0 right-0 z-3 mask-[url(../public/mask_noseyGlasses.png)] mask-contain mask-no-repeat">
          <video
            className="aspect-square w-[128px] bg-transparent"
            muted
            playsInline
            ref={iconRef1}
            poster="first_noseyGlasses.avif"
            src={"clip_noseyGlasses.mp4"}
          ></video>
        </span>
        <Link
          href={"/"}
          className="absolute top-0 left-0 w-full h-full z-10"
        ></Link>
      </motion.div>
      <motion.div
        className="relative flex flex-col bg-white overflow-hidden rounded-lg hover:shadow-btn transition duration-250"
        onHoverStart={() => {
          iconRef2.current?.play();
        }}
      >
        <div className="p-6">
          <h4 className="flex items-center pb-2">AI 노트</h4>
          <div className="w-full flex justify-between items-start">
            <h5 className="text-[1.6rem] leading-8 font-bold break-keep pb-3">
              늘 완벽하게 작성되는 회의록
            </h5>
            <div
              className={clsx(
                "w-8 rounded-full p-2 group-hover:bg-black/80 bg-black"
              )}
            >
              <ArrowRightIcon color="white" />
            </div>
          </div>
        </div>
        <div className="w-full bg-blue-400/90 pl-6 pt-6">
          <Image
            style={{
              borderTopLeftRadius: "0.75rem",
            }}
            src={"/ko-KR_MeetingNotes.avif"}
            alt="ko-KR_MeetingNotes.avif"
            width={1728}
            height={1176}
          />
        </div>
        <span className="inline-block absolute bottom-0 right-0 z-3">
          <video
            className="aspect-square w-[128px] mask-[url(../public/mask_noseyHeadset.png)] mask-contain mask-no-repeat"
            muted
            playsInline
            ref={iconRef2}
            poster="first_noseyHeadset.avif"
            src={"clip_noseyHeadset.mp4"}
          ></video>
        </span>
        <Link
          href={"/"}
          className="absolute top-0 left-0 w-full h-full z-10"
        ></Link>
      </motion.div>
    </div>
  );
};

const ExampleSectionBoxFo = () => {
  const iconRef = useRef<HTMLVideoElement | null>(null);

  return (
    <motion.div
      className="relative grid w-full h-auto rounded-lg min-h-[280px] hover:shadow-btn overflow-hidden transition duration-250"
      style={{ gridTemplateColumns: "1fr 2fr" }}
      onHoverStart={() => {
        iconRef.current?.play();
      }}
    >
      <div className="p-6 bg-white">
        <h4 className="text-lg">유연한 워크플로</h4>
        <h5 className="pt-1 text-[1.7rem] font-bold text-balance break-keep">
          규모와 종류에 제약받지 않는 프로젝트 관리
        </h5>
        <div className={clsx("w-8 rounded-full p-2 bg-black")}>
          <ArrowRightIcon color="white" />
        </div>
      </div>
      <div className="grid grid-cols-2 bg-[url(../public/bento_bg.avif)]">
        <div className="pl-6 pt-24">
          <div
            className=" w-full overflow-hidden"
            style={{
              borderStartStartRadius: "0.75rem",
            }}
          >
            <Image
              src={"/ko-KR_FlexibleWorkflows-a.avif"}
              alt="ko-KR_FlexibleWorkflows-a.avif"
              style={{
                objectFit: "fill",
                scale: "1.4",
                transformOrigin: "0% 0%",
              }}
              width={1728}
              height={1055}
            ></Image>
          </div>
        </div>
        <div className="relative z-2 pt-6 flex">
          <div
            className="w-full shadow-overlap overflow-hidden border-l border-t border-neutral-200 "
            style={{
              borderStartStartRadius: "0.75rem",
            }}
          >
            <Image
              src={"/ko-KR_FlexibleWorkflows-b.avif"}
              alt="ko-KR_FlexibleWorkflows-b.avif"
              style={{
                objectFit: "fill",
                scale: "1.4",
                transformOrigin: "0% 0%",
              }}
              width={1728}
              height={1206}
            ></Image>
          </div>
        </div>
      </div>
      <span className="inline-block absolute bottom-0 right-0 z-3 mask-[url(../public/mask_noseySearching.png)] mask-contain mask-no-repeat">
        <video
          className="aspect-square w-[128px]"
          muted
          playsInline
          ref={iconRef}
          poster="first_noseySearching.png"
          src={"clip_noseySearching.mp4"}
        ></video>
      </span>
      <Link
        className="absolute z-10 top-0 left-0 w-full h-full"
        href={"/"}
      ></Link>
    </motion.div>
  );
};
