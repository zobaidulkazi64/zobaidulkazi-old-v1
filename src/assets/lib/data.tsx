import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
// import vuejsicon from "../../assets/icons/vueicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import trelloicon from "../../assets/icons/trelloicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import spotifyicon from "../../assets/icons/spotifyicon.svg";
import netlifyicon from "../../assets/icons/netlifyicon.svg";
import rendericon from "../../assets/icons/rendericon.svg";
import jwticon from "../../assets/icons/jwticon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import tastyMockup from "../../assets/img/tasty_mockup.webp";
import instorMockup from "../../assets/img/instor_mockup.webp";
import silentmoonMockup from "../../assets/img/silentmoon_mockup.webp";
import profilepicture from "../img/me2.webp";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    bn: "আমি মোঃ জোবায়দুল ইসলাম",
    en: "Hi, I'm Zobaidul Kazi",
  },
  subtitle: "Fullstack Developer ",
  description: {
    bn: "আমার কর্মজীবনে অগ্রসর হওয়ার এবং অনুপ্রেরণামূলক প্রকল্পগুলিতে অংশগ্রহণের লক্ষ্য নিয়ে একজন ফুলস্ট্যাক ডেভেলপার, এখানে আমি আমার কাজ এবং ওয়েব ডেভেলপমেন্টের জন্য আমার আবেগ উপস্থাপন করি। আসুন একসাথে ডিজিটাল সমাধানগুলি গঠন করি এবং ভবিষ্যত গঠন করি!",
    en: "A fullstack developer with the goal of advancing my career and participating in inspiring projects. Here I present my work and my passion for web development. Let's shape digital solutions together and shape the future!",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        bn: "যোগাযোগ করুন",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        bn: "আমার তৈরি করা প্রজেক্ট",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Tasty App",
    description:
      "Eine Rezepte App, die wir als Team mit React und der MealDB API gebaut haben. Ich war der Front-End Entwickler und habe Features wie Voice Search oder Print to PDF programmiert. Das Design wurde mit Figma erstellt. Die Website ist responsive und mobile-optimiert.",
    description_EN:
      "A recipe app that we built as a team with React and the MealDB API. I was the front-end developer and programmed features like voice search or print to PDF. The design was created with Figma. The website is responsive and mobile-optimized.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "Figma", icon: figmaicon },
      { name: "Canva", icon: canvaicon },
      { name: "Netlify", icon: netlifyicon },
      { name: "Trello", icon: trelloicon },
    ],
    image: tastyMockup,
    deploymenturl: "https://delightful-cheesecake-9b19f0.netlify.app/",
    githuburl: "https://github.com/AlpayC/Frontend_Abschlussprojekt_Tasty",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Silentmoon",
    description:
      "Eine Yoga und Meditations App, die wir als Team mit React, MongoDB, Express und Node.js gebaut haben. Meine Aufgabe als Gitmaster und Backend Entwickler bestand darin, das Backend mit Anbindung anhand einer Restful API zu programmieren und die Datenbank in MongoDB zu modellieren.",
    description_EN:
      "A yoga and meditation app that we built as a team with React, MongoDB, Express and Node.js. My task as a gitmaster and backend developer was to program the backend with connection using a restful API and to model the database in MongoDB.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Spotify Api", icon: spotifyicon },
      { name: "React", icon: reacticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
    ],
    image: silentmoonMockup,
    deploymenturl: "https://silentmoon-grpw.onrender.com/",
    githuburl:
      "https://github.com/AlpayC/Fullstack_Abschlussprojekt_SilentMoon",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Furniture Organizer",
    description:
      "Eine Möbel-Organizer App, die wir als Duo-Team mit React, MongoDB, Express und Node.js programmiert haben. Als Gitmaster habe ich die Verknüpfung des Frontends mit dem Backend und die Datenbankmodellierung übernommen. Die App ist responsive und mobile-optimiert.",
    description_EN:
      "A furniture organizer app that we programmed as a duo team with React, MongoDB, Express and Node.js. As a gitmaster, I took over the connection of the frontend to the backend and the database modeling. The app is responsive and mobile-optimized.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
      { name: "Trello", icon: trelloicon },
    ],
    image: instorMockup,
    deploymenturl: "https://mern-haushaltsbuch.onrender.com/",
    githuburl: "https://github.com/AlpayC/Furniture_MERN",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    bn: "Weitere Projekte auf Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "Font-end ",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
  
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },

      // {
      //   title: "Vue.js",
      //   hash: "#Vue.js",
      //   icon: vuejsicon,
      //   color: "#4FC08D",
      // },
   
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Back-end",
    skills: [

      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "Tools",
    skills: [
   
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
      // {
      //   title: "Shopify",
      //   hash: "#Shopify",
      //   icon: shopifyicon,
      //   color: "#7AB55C",
      // },
      // {
      //   title: "Webflow",
      //   hash: "#Webflow",
      //   icon: webflowicon,
      //   color: "#4353FF",
      // },
    ],
  },
] as const;

export const navLinks = [
  { bn: "হোম", en: "Home", hash: "#home", icon: GoHome },
  { bn: "দক্ষতা সমূহ", en: "Skills", hash: "#skills", icon: GoStack },
  { bn: "প্রজেক্ট সমূহ", en: "Projects", hash: "#projects", icon: GoProject },
  { bn: "আমার সম্পর্কে", en: "About me", hash: "#about-me", icon: GoPerson },
  { bn: "যোগাযোগ করুন", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { bn: "প্রাইভেট পলিসি", en: "প্রাইভেট পলিসি", hash: "#imprint", data: <Imprint /> },
  { bn: "কুকিজ", en: "Cookies", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:zobaidulkazi.work@gmail.com",
  text: "zobaidulkazi",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/zobaidulkazi/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/zobaidulkazi64",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:zobaidulkazi.work@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    bn: '"প্রথমবার ঠিক করাটা মোটেও গুরুত্বপূর্ণ নয়। শেষবার ঠিক করাটা খুবই গুরুত্বপূর্ণ।"',
    en: `"It's not at all important to get it right the first time. It's vitally important to get it right the last time."`,
    author: "Andrew Hunt",
  },
  {
    bn: '"Das Web ist wie eine Leinwand und der Code ist die Farbe. Erschaffe dein Meisterwerk."',
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title: "আমার সম্পর্কে",
  title_EN: "About me",
  description: "আমার সম্পর্কে কিছু কোড স্নিপেট",
  description_EN: "A few code snippets about me",
  paragraphs_BN: [
    {
      title: "আমার হৃদয়ের বর্তনী",
      description:
        "যখন আমি ডিজিটাল দুনিয়ায় থাকি না, তখন আমি প্রযুক্তি এবং হার্ডওয়্যারের আকর্ষণীয় জগতে ঘুরে বেড়াই। আমার জন্য,প্রোগ্রামিং ভাষা  শিক্ষা এবং বিভিন্ন কাজে লাগা একটি উত্তেজনাপূর্ণ অ্যাডভেঞ্চারের ধাঁধার টুকরোগুলির মতো।",
      icon: hardwareicon,
    },
    {
      title: "জীবনের দ্রুত পথে",
      description:
        "কোডিং ছাড়াও, আমি দ্রুত রাস্তায় থাকতে পছন্দ করি - শব্দের সত্যিকার অর্থে। গাড়ি আমার আবেগ, এবং আমি শক্তিশালী মেশিনের সাথে অজানা রাস্তায় থাকা উপভোগ করি।অর্থাৎ ভ্রমণ পিপাসু",
      icon: caricon,
    },
    {
      title: "জীবনের মান হিসাবে আবিষ্কারের আনন্দ",
      description:
        "একজন ওয়েব ডেভেলপার হিসেবে আমার যাত্রা আমার জীবনের পথের একটি অংশ মাত্র। আমি এই নীতির দ্বারা বেঁচে থাকি যে দুঃসাহসিক কাজ তখনই শুরু হয় যখন আপনি পরিচিতদের পিছনে ফেলে যান। নতুন জায়গা এবং সংস্কৃতি আবিষ্কার করা আমার সৃজনশীল অনুপ্রেরণার ফর্ম।",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "The Circuits of My Heart",
      description:
        "When I'm not in the digital world, I wander around the fascinating world of technology and hardware. For me, programming language learning and application are like puzzle pieces of an exciting adventure.",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lanes of Life",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.That is, thirsty for travel",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is just a part of my life path. I live by the principle that adventure begins when you leave behind the familiar. My form of creative inspiration is discovering new places and cultures.",
      icon: travelicon,
    },
    
   
  ],
};

export const contactData = {
  title: {
    bn: "যোগাযোগ করুন",
    en: "Contact",
  },
  description: {
    bn: "আমাকে একটি বার্তা লিখুন এবং আমি পেতে হবে.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        bn: "আপনার নাম লিখুন",
        en: "Your Name",
      },
      type: "text",
      validation: {
        bn: "দয়া করে আপনার নামটি লিখবেন!",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        bn: "আপনার ইমেইল লিখুন",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        bn: "দয়া করে আপনার ইমেইলটি লিখুন",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        bn: "কি বিষয়ে লিখতে চান",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        bn: "কি বিষয়ে লিখতে চান বিস্তারিত লিখুন",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      bn: "আপনার মেসেজটি লিখুন",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      bn: "আপনার গুরুত্বপূর্ণ মেসেজটি লিখুন",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      bn: "পাঠিয়ে দিন",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      bn: "আমি সম্মত যে জোবায়দুল আমার সাথে যোগাযোগ করতে আমার ব্যক্তিগত তথ্য (নাম এবং ই-মেইল ঠিকানা) ব্যবহার করতে পারে।",
      en: "I agree that Zobaidul may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      bn: "এই অনুরোধ জমা দেওয়ার মাধ্যমে, আপনি স্বীকার করছেন যে আপনি ব্যক্তিগত নীতি পড়েছেন",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    bn: "🦄 লাইভ ডেমো শীঘ্রই খুলবে. সার্ভার শুরু হচ্ছে...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    bn: "🦄 আপনার ইমেইল করার জন্য আপনাকে ধন্যবাদ। আমি যত তাড়াতাড়ি সম্ভব আপনার কাছে ফিরে আসব.",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    bn: "🦄 দুর্ভাগ্যবশত আপনার ইমেল পাঠানো কাজ করেনি. অনুগ্রহ করে একটু পরে আবার চেষ্টা করুন.",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    bn: "আপনার নামটি যথাযথভাবে লিখুন",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    bn: "BN",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
