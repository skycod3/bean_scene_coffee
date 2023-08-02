import Button from "../../components/Button";
import { config } from "../../config/tpl.config";

const { banner } = config;

export default function Banner() {
  const bannerStyles: React.CSSProperties = {
    background: `center / cover url(${banner.img})`,
    paddingBlockStart: "min(20vw, 7.25rem)",
    paddingBlockEnd: "min(10vw, 3rem)",
  };

  return (
    <div className="relative isolate" style={bannerStyles}>
      {/* Overlay */}
      <div
        className="absolute inset-0 -z-1"
        style={{ background: "linear-gradient(90deg, #1E1E1E 0%, rgba(0, 0, 0, 0.00) 100%)" }}
      ></div>

      <div className="container">
        <div className="text-white">
          <div className="flow | max-w-lg">
            <div className="leading-snug">
              <p className="text-xl">{banner.eyebrow}</p>
              <h1
                className="text-white font-banner font-normal"
                style={{ fontSize: "clamp(5rem, 12vw + 0.5rem, 13.75rem)" }}
              >
                {banner.title}
              </h1>
            </div>

            <p>{banner.text}</p>

            <Button title="Order now" className="button" data-theme="primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
