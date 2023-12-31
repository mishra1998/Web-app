import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/boywithphone.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Real-time portfolio & Goal tracking",
  desc: "Users can view their personalized information tab that tracks your financial planning, health-gap actions, goals & portfolio performance, including information & reminders about upcoming payments, on a real-time basis",
  image: benefitOneImg,
  bullets: [
    // {
    //   title: "Understand your customers",
    //   desc: "Then explain the first point breifly in one or two lines.",
    //   icon: <FaceSmileIcon />,
    // },
    // {
    //   title: "Improve acquisition",
    //   desc: "Here you can add the next benefit point.",
    //   icon: <ChartBarSquareIcon />,
    // },
    // {
    //   title: "Drive customer retention",
    //   desc: "This will be your last bullet point in this section.",
    //   icon: <CursorArrowRaysIcon />,
    // },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    // {
    //   title: "Mobile Responsive Template",
    //   desc: "Nextly is designed as a mobile first responsive template.",
    //   icon: <DevicePhoneMobileIcon />,
    // },
    // {
    //   title: "Powered by Next.js & TailwindCSS",
    //   desc: "This template is powered by latest technologies and tools.",
    //   icon: <AdjustmentsHorizontalIcon />,
    // },
    // {
    //   title: "Dark & Light Mode",
    //   desc: "Nextly comes with a zero-config light & dark mode. ",
    //   icon: <SunIcon />,
    // },
  ],
};


export { benefitOne, benefitTwo };
