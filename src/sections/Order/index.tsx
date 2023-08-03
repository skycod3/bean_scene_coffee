import Button from "@components/Button";
import Title from "@components/Title";

import { CustomStyles } from "../Header";

import ImgBgOrder from "@assets/bg-order.png";
import ImgCupCoffee from "@assets/cup-coffee.png";
import ImgCoffeeBeans from "@assets/coffee-beans.png";

export default function Order() {
  const customStyles: CustomStyles = {
    "--fluid-block-max": "4rem",
  };

  return (
    <div className="relative isolate bg-cover" style={{ backgroundImage: `url(${ImgBgOrder})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 -z-2 bg-primary opacity-80"></div>

      {/* Coffee beans */}
      <div className="absolute inset-0 -z-1" aria-hidden>
        <div
          className="bg-no-repeat h-full"
          style={{
            backgroundImage: `url(${ImgCoffeeBeans})`,
            backgroundSize: "max(33vw, 33rem)",
            backgroundPosition: "right bottom",
          }}
        ></div>
      </div>

      <div className="container" style={customStyles}>
        <div className="grid gap-4 items-center md:grid-cols-2">
          <div className="flow | max-w-xl">
            <Title level={2} className="title | text-white">
              Get a chance to have an Amazing morning
            </Title>

            <p className="text-white max-w-[40ch]">
              We are giving you are one time opportunity to experience a better life with coffee.
            </p>

            <Button title="Order now" className="button" data-theme="primary" />
          </div>

          <div className="justify-self-end">
            <img src={ImgCupCoffee} alt="Cup coffee" style={{ width: "clamp(13rem, 40vw, 324px)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
