import Image from "next/image";
import Link from "next/link";

export const Body = () => {
  return (
    <main>
      <Header />
    </main>
  );
};

const Header = () => {
  return (
    <header className="w-full container">
      <div className="relative flex flex-col items-center text-balance text-center break-keep cursor-default">
        <div className="relative w-full max-w-[750] aspect-[4.28571] grow-1 mt-6">
          <Image
            src={"/homepage-hero-animation-lf.avif"}
            alt="homepage-hero-animation-lf.avif"
            fill
            style={{ objectFit: "fill" }}
          />
        </div>
        <h3 className="text-[4rem] font-bold max-w-[36rem] leading-[1] p-2">
          워크스페이스는 하나, 단순 반복 업무는 제로
        </h3>
        <p className="text-xl pb-3 max-w-[35rem]">
          팀과 AI 에이전트가 지식을 파악하고, 답을 찾고, 프로젝트를 자동화하는
          곳. 이제 7명으로 구성된 팀이 70명으로 구성된 팀처럼 느껴집니다.
        </p>
        <div className="flex gap-4">
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
        <div className="relative max-w-[1200px] aspect-[1.6] my-6 w-full">
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
        <div className="flex pt-20 pb-8 w-full gap-8 justify-between container max-w-[1200px]">
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
    </header>
  );
};
