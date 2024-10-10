// page json data
import {cv} from "@/app/data";
// Components
import {ExperienceItem} from "@/app/components/ExperienceItem";
import {EducationItem} from "@/app/components/EducationItem";
import {SaveAsPdf} from "@/app/components/SaveAsPdf";
import {Section} from "@/app/components/Section";
import {ContactInfo} from "@/app/components/ContactInfo";
import {Key} from "react";
import {AboutMe} from "@/app/components/AboutMe";
import {CertificateItem} from "@/app/components/CertificateItem";

export const Main = () => {
  const {phone, email, dob, github, workExperience, education, certificates} = cv;

  const infoItems: InfoItemProps[] = [
    {label: "Phone", content: phone},
    {label: "Email", content: email},
  ];

  // Experience
  const experienceItems = workExperience.map(
    (experience: Experience, index: Key) => (
      <ExperienceItem key={index} experience={experience}/>
    ),
  );

  // Education
  const educationItems = education.map(
    (educationItem: Education, index: Key) => (
      <EducationItem key={index} education={educationItem}/>
    ),
  );

  // Certificates
  const certificatesItems = certificates.map(
    (certificate: Certificate, index: Key) => (
      <CertificateItem key={index} certificate={certificate}/>
    ),
  );

  return (
    <div>
      <SaveAsPdf/>

      <main id="page" className="m-0 p-0 min-h-screen pl-3 pr-3 pt-3 pb-8">
        <div className="max-w-4xl mx-auto">


          <div className="flex flex-col md:flex-row md:space-x-3">
            <div className="flex-1">
              <Section title="Kontakt Uppgifter">
                <ContactInfo infoItems={infoItems}/>
              </Section>

              <Section title="Om mig">
                <AboutMe/>
              </Section>

              <Section title="Utbildning">{educationItems}</Section>

              <Section title="Certifikat">
                {certificatesItems}
              </Section>


            </div>

            <div className="flex-1">
              <Section title="Arbetslivserfarenhet">{experienceItems}</Section>
            </div>


          </div>
        </div>
      </main>
    </div>
  );
};
