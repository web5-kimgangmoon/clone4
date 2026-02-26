import { Logo } from "@/app/svgStore/logo";
import { MStoreBtn } from "@/app/svgStore/mStoreBtn";
import { WindowsIcon } from "@/app/svgStore/windowsIcon";
import { WindowIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export const DownloadSection = () => {
  return (
    <section className="bg-neutral-100">
      <div className="container max-w-[1200] py-12">
        <h2 className="text-5xl font-extrabold text-balance break-keep pb-8">
          무료로 체험하세요.
        </h2>
        <ul className="grid grid-rows-2 grid-cols-2 gap-8">
          <FLi />
          <li className="bg-white rounded-lg">dd</li>
          <li className="bg-white rounded-lg">dd</li>
        </ul>
      </div>
    </section>
  );
};

const FLi = () => {
  return (
    <li className="row-span-2 col-span-1 bg-white rounded-lg grid grid-rows-9 grid-cols-1 pl-6 pt-6">
      <div className="pb-10 row-span-4">
        <span className="block w-12 aspect-square">
          <Logo></Logo>
        </span>
        <h4 className="font-extrabold text-2xl pt-4 pb-1">Notion 시작하기</h4>
        <p className="pb-4">에이전트가 내장된 나만의 AI 워크스페이스.</p>
        <div className="grid grid-cols-1 grid-rows-5 gap-2 w-max">
          <Link
            href={"/"}
            className="flex bg-black w-max h-max text-white font-bold px-4 py-1.5 rounded-lg row-span-2"
          >
            <WindowsIcon />
            Windows로 다운로드하기
          </Link>
          <Link
            className="block bg-black row-span-3 px-3 py-1 rounded-lg"
            href={"/"}
          >
            <MStoreBtn />
          </Link>
        </div>
      </div>
      <div className="relative row-span-5 rounded-ss-lg overflow-hidden shadow-overlap">
        <Image src={"/ko-KR (2).avif"} alt="ko-KR (2).avif" fill></Image>
      </div>
    </li>
  );
};
