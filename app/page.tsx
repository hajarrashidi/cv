export default async function Page() {
  const cv = {
    fullName: "Hajar Rashidi",
    workExperience: [
      {
        position: "Software Engineer",
        company: "Sogeti",
        location: "Linköping",
        startDate: "March 2022",
        endDate: "Present",
        logotype: "/images/sogeti.png",
        assignments: [
          { title: "Mittuniversitetet" },
          { title: "SSAB" },
          { title: "Stångåstaden Studentbostäder" },
          { title: "Oskarshamns kärnkraftverk" },
          { title: "Samhall" },
          { title: "Luftfartsverket" },
        ],
      },
      {
        position: "Software Engineer",
        company: "Prek",
        location: "Linköping",
        startDate: "January 2020",
        endDate: "March 2022",
        logotype: "/images/prek.png",
      },
      {
        position: "Software Engineer",
        company: "Intiro",
        location: "Linköping",
        startDate: "August 2019",
        endDate: "December 2019",
        logotype: "/images/intiro.png",
        assignments: [
          { title: "RTI GROUP" },
        ],
      },
      {
        position: "Full Stack Developer",
        company: "JobTip AB",
        location: "Göteborg",
        startDate: "February 2019",
        endDate: "July 2019",
        logotype: "/images/jobtip.png",
      },
      {
        position: "Software Developer",
        company: "Stratsys AB",
        location: "Göteborg",
        startDate: "June 2018",
        endDate: "January 2019",
        logotype: "/images/stratsys.png",
      },
      {
        position: "Reseller",
        company: "GameStop",
        location: "Göteborg",
        startDate: "August 2016",
        endDate: "January 2017",
        logotype: "/images/gamestop.png",
      },
    ],
    education: [
      {
        degree: "Software Developer Java",
        institution: "Jensen YH",
        location: "Göteborg, Sweden",
        startDate: "2016",
        endDate: "2018",
      },
      {
        degree: "Web Developer JavaScript",
        institution: "Jensen YH",
        location: "Göteborg, Sweden",
        startDate: "2016",
        endDate: "2018",
      },
    ],
  };

  return (
    <main className="m-0 p-0 bg-gray-50 min-h-screen">
      {/* Container to center-align content */}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold pt-8 pb-4 text-center pl-6">{cv.fullName}</h1>
        <h1 className="text-md pb-2 text-center text-gray-600 pl-7">Experience</h1>

        <div className="relative">
          <div className="border-l-2 rounded border-gray-200 absolute left-7 top-0 h-full"></div>
          {cv.workExperience.map((experience, index) => (
            <div key={index} className="relative pb-2 pl-14 pr-4">
              <div className="bg-white rounded-lg border border-gray-200 p-3.5">
                <h2 className="text-sm font-semibold flex items-center pb-1">
                  <span>{experience.position}</span>
                  <span className="mx-2 border-l-2 h-4 rounded border-grey-100"></span>
                  <span>{experience.company}</span>
                </h2>

                <p className="text-xs text-gray-700">
                  {experience.startDate} - {experience.endDate}
                </p>
                <p className="text-xs text-gray-500">{experience.location}</p>

                {experience.assignments && experience.assignments.length > 0 && (
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
              <div className="absolute left-3 top-1/2 w-8 h-8 bg-gray-200 rounded-full transform -translate-y-1/2">
                {experience.logotype ? (
                  <img
                    src={experience.logotype}
                    alt={`${experience.position} at ${experience.company}`}
                    className="w-full h-full rounded-full object-contain p-1"
                  />
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <h1 className="text-md p-3 text-center text-gray-600 pl-7">Education</h1>

        <div className="relative">
          <div className="border-l-2 rounded border-gray-200 absolute left-7 top-0 h-full"></div>
          {cv.education.map((edu, index) => (
            <div key={index} className="relative pb-2 pl-14 pr-4">
              <div className="bg-white rounded-lg border border-gray-200 p-3.5">
                <h2 className="text-sm font-semibold flex items-center pb-1">
                  <span>{edu.degree}</span>
                  <span className="mx-2 border-l-2 h-4 rounded border-grey-100"></span>
                  <span>{edu.institution}</span>
                </h2>
                <p className="text-xs text-gray-700">
                  {edu.startDate} - {edu.endDate}
                </p>
                <p className="text-xs text-gray-500">{edu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}