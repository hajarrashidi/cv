import {Card} from "@/app/components/Card";

export const ExperienceItem = ({experience}: { experience: Experience }) => {
  const {position, company, startDate, endDate, description, assignments, skills} =
    experience;

  return (
    <Card
      title={position}
      subtitle={company}
      dateRange={`${startDate} - ${endDate}`}
      content={
        <>

          <div className="">
            <h3 className="text-xs font-bold text-gray-600 pb-1">Beskrivning</h3>
            <p className="text-sm whitespace-pre-wrap">
              {description}
            </p>
          </div>

          {assignments?.length && (
            <div className="mt-3">
              <h3 className="text-xs font-bold text-gray-600 pb-1">Kunder</h3>
              {assignments.map((assignment, idx) => (
                <span
                  key={`${assignment.title}-${idx}`}
                  className="text-sm text-gray-700 pt-1 pb-1"
                >
                  {assignment.title}{idx < assignments.length - 1 && ', '}
                </span>
              ))}
            </div>
          )}

          {skills?.length && (
            <div className="mt-3">
              <h3 className="text-xs font-bold text-gray-600 pb-2">Skills</h3>

              <div className="flex flex-wrap">
                {skills.map((skill, idx) => (
                  <div
                    key={`${skill.title}-${idx}`}
                    className="pb-2 box-border pr-1"
                  >
                    <div
                      className="skill">
                      {skill.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      }
    />
  );
};
