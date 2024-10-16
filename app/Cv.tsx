import {cv} from "@/app/content/cv";
import {Experience} from "@/app/components/Card/Experience/Experience";
import {Education} from "@/app/components/Card/Education/Education";
import {Section} from "@/app/components/Section/Section";
import {Contact} from "@/app/components/Card/Contact/Contact";
import {About} from "@/app/components/Card/About/About";
import {Certificate} from "@/app/components/Card/Certificate/Certificate";

interface InfoItemProps {
  content: string;
  type: string;
}

export const Cv = () => {
  const {phone, email, workExperience, website, education, certificates} = cv;

  const contactInfo: InfoItemProps[] = [
    {content: phone, type: "phone"},
    {content: email, type: "email"},
    {content: website, type: "website"},
  ];

  return (
    <main id="page" className="m-0 p-0 min-h-screen pl-3 pr-3 pt-0 pb-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:space-x-3">
          <div className="cv-row-half md:order-1">
            <Section title="Kontakt Uppgifter">
              <Contact infoItems={contactInfo}/>
            </Section>

            <Section title="Om mig">
              <About/>
            </Section>

            <div className="md:hidden">
              <Section title="Arbetslivserfarenhet">
                {workExperience.map((experience, index) => (
                  <Experience key={index} experience={experience}/>
                ))}
              </Section>
            </div>

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

          <div className="cv-row-half md:order-2">
            <div className="hidden md:block">
              <Section title="Arbetslivserfarenhet">
                {workExperience.map((experience, index) => (
                  <Experience key={index} experience={experience}/>
                ))}
              </Section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
