import Title from "@components/Title";
import Button from "@components/Button";

import ImgCoffeeDecorative from "@assets/coffee-decorative.png";

import { config } from "@config/tpl.config";

import { CustomStyles } from "../Header";

const { features } = config;

export default function Features() {
  const customStyles: CustomStyles = {
    "--flow-space": "0.1em",
  };

  return (
    <div className="relative">
      <div
        className="absolute -top-16 -z-1 right-0 -translate-y-1/2 hidden md:block"
        aria-hidden
        style={{ transform: "rotateY(180deg)" }}
      >
        <img src={ImgCoffeeDecorative} alt="" style={{ width: "clamp(200px, 30vw, 377px)" }} />
      </div>

      <div className="container">
        <div className="grid gap-8 text-center">
          <div className="flow">
            <Title level={2} className="title">
              Why are we different?
            </Title>

            <p className="md:text-xl">We don't just make your coffee, we make your day!</p>
          </div>

          <div
            className="grid gap-5"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 15rem), 1fr))" }}
          >
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`p-10 ${
                  feature.active ? "bg-accent-200" : "bg-accent-100"
                } border border-solid border-accent-200`}
              >
                <div className="flow | grid place-items-center">
                  <img src={feature.icon} alt={feature.title} width={88} />

                  <h3 className="text-2xl">{feature.title}</h3>

                  <p className="text-lg">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flow">
            <p className="text-lg">Great ideas start with great coffee, Lets help you achieve that</p>
            <p className="text-primary font-bold text-3xl" style={customStyles}>
              Get started today.
            </p>

            <Button title="Join us" className="button | px-10" data-theme="primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
