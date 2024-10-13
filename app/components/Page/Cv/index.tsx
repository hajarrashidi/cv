// page json data
import {cv} from "@/app/content/cv";
// Components
import {Experience} from "@/app/components/Experience/Experience";
import {Education} from "@/app/components/Education";
import {Section} from "@/app/components/Layout/Section";
import {Contact} from "@/app/components/Contact";
import {Key} from "react";
import {About} from "@/app/components/About";
import {Certificate} from "@/app/components/Certificate";

export const Cv = () => {
  const {phone, email, workExperience, education, certificates} = cv;

  const infoItems: InfoItemProps[] = [
    {content: phone, type: "phone"},
    {content: email, type: "email"},
  ];

  // Experience
  const experienceItems = workExperience.map(
    (experience: Experience, index: Key) => (
      <Experience key={index} experience={experience}/>
    ),
  );

  // Education
  const educationItems = education.map(
    (educationItem: Education, index: Key) => (
      <Education key={index} education={educationItem}/>
    ),
  );

  // Certificates
  const certificatesItems = certificates.map(
    (certificate: Certificate, index: Key) => (
      <Certificate key={index} certificate={certificate}/>
    ),
  );

  return (
    <div>
      {/*<SaveAsPdf/>*/}

      <main id="page" className="m-0 p-0 min-h-screen pl-3 pr-3 pt-0 pb-8">

        <div className="max-w-4xl mx-auto">


          <div className="flex flex-col md:flex-row md:space-x-3">
            <div className="item">

              {/* Contact */}
              <Section title="Kontakt Uppgifter">
                <Contact infoItems={infoItems}/>
              </Section>

              {/* About */}
              <Section title="Om mig">
                <About/>
              </Section>

              <Section title="Utbildning">{educationItems}</Section>

              <Section title="Certifikat & Diplom">
                {certificatesItems}
              </Section>


            </div>

            <div className="item">
              <Section title="Arbetslivserfarenhet">{experienceItems}</Section>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};
