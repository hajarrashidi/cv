import { InfoItem } from "@/app/components/InfoItem";
import {Profile} from "@/app/components/header/Profile";

export const ContactInfo = ({ infoItems }: { infoItems: InfoItemProps[] }) => (
  <div className="contactInfo rounded-lg border border-gray-200">
    <div className="flex flex-wrap justify-center pb-4 pt-5">
      <div className="profile-picture-frame">
        <Profile />
      </div>
    </div>
    <div className="flex flex-wrap justify-center items-center contactInfoBar">
      <div className="flex flex-wrap m-0">
        {infoItems.map(({ label, content }, index) => (
          <InfoItem key={index} label={label} content={content} />
        ))}
      </div>
    </div>
  </div>
);