// Imports
import cv from "@/app/content/cv-EN.json";
import {Experience} from "@/app/components/Card/Experience/Experience";
import {Education} from "@/app/components/Card/Education/Education";
import {Section} from "@/app/components/Section/Section";
import {Contact} from "@/app/components/Card/Contact/Contact";
import {About} from "@/app/components/Card/About/About";
import {Certificate} from "@/app/components/Card/Certificate/Certificate";

// Types
interface InfoItemProps {
  content: string;
  type: string;
}

// Cv Component
export const Cv = () => {

  // Destructure cv object
  const {email, workExperience, education, certificates} = cv;

  // Contact Info
  const contactInfo: InfoItemProps[] = [
    {content: email, type: "email"},
  ];

  return (
    <div id="page" className="page">
      <div className="max-w-4xl mx-auto">
        {/* Grid Layout */}
        <div className="grid-container grid grid-cols-2 gap-3">

          {/* Left Column */}
          <div className="cv-row-half">

            {/* Contact Section */}
            <Section title="Contact">
              <Contact infoItems={contactInfo}/>
            </Section>

            {/* About Section */}
            <Section title="About">
              <About/>
            </Section>

            {/*Education Section*/}
            <Section title="Education">
              {education.map((educationItem, index) => (
                <Education key={index} education={educationItem}/>
              ))}
            </Section>

            {/* Certificate Section */}
            <Section title="Certificate">
              {certificates.map((certificate, index) => (
                <Certificate key={index} certificate={certificate}/>
              ))}
            </Section>
          </div>

          {/* Right Column */}
          <div className="cv-row-half  md:block">
            <Section title="Work experience">
              {workExperience.map((experience, index) => (
                <Experience key={index} experience={experience}/>
              ))}
            </Section>
          </div>

        </div>
      </div>
    </div>
  );
};
