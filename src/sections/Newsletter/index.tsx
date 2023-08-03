import Title from "@components/Title";
import Button from "@components/Button";
import Input from "@components/Input";

import ImgBgSubscribe from "@assets/bg-subscribe.png";

import { CustomStyles } from "../Header";

export default function Newsletter() {
  const customBlockSize: CustomStyles = {
    "--fluid-block-max": "5rem",
    "--fluid-block-base": "10vw",
  };

  return (
    <div
      className="relative isolate bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${ImgBgSubscribe})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary opacity-90 -z-1"></div>

      <div className="container" style={customBlockSize}>
        <div className="flow | text-center">
          <Title level={2} className="title | text-white">
            Subscribe to get the Latest News
          </Title>

          <p className="md:text-xl">Don't miss out on our latest news, updates, tips and special offers</p>

          <form>
            <div className="flex gap-y-1 flex-wrap justify-center mx-auto max-w-2xl">
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-r-none"
                required
              />

              <Button
                title="Subscribe"
                type="submit"
                className="button | rounded-l-none rounded-r"
                data-theme="primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
