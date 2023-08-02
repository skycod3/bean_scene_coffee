import ImgLogo from "../../assets/logo.svg";
import ImgBgFooter from "../../assets/bg-footer.png";
import ImgCupCoffeeDecorative from "../../assets/cup-coffee-decorative.png";

import { config } from "../../config/tpl.config";

import { CustomStyles } from "../Header";

const { contact, about } = config;

export default function Footer() {
  const customFluidSize: CustomStyles = {
    "--fluid-block-max": "4rem",
  };

  const customFlow: CustomStyles = {
    "--flow-space": "2.25em",
  };

  const links = {
    about: ["Menu", "Features", "News & Blogs", "Help & Supports"],
    company: ["How we work", "Terms of service", "Pricing", "FAQ"],
  };

  return (
    <div
      className="lg:pt-20 relative bg-cover bg-bottom bg-primary bg-blend-multiply"
      style={{ backgroundImage: `url(${ImgBgFooter})` }}
    >
      {/* Floating images */}
      <div className="pointer-events-none hidden lg:block" aria-hidden>
        <div className="absolute top-0 left-0 -translate-y-3/4">
          <img src={ImgCupCoffeeDecorative} alt="" style={{ width: "clamp(200px, 20vw, 297px)" }} />
        </div>

        <div
          className="absolute top-0 right-0"
          style={{ width: "clamp(200px, 20vw, 297px)", transform: "rotateY(180deg) translateY(-75%)" }}
        >
          <img src={ImgCupCoffeeDecorative} alt="" />
        </div>
      </div>

      <div className="container | text-white" style={customFluidSize}>
        <div className="grid grid-cols-2 md:flex flex-wrap gap-10 lg:gap-16">
          <div className="col-span-2 flex-[3.8]" style={customFlow}>
            <div className="flow">
              <img src={ImgLogo} width={207} alt="Bean Scene" />

              <p>{about}</p>

              <ul className="flex gap-5">
                {contact.socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <li key={social.id}>
                      <a href={social.url} aria-label={social.name} rel="noopener" target="_blank">
                        <Icon size={24} weight="fill" className="hover:fill-accent-400" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-white md:text-2xl">About</h2>

            <ul className="mt-14 grid gap-5">
              {links.about.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1">
            <h2 className="text-white md:text-2xl">Company</h2>

            <ul className="mt-14 grid gap-5">
              {links.company.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 flex-[2.4]">
            <h2 className="text-white md:text-2xl">Contact Us</h2>

            <ul className="mt-14 grid gap-5">
              <li>{contact.address}</li>

              {contact.phones.map((phone) => (
                <li key={phone}>
                  <a href="tel:">{phone}</a>
                </li>
              ))}

              {contact.emails.map((email) => (
                <li key={email}>
                  <a href="mailto:">{email}</a>
                </li>
              ))}

              <li>
                <a href="#">{contact.website}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
