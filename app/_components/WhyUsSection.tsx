"use client";
import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import Choose from "./Choose";

const images = ["/weights.png", "/expander.png", "/bottle.png", "/bottle.png"];

function WhyUsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const goToSlide = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <section className="flex justify-center pt-8 pb-4 text-neutral-200 lg:pt-12">
      <div className="flex flex-col">
        <h2 className="text-3xl font-medium lg:text-5xl">WHY CHOOSE US</h2>
        {isSmallScreen ? (
          <div className="flex flex-col justify-center gap-6 pt-3 lg:flex-row lg:gap-4 lg:pt-5">
            {images.map((image, index) => (
              <Choose key={index} imageSrc={image} />
            ))}
          </div>
        ) : (
          <>
            <Carousel
              setApi={setApi}
              opts={{ loop: true, align: "start" }}
              className="w-full max-w-[920px] pt-3"
            >
              <CarouselPrevious />
              <CarouselContent className="gap-x-0">
                {images.map((image, index) => (
                  <CarouselItem key={index} className="lg:basis-1/3">
                    <Choose imageSrc={image} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext />
            </Carousel>
            <div className="mt-2 flex justify-center gap-2 py-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-1 w-1 cursor-pointer rounded-full transition-colors ${
                    index === current ? "bg-lime-300" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default WhyUsSection;
