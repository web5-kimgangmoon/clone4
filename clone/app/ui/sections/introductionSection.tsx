import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export const IntroductionSection = () => {
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
              <Link className="text-blue-600 hover:text-blue-900" href={"/"}>
                <span className="hover:underline">더 보기</span>
                <span className="text-sm">→</span>
              </Link>
            </div>
            <div>
              <Image
                src={"/image.avif"}
                alt="image.avif"
                width={384}
                height={232}
              ></Image>
            </div>
          </div>
          <ul className="grid grid-rows-2 grid-cols-3 "></ul>
        </div>
      </div>
    </section>
  );
};
