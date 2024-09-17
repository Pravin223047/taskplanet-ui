interface WorkExperienceItem {
  id: number;
  title: string;
  desc: string;
  icon: string;
  number: number;
}

export const workExperience: WorkExperienceItem[] = [
  {
    id: 1,
    title: "Facebook",
    desc: "A versatile platform for connecting with friends, family, and businesses while advertising products.",
    icon: "/SocialMedia/facebook.webp",
    number: 5,
  },
  {
    id: 2,
    title: "Instagram",
    desc: "A visual platform for sharing photos and videos, connecting with audiences through engaging content.",
    icon: "/SocialMedia/instagram.webp",
    number: 5,
  },
  {
    id: 3,
    title: "Twitter",
    desc: "Known for real-time updates and concise messages, useful for news, trends, and quick interactions.",
    icon: "/SocialMedia/x.webp",
    number: 5,
  },
  {
    id: 4,
    title: "LinkedIn",
    desc: "A professional networking site for career growth, recruitment, and industry insights.",
    icon: "/SocialMedia/linkedIn.webp",
    number: 5,
  },
  {
    id: 5,
    title: "YouTube",
    desc: "A video-sharing platform for uploading, viewing, and interacting with video content for global reach.",
    icon: "/SocialMedia/youTube.webp",
    number: 5,
  },
  {
    id: 6,
    title: "Telegram",
    desc: "Privacy-focused messaging app with large group chats for secure communication.",
    icon: "/SocialMedia/telegram.webp",
    number: 5,
  },
];
