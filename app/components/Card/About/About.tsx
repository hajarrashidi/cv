import {CardLayout} from "@/app/components/Card/CardLayout";

const aboutContent = {
  introduction: "Hej, mitt namn är Hajar Rashidi och jag har arbetat som systemutvecklare i ungefär 7 år. För närvarande arbetar jag som konsult på Sogeti, där jag främst fokuserar på webbutveckling.",
  interests: "Några av mina intressen är programmering, hälsa och ekonomi. Jag är passionerad när det gäller att lära mig nya saker och att ständigt utvecklas. Jag skulle beskriva mig själv som en hjälpsam och kreativ person.",
  cvInfo: "Detta CV har jag utvecklat med hjälp av React, TypeScript och Tailwind.",
  githubLink: "https://github.com/hajarrashidi/cv",
  githubText: "github.com/hajarrashidi/cv"
};

export const About = () => {
  return (
    <CardLayout>
      <div className="text-sm space-y-4">
        <p>{aboutContent.introduction}</p>
        <p>{aboutContent.interests}</p>
        <p className="mb-2">{aboutContent.cvInfo}</p>
        <a
          className="inline-flex items-center text-gray-600  hover:text-gray-900  hover:border-gray-700 transition duration-1000"
          href={aboutContent.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {aboutContent.githubText}
        </a>
      </div>
    </CardLayout>
  );
};