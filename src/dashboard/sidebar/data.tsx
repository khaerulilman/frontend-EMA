import { EventIcon } from "./icons/EventIcon";
import { GuideIcon } from "./icons/GuideIcon";
import { MessageIcon } from "./icons/MessageIcon";
import { DocumentIcon } from "./icons/DocumentIcon";
import { StatisticsIcon } from "./icons/StatisticsIcon";
import { ProfileIcon } from "./icons/ProfileIcon";
import { ProductIcon } from "./icons/ProductIcon";

export const data = [
  {
    section: "Dashboard",
    icon: <StatisticsIcon />,
    content: [
      {
        title: "Dashboard",
        link: "/dashboard",
      },
    ],
  },
  {
    section: "Events Quiz",
    icon: <EventIcon />,
    content: [
      {
        title: "Limited Quiz",
        link: "/events/limited-quiz",
      },
      {
        title: "Quiz History",
        link: "/events/quiz-history",
      },
    ],
  },
  {
    section: "Class",
    icon: <GuideIcon />,
    content: [
      {
        title: "My Class",
        link: "/class/my-class",
      },
      {
        title: "Subscription",
        link: "/class/subscription",
      },
    ],
  },
  {
    section: "Tasks",
    icon: <DocumentIcon />,
    content: [
      {
        title: "Active Task",
        link: "/tasks/active-task",
      },
    ],
  },
  {
    section: "Products",
    icon: <ProductIcon />,
    content: [
      {
        title: "Book",
        link: "/products/book",
      },
      {
        title: "Certificate",
        link: "/products/certificate",
      },
    ],
  },
  {
    section: "Group",
    icon: <MessageIcon />,
    content: [
      {
        title: "Group Chat",
        link: "/messages/group",
      },
    ],
  },
  {
    section: "Profile",
    icon: <ProfileIcon />,
    content: [
      {
        title: "Profile",
        link: "/profile/profile",
      },
    ],
  },
];
