import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Accordion from "@radix-ui/react-accordion";

import { CaretDown } from "@phosphor-icons/react";

import { config } from "@config/tpl.config";

import "./styles.css";

const { coffees } = config;

interface NavProps {
  isMobile: boolean;
  navOpen: boolean;
}

export default function Nav(props: NavProps) {
  const isHidden = props.isMobile && !props.navOpen;
  const isOpen = props.isMobile && props.navOpen;

  return (
    <NavigationMenu.Root
      aria-hidden={isHidden}
      data-open={isOpen}
      id="main-nav"
      className={`NavigationMenuRoot | group relative flex justify-center z-[1] ${isHidden ? "hidden" : "block"}`}
    >
      <NavigationMenu.List className="flex group-data-[open=true]:flex-col gap-8 justify-center text-white lg:gap-14">
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#">Home</NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          {!props.isMobile ? (
            <>
              <NavigationMenu.Trigger className="group flex gap-1 items-center justify-between">
                Menu{" "}
                <CaretDown
                  size={14}
                  fill="#fff"
                  className="relative transition-transform group-data-[state=open]:-rotate-180"
                  aria-hidden
                />
              </NavigationMenu.Trigger>

              <NavigationMenu.Content className="absolute top-0 left-0 w-full md:w-auto">
                <ul className="grid gap-2 p-6 lg:grid-cols-2 lg:w-[min(40vw,600px)]">
                  {coffees.map((coffee) => (
                    <li key={coffee.id}>
                      <NavigationMenu.Link href="#" className="flex gap-2 rounded text-sm p-3 hover:bg-neutral-100">
                        <div className="flex-shrink-0">
                          <img src={coffee.img} alt={coffee.title} width={60} className="rounded" />
                        </div>

                        <div>
                          <span className="font-bold text-primary">{coffee.title}</span>
                          <p>{coffee.text}</p>
                        </div>
                      </NavigationMenu.Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenu.Content>
            </>
          ) : (
            <Accordion.Root type="single" collapsible>
              <Accordion.Item value="item-1">
                <Accordion.Trigger className="flex gap-1 items-center">
                  Menu <CaretDown size={14} fill="#fff" className="relative" aria-hidden />
                </Accordion.Trigger>

                <Accordion.Content className="pt-2">
                  <ul className="grid gap-4">
                    {coffees.map((coffee) => (
                      <li key={coffee.id}>
                        <NavigationMenu.Link href="#" className="flex gap-2 p-2 rounded text-sm hover:bg-neutral-700">
                          <div className="flex-shrink-0">
                            <img src={coffee.img} alt={coffee.title} width={60} className="rounded" />
                          </div>

                          <div>
                            <span className="font-bold text-accent-400">{coffee.title}</span>
                            <p>{coffee.text}</p>
                          </div>
                        </NavigationMenu.Link>
                      </li>
                    ))}
                  </ul>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          )}
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="#">About Us</NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="#">Contact Us</NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="relative bg-white w-3 h-3 top-[70%] rotate-45 rounded-tl-[2px]" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="absolute flex justify-center w-full top-full left-0" style={{ perspective: "2000px" }}>
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
}
