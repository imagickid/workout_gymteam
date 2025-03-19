import Image from "next/image";
import Link from "next/link";
import Header from "./Header";

import { FiArrowUpRight } from "react-icons/fi";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { TfiArrowCircleLeft } from "react-icons/tfi";

function Hero() {
  return (
    <section className="relative h-screen w-full">
      <Image
        src="/hero-section.jpg"
        alt="Workout equipment in a gym"
        fill
        className="object-cover"
        quality={90}
        // sizes="(max-width: 600px) 600px, 100vw"
        priority
      />

      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 flex h-screen flex-col justify-between text-center text-neutral-200">
        <Header />
        <div className="flex flex-col items-center justify-center pt-16 sm:pt-28">
          <h1 className="mb-1 text-4xl font-bold tracking-wide sm:text-5xl md:text-7xl">
            WORK WITH <br />
            PROFESSIONALS
          </h1>
          <p className="mx-auto mb-4 w-full px-6 py-4 text-center text-xs/5 sm:w-2/3 sm:text-sm/5 md:w-1/2 md:text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam iusto
            aliquid corrupti fugit temporibus.
          </p>
          <div className="mx-auto flex w-full flex-col justify-center sm:w-1/2 md:w-2/5 md:flex-row md:items-center md:gap-4">
            <Link
              href="#"
              className="mx-auto mb-4 w-44 rounded-4xl bg-lime-300 px-6 py-2 font-extrabold text-black sm:mb-4 sm:py-2 sm:text-xl md:mx-0 md:mb-0 md:w-36 md:py-1.5 md:text-sm"
            >
              START NOW
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center gap-3 text-base font-semibold sm:text-xl md:gap-1 md:text-xs"
            >
              LEARN MORE
              <FiArrowUpRight className="text-2xl sm:text-4xl md:text-xl" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex justify-center gap-6 sm:mt-20 md:mt-10">
            <button className="cursor-pointer">
              <TfiArrowCircleLeft className="text-4xl md:text-3xl" />
            </button>
            <button className="cursor-pointer">
              <TfiArrowCircleRight className="text-4xl md:text-3xl" />
            </button>
          </div>
          <div className="w-full overflow-hidden bg-lime-300">
            <div className="py-2 whitespace-nowrap sm:py-2">
              <p className="animate-marquee text-xl font-bold tracking-wide text-black">
                GYMTEAM * DRAWING UP AN INDIVIDUAL TRAINING PROGRAM BEST
                PROFESSIONAL CHOICE * CONVINIENT LOCATION & SCHEDULE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
