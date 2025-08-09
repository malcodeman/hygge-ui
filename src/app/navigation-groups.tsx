import { LuCoffee, LuCommand } from "react-icons/lu";

export const NAVIGATION_GROUPS = [
  {
    group: "First Steps",
    pages: [
      {
        href: "/docs/first-steps/introduction",
        label: "Introduction",
        icon: <LuCoffee size={16} />,
      },
      {
        href: "/docs/first-steps/installation",
        label: "Installation",
        icon: <LuCommand size={16} />,
      },
    ],
  },
  {
    group: "Guides",
    pages: [
      {
        href: "/docs/guides/animation",
        label: "Animation",
      },
    ],
  },
  {
    group: "Components",
    pages: [
      {
        href: "/docs/components/accordion",
        label: "Accordion",
      },
      {
        href: "/docs/components/alert",
        label: "Alert",
      },
      {
        href: "/docs/components/avatar",
        label: "Avatar",
      },
      {
        href: "/docs/components/text",
        label: "Text",
      },
      {
        href: "/docs/components/date-picker",
        label: "Date Picker",
      },
    ],
  },
];
