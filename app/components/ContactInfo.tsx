import {Profile} from "@/app/components/header/Profile";

export const ContactInfo = ({infoItems}: { infoItems: InfoItemProps[] }) => (
    <div className="contactInfo rounded-lg border border-gray-200">
      <div className="flex flex-wrap justify-center pb-4 pt-5">
        <div className="profile-picture-frame">
          <Profile/>
        </div>
      </div>
      <div className="contactInfoBar">
        <div className="">

          {infoItems.map(({label, content}, index) => (
            <div key={index} className="infoItem">
              {content}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
;