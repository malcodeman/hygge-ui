import { LuCoffee, LuCommand } from "react-icons/lu";

export const NAVIGATION_GROUPS = [
  {
    group: "First Steps",
    pages: [
      {
        href: "/",
        label: "Introduction",
        icon: <LuCoffee size={16} />,
      },
      {
        href: "/installation",
        label: "Installation",
        icon: <LuCommand size={16} />,
      },
    ],
  },
  {
    group: "Guides",
    pages: [
      {
        href: "/guides/animation",
        label: "Animation",
      },
    ],
  },
  {
    group: "Components",
    pages: [
      {
        href: "/components/accordion",
        label: "Accordion",
      },
      {
        href: "/components/avatar",
        label: "Avatar",
      },
    ],
  },
];
