import {cv} from "@/app/content/cv";
import {Experience} from "@/app/components/Experience/Experience";
import {Education} from "@/app/components/Education";
import {Section} from "@/app/components/Layout/Section";
import {Contact} from "@/app/components/Contact";
import {About} from "@/app/components/About";
import {Certificate} from "@/app/components/Certificate";

interface InfoItemProps {
  content: string;
  type: string;
}

export const Cv = () => {
  const {phone, email, workExperience, website, education, certificates} = cv;

  const infoItems: InfoItemProps[] = [
    {content: phone, type: "phone"},
    {content: email, type: "email"},
    {content: website, type: "website"},
  ];

  return (
    <main id="page" className="m-0 p-0 min-h-screen pl-3 pr-3 pt-0 pb-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:space-x-3">
          <div className="cv-row-half">
            <Section title="Kontakt Uppgifter">
              <Contact infoItems={infoItems}/>
            </Section>

            <Section title="Om mig">
              <About/>
            </Section>

            <Section title="Utbildning">
              {education.map((educationItem, index) => (
                <Education key={index} education={educationItem}/>
              ))}
            </Section>

            <Section title="Certifikat & Diplom">
              {certificates.map((certificate, index) => (
                <Certificate key={index} certificate={certificate}/>
              ))}
            </Section>
          </div>

          <div className="cv-row-half">
            <Section title="Arbetslivserfarenhet">
              {workExperience.map((experience, index) => (
                <Experience key={index} experience={experience}/>
              ))}
            </Section>
          </div>
        </div>
      </div>
    </main>
  );
};
