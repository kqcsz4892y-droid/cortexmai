import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Premium Digital Products",
  desc: "Access a curated collection of automation scripts, AI workflows, and marketing tools designed by experts to help your business scale efficiently and intelligently.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Automation Scripts",
      desc: "Streamline repetitive tasks with our tested automation solutions.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "AI-Powered Workflows",
      desc: "Leverage artificial intelligence to optimize your business processes.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Marketing Tools",
      desc: "Accelerate your growth with proven marketing automation systems.",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Built for Modern Businesses",
  desc: "Our digital products are crafted with the latest technologies and best practices, ensuring reliability, scalability, and ease of implementation for businesses of all sizes.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Easy Implementation",
      desc: "All products come with detailed documentation and setup guides.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Expert Support",
      desc: "Get help from our team of automation and AI specialists.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Regular Updates",
      desc: "Receive ongoing improvements and new features for your products.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
