import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { PlayIcon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const IntroductionSection = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  return (
    <section className="bg-neutral-100">
      <div className="container max-w-[1200] py-12">
        <h2 className="text-5xl font-extrabold pb-10">
          결과로 말하는 팀이 믿고 쓰는 Notion
        </h2>
        <div className="grid gird-rows-2 grid-cols-1 p-6 bg-white rounded-lg">
          <div className="flex">
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
            <button
              className="relative group cursor-pointer rounded-lg overflow-hidden"
              onClick={() => setOpenDialog(true)}
            >
              <Image
                className="group-hover:opacity-80 transition-opacity duration-200"
                src={"/image.avif"}
                alt="image.avif"
                width={384}
                height={232}
              ></Image>
              <span className="absolute bottom-3 right-3 w-9 p-[0.6rem] aspect-square rounded-full bg-white text-neutral-600">
                <PlayIcon color="currentColor" fill="currentColor" />
              </span>
            </button>
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
                  <div className="w-full h-full p-4">
                    <iframe
                      className="w-full h-full rounded-xl"
                      width="1920"
                      height="1080"
                      src="https://www.youtube.com/embed/HubmluaaFmc"
                      title="OpenAI turns shared knowledge into faster workflows"
                      // frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      // referrerpolicy="strict-origin-when-cross-origin"
                      // allowfullscreen
                      // ref={youtubeRef}
                    ></iframe>
                  </div>
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
          </div>
          <ul className="grid grid-rows-2 grid-cols-3 "></ul>
        </div>
      </div>
    </section>
  );
};
