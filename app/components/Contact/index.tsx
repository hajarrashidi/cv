import Link from "next/link";
import Image from "next/image";
import {CardLayout} from "@/app/components/Layout/Card/Index";

export const Contact = ({infoItems}: { infoItems: InfoItemProps[] }) => (
    <CardLayout padding={false}>
      <div className="contactInfo">
        <div className="xd">
          <div className="lightBrownCard">
            <div className="flex flex-wrap justify-center pt-4 pb-2">
              <div className="profile-picture-frame">
                <div>
                  <Image
                    src="/images/work_picture.avif"
                    alt="Profile"
                    width={138}
                    height={138}
                    className="rounded-full profile-picture object-cover"
                  />
                  {/*<h1 className="text-center text-2xl mt-2.5">Hajar Rashidi</h1>*/}
                </div>
              </div>
            </div>
            <div className="contactInfoBar rounded-lg ">
              <div className="">
                {infoItems.map(({content, type}, index) => (
                  <div key={index} className="infoItem rounded-lg">
                    {type === "phone" && <Link href={`tel:${content}`}>{content}</Link>}
                    {type === "email" && <Link href={`mailto:${content}`}>{content}</Link>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </CardLayout>
  )
;