import Title from "../../components/Title";
import Button from "../../components/Button";

import { config } from "../../config/tpl.config";

import ImgCoffeeDecorative from "../../assets/coffee-decorative.png";

const { coffees } = config;

export default function Coffees() {
  return (
    <div className="relative">
      <div className="absolute -top-16 -z-1 left-0 -translate-y-1/2 hidden md:block" aria-hidden>
        <img src={ImgCoffeeDecorative} alt="" style={{ width: "clamp(200px, 30vw, 377px)" }} />
      </div>

      <div className="container">
        <div className="flow | text-center mb-8">
          <Title level={2} className="title">
            Enjoy a new blend of coffee style
          </Title>

          <p className="md:text-xl">
            Explore all flavours of coffee with us. There is always a new cup worth experiencing
          </p>
        </div>

        <div
          className="grid gap-y-10 gap-x-5"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 14rem), 1fr))" }}
        >
          {coffees.map((coffee) => (
            <div key={coffee.id} className="text-center">
              <img src={coffee.img} alt={coffee.title} className="w-full" />

              <div className="pt-3 px-3 bg-accent-100 border border-solid border-accent-200">
                <h3 className="text-xl">{coffee.title}</h3>

                <p>{coffee.text}</p>
                <span className="block text-primary text-lg font-bold">{coffee.price}</span>

                <Button title="Order now" className="button | translate-y-1/2" data-theme="primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
