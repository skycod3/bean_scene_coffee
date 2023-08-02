import Slider from "../../components/TestimonialsSlider";
import Title from "../../components/Title";

import { config } from "../../config/tpl.config";

import ImgCoffeeDecorative from "../../assets/coffee-decorative.png";
import ImgCoffeeDecorative2 from "../../assets/coffee-decorative-2.png";

const { testimonials } = config;

export default function Testimonials() {
  return (
    <div className="relative">
      {/* float images */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden md:block" aria-hidden>
        <div className="absolute top-0 right-0" style={{ transform: "rotateY(180deg) translateY(4rem)" }}>
          <img src={ImgCoffeeDecorative} alt="" style={{ width: "clamp(200px, 30vw, 377px)" }} />
        </div>

        <div className="absolute bottom-0 left-0 -translate-y-10">
          <img src={ImgCoffeeDecorative2} alt="" style={{ width: "clamp(200px, 30vw, 377px)" }} />
        </div>
      </div>

      <div className="container">
        <div className="flex flex-col gap-8 text-center">
          <div className="flow">
            <Title level={2} className="title">
              Our coffee perfection feedback
            </Title>

            <p className="md:text-xl">Our customers has amazing things to say about us</p>
          </div>

          <Slider testimonials={testimonials} />
        </div>
      </div>
    </div>
  );
}
