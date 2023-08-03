import Title from "@components/Title";
import Button from "@components/Button";

import { config } from "@config/tpl.config";

import ImgCupCoffeeBeans from "@assets/cup-coffee-beans.png";

const { about } = config;

export default function About() {
  return (
    <div className="container">
      <div className="grid md:flex gap-x-9 items-center">
        <div className="flow | flex-1 grow-[1.4]">
          <Title level={2} className="title">
            Discover the best coffee
          </Title>

          <p className="text-balance">{about}</p>

          <Button title="Learn more" className="button" data-theme="primary" />
        </div>

        <div className="flex-1">
          <img src={ImgCupCoffeeBeans} alt="Cup coffee beans" />
        </div>
      </div>
    </div>
  );
}
