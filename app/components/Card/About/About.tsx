import {CardLayout} from "@/app/components/Card/CardLayout";
import {about} from "@/app/content/cv-EN.json";


export const About = () => {
  return (
    <CardLayout>
      <div className="text-sm space-y-4">
        <p className="descriptionText" >{about.introduction}</p>
        <p className="descriptionText">{about.interests}</p>
      </div>
    </CardLayout>
  );
};