import Image from "next/image";
import Link from "next/link";

import { FiArrowUpRight } from "react-icons/fi";
import { GiElectric } from "react-icons/gi";

function Choose({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="group h-[340px] w-[390px] cursor-pointer rounded-2xl bg-neutral-800 hover:bg-lime-300 lg:h-[300px] lg:w-[290px]">
      <Image
        src={imageSrc}
        alt="Weights"
        height={120}
        width={100}
        className="ml-5 pt-5"
      />
      <div className="mx-7 mt-4 text-neutral-200 group-hover:text-black lg:mt-1">
        <p className="mb-3 text-2xl font-bold">MUSCLES BUILDING</p>
        <p className="mb-5 text-xs lg:mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          deleniti quo iste nam et recusandae saepe.
        </p>
        <div className="flex items-center justify-between pr-2">
          <Link
            href="/"
            className="flex gap-1 text-lg font-semibold lg:text-xs"
          >
            LEARN MORE{" "}
            <FiArrowUpRight className="text-2xl sm:text-2xl lg:text-sm" />
          </Link>
          <div className="rounded-full bg-lime-300 p-2 group-hover:bg-black">
            <GiElectric className="rounded-full text-xl text-black group-hover:text-neutral-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose;
