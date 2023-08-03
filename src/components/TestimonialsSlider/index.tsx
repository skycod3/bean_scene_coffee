import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, A11y, Keyboard } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

import "@modules/swiper/swiper.css";
import "@modules/swiper/modules/navigation.css";
import "@modules/swiper/modules/a11y.css";
import "@modules/swiper/modules/keyboard.css";

import "./styles.css";
import { CustomProperties } from "../../@types";

type Testimonial = {
  id: number;
  user: string;
  position: string;
  img: string;
  feedback: string;
};

interface SliderProps {
  testimonials: Testimonial[];
}

export default function Slider({ testimonials }: SliderProps) {
  useEffect(() => {
    const container = document.querySelector(".swiper") as HTMLElement;

    const options: SwiperOptions = {
      modules: [Navigation, A11y, Keyboard],
      slidesPerView: 1,
      spaceBetween: 32,

      keyboard: true,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    };

    new Swiper(container, options);
  }, []);

  const customFlowSpace: CustomProperties = {
    "--flow-space": "0.25em",
  };

  return (
    <>
      <div className="relative">
        <div className="swiper" id="swiper">
          <div className="swiper-wrapper">
            {testimonials.map((testimonial) => (
              <div className="swiper-slide" key={testimonial.id}>
                <div className="relative">
                  <div className="bg-accent-100 border border-solid border-accent-200">
                    <div className="absolute top-0 left-10 pointer-events-none" aria-hidden>
                      <span className="text-9xl lg:text-[13.75rem] text-primary font-bold leading-none">“</span>
                    </div>

                    <div className="flow | text-center pb-24 px-4 pt-20 lg:pt-32 lg:px-24">
                      <blockquote>
                        <p>{testimonial.feedback}</p>
                      </blockquote>

                      <h3 className="text-2xl lg:text-3xl">{testimonial.user}</h3>
                      <p className="lg:text-xl" style={customFlowSpace}>
                        {testimonial.position}
                      </p>

                      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2">
                        <img
                          src={testimonial.img}
                          alt={testimonial.user}
                          width={112}
                          height={112}
                          className="rounded-2xl object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </>
  );
}
