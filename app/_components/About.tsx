import Image from "next/image";

function About() {
  return (
    <section className="flex h-screen justify-center pb-4 text-neutral-200">
      <div className="flex flex-col gap-2 px-6">
        <h2 className="pt-9 text-3xl font-medium lg:pt-14 lg:text-5xl">
          ABOUT OUR GYM
        </h2>

        <div className="relative h-64 max-w-[500px] overflow-hidden rounded-2xl lg:h-96 lg:max-w-[900px]">
          <Image src="/about.avif" alt="About" fill className="object-cover" />
          <span className="absolute top-50 left-4 z-20 rounded-lg bg-lime-300 px-6 py-1 text-sm font-bold text-black lg:top-80 lg:left-12">
            10 YEARS
          </span>
        </div>
        <p className="max-w-[500px] text-sm lg:max-w-[900px] lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          exercitationem esse ex est et, nemo asperiores illo voluptates ipsum
          veniam. Inventore voluptate nam deserunt, labore aperiam excepturi
          sit! Libero, voluptates!
        </p>
      </div>
    </section>
  );
}

export default About;
