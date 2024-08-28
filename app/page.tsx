import {cv} from './data';

interface ContactInfoProps {
  children: React.ReactNode;
}

interface InfoItemProps {
  content: string;
}

interface Experience {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  assignments?: { title: string }[];
  logotype?: string;
}

interface Education {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  location: string;
}

interface ExperienceItemProps {
  experience: Experience;
}

interface EducationItemProps {
  education: Education;
}

// ContactInfo component
const ContactInfo = ({children}: ContactInfoProps) => (
  <div className="bg-white rounded-lg border border-gray-200 p-2.5">
    <div className="flex flex-wrap m-0">{children}</div>
  </div>
);

// InfoItem component
const InfoItem = ({content}: InfoItemProps) => (
  <a
    className="text-sm bg-gray-50 border border-blue-50 rounded p-1 m-1 flex-grow inline-flex items-center justify-center  cursor-pointer">
    {content}
  </a>
);

const ExperienceItem = ({experience}: ExperienceItemProps) => (
  <div className="relative pb-5 pl-14 pr-4">
    <div className="bg-white rounded-lg border border-gray-200 p-3.5">
      <h2 className="text-sm font-semibold flex items-center pb-1">
        <span>{experience.position}</span>
        <span className="mx-2 border-l-2 h-4 rounded border-grey-100"></span>
        <span>{experience.company}</span>
      </h2>

      <p className="text-xs text-gray-600">
        {experience.startDate} - {experience.endDate}
      </p>

      {Array.isArray(experience.assignments) && experience.assignments.length > 0 && (
        <div className="mt-3">
          <h3 className="text-xs font-medium pb-1">Assignments</h3>
          {experience.assignments.map((assignment, idx) => (
            <div key={idx} className="pt-1 pb-1">
              <p className="text-xs text-gray-700">{assignment.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    {experience.logotype && (
      <div className="absolute left-3 top-1/2 w-8 h-8 bg-gray-200 rounded-full transform -translate-y-1/2">
        <img
          src={experience.logotype}
          alt={`${experience.position} at ${experience.company}`}
          className="w-full h-full rounded-full object-contain p-1"
        />
      </div>
    )}
  </div>
);

const EducationItem = ({education}: EducationItemProps) => (
  <div className="relative pb-2 pl-14 pr-4">
    <div className="bg-white rounded-lg border border-gray-200 p-3.5">
      <h2 className="text-sm font-semibold flex items-center pb-1">
        <span>{education.degree}</span>
        <span className="mx-2 border-l-2 h-4 rounded border-grey-100"></span>
        <span>{education.institution}</span>
      </h2>
      <p className="text-xs text-gray-700">
        {education.startDate} - {education.endDate}
      </p>
      <p className="text-xs text-gray-500">{education.location}</p>
    </div>
  </div>
);

const Page = () => {
  return (
    <main className="m-0 p-0 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold pt-10 pb-8 text-center pl-6">
          {cv.fullName}
        </h1>
        <div className="relative">
          <div className="border-l-2 rounded border-gray-200 absolute left-7 top-0 h-full"></div>
          <h1 className="text-sm  text-gray-500 ml-14">Kontakt</h1>
          <div className="relative pb-4 pt-2 pl-14 pr-4">
            <ContactInfo>
              <InfoItem content="+46 072 448 76 18"/>
              <InfoItem content="hajarrashidi@gmail.com"/>
              <InfoItem content="1996-05-24"/>
              <InfoItem content="https://github.com/hajarrashidi"/>
            </ContactInfo>
          </div>
        </div>

        <div className="relative">
          <div className="border-l-2 rounded border-gray-200 absolute left-7 top-0 h-full"></div>
          <h2 className="text-sm p-3 text-gray-500 ml-12">Arbetslivserfarenhet</h2>
          {cv.workExperience.map((experience, index) => (
            <ExperienceItem key={index} experience={experience}/>
          ))}
        </div>

        <h2 className="text-sm p-3 text-gray-500 ml-12">Utbildning</h2>
        <div className="relative">
          <div className="border-l-2 rounded border-gray-200 absolute left-7 top-0 h-full"></div>
          {cv.education.map((education, index) => (
            <EducationItem key={index} education={education}/>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;