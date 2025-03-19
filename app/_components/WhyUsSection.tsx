import Choose from "./Choose";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function WhyUsSection() {
  return (
    <section className="flex justify-center pt-8 pb-4 text-neutral-200 lg:pt-12">
      <div className="flex flex-col">
        <h2 className="text-3xl font-medium lg:text-5xl">WHY CHOOSE US</h2>
        <div className="flex flex-col justify-center gap-6 pt-3 lg:hidden lg:flex-row lg:gap-4 lg:pt-5">
          <Choose imageSrc="/weights.png" />
          <Choose imageSrc="/expander.png" />
          <Choose imageSrc="/bottle.png" />
        </div>
        <Carousel
          opts={{ loop: true, align: "start" }}
          className="hidden w-full max-w-[920px] pt-3 lg:block"
        >
          <CarouselPrevious />
          <CarouselContent className="gap-x-0">
            <CarouselItem className="lg:basis-1/3">
              <Choose imageSrc="/weights.png" />
            </CarouselItem>

            <CarouselItem className="lg:basis-1/3">
              <Choose imageSrc="/expander.png" />
            </CarouselItem>

            <CarouselItem className="lg:basis-1/3">
              <Choose imageSrc="/bottle.png" />
            </CarouselItem>

            <CarouselItem className="lg:basis-1/3">
              <Choose imageSrc="/bottle.png" />
            </CarouselItem>
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

export default WhyUsSection;
