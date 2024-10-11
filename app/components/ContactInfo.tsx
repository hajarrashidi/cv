import {Profile} from "@/app/components/header/Profile";
import Link from "next/link";

export const ContactInfo = ({infoItems}: { infoItems: InfoItemProps[] }) => (
    <div className="contactInfo rounded-lg">
      <div className="flex flex-wrap justify-center pb-4 pt-4">
        <div className="profile-picture-frame">
          <Profile/>
        </div>
      </div>
      <div className="contactInfoBar ">
        <div className="">

          {infoItems.map(({content, type}, index) => (
            <div key={index} className="infoItem rounded">
              {type === "phone" && <Link href={`tel:${content}`}>{content}</Link>}
              {type === "email" && <Link href={`mailto:${content}`}>{content}</Link>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
;