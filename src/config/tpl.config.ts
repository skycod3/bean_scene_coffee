import ImgCoffee1 from "../assets/coffee-1.png";
import ImgCoffee2 from "../assets/coffee-2.png";
import ImgCoffee3 from "../assets/coffee-3.png";
import ImgCoffee4 from "../assets/coffee-4.png";

import { FacebookLogo, InstagramLogo, YoutubeLogo, TwitterLogo } from "@phosphor-icons/react";

import IconCoffeeBeans from "../assets/coffee-beans.svg";
import IconBadge from "../assets/badge.svg";
import IconCoffeeCup from "../assets/coffee-cup.svg";
import IconBestPrice from "../assets/best-price.svg";

import ImgBanner from "../assets/banner.png";

import ImgUser from "../assets/user-feedback.png";

const coffees = [
  { id: 1, img: ImgCoffee1, title: "Cappuccino", text: "Coffee 50% | Milk 50%", price: "$8.50" },
  { id: 2, img: ImgCoffee2, title: "Chai Latte", text: "Coffee 50% | Milk 50%", price: "$8.50" },
  { id: 3, img: ImgCoffee3, title: "Macchiato", text: "Coffee 50% | Milk 50%", price: "$8.50" },
  { id: 4, img: ImgCoffee4, title: "Expresso", text: "Coffee 50% | Milk 50%", price: "$8.50" },
];

const banner = {
  img: ImgBanner,
  eyebrow: "We've got your morning covered with",
  title: "Coffee",
  text: `It is best to start your day with a cup of coffee. Discover the
  best flavours coffee you will ever have. We provide the best
  for our customers.`,
};

const about = `Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.`;

const contact = {
  address: "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016",
  phones: ["+1 202-918-2132"],
  emails: ["beanscene@mail.com"],
  website: "www.beanscene.com",
  socials: [
    { id: 1, name: "Facebook", icon: FacebookLogo, url: "https://www.facebook.com/" },
    { id: 2, name: "Instagram", icon: InstagramLogo, url: "https://www.instagram.com/" },
    { id: 3, name: "Youtube", icon: YoutubeLogo, url: "https://www.youtube.com/" },
    { id: 4, name: "Twitter", icon: TwitterLogo, url: "https://twitter.com/" },
  ],
};

const features = [
  { id: 1, icon: IconCoffeeBeans, title: "Supreme Beans", text: "Beans that provides great taste", active: true },
  { id: 2, icon: IconBadge, title: "High Quality", text: "We provide the highest quality" },
  { id: 3, icon: IconCoffeeCup, title: "Extraordinary", text: "Coffee like you have never tasted" },
  { id: 4, icon: IconBestPrice, title: "Affordable Price", text: "Our Coffee prices are easy to afford" },
];

const testimonials = [
  {
    id: 1,
    user: "Johnny Thomas",
    position: "Project Manager",
    img: ImgUser,
    feedback: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset.....`,
  },
  {
    id: 2,
    user: "Johnny Thomas",
    position: "Project Manager",
    img: ImgUser,
    feedback: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset.....`,
  },
  {
    id: 3,
    user: "Johnny Thomas",
    position: "Project Manager",
    img: ImgUser,
    feedback: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset.....`,
  },
];

export const config = {
  coffees,
  banner,
  about,
  contact,
  features,
  testimonials,
};
