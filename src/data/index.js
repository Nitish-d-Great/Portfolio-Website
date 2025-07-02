import * as React from "react";

import { FiCopy } from "@react-icons/all-files/fi/FiCopy";
import { FiDownload } from "@react-icons/all-files/fi/FiDownload";
import { FiAward } from "@react-icons/all-files/fi/FiAward";
import { FiGithub } from "@react-icons/all-files/fi/FiGithub";
import { FiCalendar } from "@react-icons/all-files/fi/FiCalendar";
import { FiInstagram } from "@react-icons/all-files/fi/FiInstagram";
import { FiBook } from "@react-icons/all-files/fi/FiBook";
import { FiMail } from "@react-icons/all-files/fi/FiMail";
import { FiCoffee } from "@react-icons/all-files/fi/FiCoffee";

// Files
import NitishCV from "../files/Nitish-Gupta-Resume.pdf";

const bioDescription = `A blockchain developer with keen interest towards Back-end Development and focus on Smart Contract Security along with zero-knowledge cryptography, building projects that lie at the intersection of privacy and decentralization. With multiple hackathon wins, I've developed ZK-powered applications and alongside audited smart contracts using tools like Slither and Mythril. I'm really focused towards solving real-world problems through cryprography, specifically Zero-Knowledge proofs and Smart Contracts Security.`;

const careerPath = [
  {
    role: "Content Head",
    details: `Sankalp Club | Jaipur, India | 2024 -> 2025`,
  },
  {
    role: "Creative Head",
    details: `Desportivos: Sports Fest of The LNMIIT | Jaipur, India | 2024 -> 2025`,
  },

  {
    role: "LNMIIT Undergraduate Summer Internship",
    details: `Blockchain Research Intern | Jaipur, India | June 2024 -> July 2025`,
  },
  {
    role: "Social Media Manager",
    details: `LNM Hacks 6.0 | Jaipur, India | 2023 -> 2024`,
  },
];

const academyPath = [
  {
    role: "Bachelor of Technology in Computer Science and Engineering (B.Tech CSE)",
    details: `The LNM Institute of Information Technology | Jaipur, India | 2022 -> 2026`,
  },
  {
    role: "Uniswap Hooks Incubator Program",
    details: `Uniswap Foundation & Atrium Academy | Remote, India | July'25 -> Sept'25`,
  },
  {
    role: "LNMIIT Undergraduate Summer Internship Programme (LUSIP)",
    details: `Formal Verification and Analysis of Smart Contracts | The LNMIIT, Jaipur, India| Jun'24 -> Aug'24`,
  },
  {
    role: "Indian School Certificate (ISC)",
    details: `Dr. Virendra Swarup Education Centre | Kanpur, India | 2019 -> 2021 | 96%`,
  },
  {
    role: "Indian Certificate For Secondary Education (ICSE)",
    details: `Dr. Virendra Swarup Education Centre | Kanpur, India | 2008 -> 2019 | 95%`,
  },
];

const openSourcePath = [
  {
    role: "My Github",
    link: `https://github.com/Nitish-d-Great`,
  },
];

const volunteeringPath = [
  {
    role: "Campus Ambassador",
    details: `Rise In | Jaipur, India | 2023 -> 2024`,
    description: `- Contributed towards promoting RiseIn within the college - organising events and building a local community of peers - onboarding them on the platform`,
  },
  {
    role: "National Service Scheme",
    details:  `NSS Volunteer| India | 2023`,
    description: `- Contributed as a volunteer, working for a noble cause of fostering humanity and civic responsibility by participating in community outreach initiatives including cleanliness drives, awareness campaigns and blood donation camps`,
  },
];

const hackingPath = [
  {
    role: "zkCertify",
    details: `ZK based academic record maintenance and recruitment support dApp | 2025 | 🏆 ZK Online Hackathon for Web3 Builders`,
    description: `-> Circom, Solidity, TypeScript, JavaScript, CSS, Vercel`,
    link: `https://zk-certify.vercel.app/`,
  },
  {
    role: "zkVoting",
    details: `A ZK-based platform for conducting smooth, transparent and privacy-preserving elections | 2025 | 🏆 LNM Hacks 7.0`,
    description: `-> Javascript, Solidity, Circom, Node.js, CSS, HTML`,
    link: `https://github.com/Nitish-d-Great/zkVoting`,
  },
  {
    role: "KnightChain",
    details: ` A blockchain-based chess dApp on Aptos featuring AI-powered gameplay and asset management, offering multiplayer and training modes with secure Move smart contracts and play-to-earn mechanics. | 2025 | Move AI Hackathon`,
    description: `-> Node.js, Javascript, Move, React, TypeScript, CSS, HTML`,
    link: `https://github.com/ayush121314/KnightChain`,
  },
];

const quickActionList = [
  {
    text: "Download CV",
    nick: "d",
    icon: <FiDownload />,
    target: NitishCV,
  },
  {
    text: "Connect on LinkedIn",
    nick: "k",
    icon: <FiAward />,
    target: "https://www.linkedin.com/in/nitish-gupta-2676b5250/",
  },
  {
    text: "Explore GitHub",
    nick: "g",
    icon: <FiGithub />,
    target: "https://github.com/Nitish-d-Great",
  },
  {
    text: "Book a meeting",
    nick: "b",
    icon: <FiCalendar />,
    target: "https://meet.google.com/",
  },
  {
    text: "Send an Email",
    nick: "e",
    icon: <FiMail />,
    target: "mailto:nit.nitish02@gmail.com",
  },
  {
    text: "Connect on Instagram",
    nick: "g",
    icon: <FiInstagram />,
    target: "https://www.instagram.com/nitish_d_great/",
  },

];

export {
  bioDescription,
  careerPath,
  academyPath,
  quickActionList,
  openSourcePath,
  volunteeringPath,
  hackingPath,
};
