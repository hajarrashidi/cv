import Link from "next/link";
import Image from "next/image";
import {CardLayout} from "@/app/components/Card/CardLayout";

interface ContactProps {
  content: string;
  type: string;
}

export const Contact = ({infoItems}: { infoItems: ContactProps[] }) => (
    <CardLayout padding={false}>
      <div className="contactInfo">
        <div className="xd">
          <div className="card-frame">
            <div className="flex flex-wrap justify-center pt-4 pb-2">
              <div className="profile-picture-frame">
                <div>
                  <Image
                    src="/images/work_picture.avif"
                    alt="Profile"
                    width={138}
                    height={138}
                    className="profile-picture"
                    priority
                  />
                  {/*<h1 className="text-center text-2xl mt-2.5">Hajar Rashidi</h1>*/}
                </div>
              </div>
            </div>
            <div className="card-contact-link-bar rounded-lg ">
              <div className="">
                {infoItems.map(({content, type}, index) => (
                  <div key={index} className="card-contact-link rounded-lg">
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