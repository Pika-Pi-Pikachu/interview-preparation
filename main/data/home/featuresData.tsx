import { FaLightbulb, FaMicrophone, FaBook, FaUsers, FaFlask, FaRobot } from 'react-icons/fa';

import type { IFeature } from '@/main/types/home.types';

export const featuresData: IFeature[] = [
  {
    id: '1',
    title: 'Smart Resume Analyzer',
    description: 'Analyze and optimize your resume with AI-powered insights tailored to your target job.',
    icon: <FaLightbulb className="text-3xl" />,
    link: '/question-bank',
  },
  {
    id: '6',
    title: 'AI Learning',
    description: 'Experience real-time AI-driven interviews questions to your role and level.',
    icon: <FaRobot className="text-3xl" />,
    link: '/ai-interview',
  },
  {
    id: '2',
    title: 'Mock Interviews',
    description: 'Practice with AI-powered mock interviews and receive instant feedback.',
    icon: <FaMicrophone className="text-3xl" />,
    link: 'https://mock-mate-three-delta.vercel.app/',
  },
  // {
  //   id: '3',
  //   title: 'Practical Interview',
  //   description: 'Hands-on coding scenarios designed to simulate real-world technical interview tasks.',
  //   icon: <FaFlask className="text-3xl" />,
  //   link: '/practical-interviews',
  // },
  {
    id: '4',
    title: 'Data Structures & Algorithms',
    description: 'Access comprehensive guides and curated questions for interview success.',
    icon: <FaBook className="text-3xl" />,
    link: '/tips-&-guides',
  },
  // {
  //   id: '5',
  //   title: 'Community Support',
  //   description: "Connect with peers, share experiences, and learn from others' interview journeys.",
  //   icon: <FaUsers className="text-3xl" />,
  //   link: '/community-support',
  // },
];
