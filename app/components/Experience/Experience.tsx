import {CardLayout} from "@/app/components/Layout/Card/Index";
import {CardDate} from "@/app/components/Layout/Card/CardDate";
import {CardHeader} from "@/app/components/Layout/Card/CardHeader";
import {CardDescription} from "@/app/components/Layout/Card/CardDescription";

export const Experience = ({experience}: { experience: Experience }) => {
  const {position, company, startDate, endDate, new_startDate, new_endDate, description, assignments, skills} =
    experience;

  const calculateDuration = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = end === "Nuvarande" ? new Date() : new Date(end);
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
    const diffMonths = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    return diffYears > 0 ? `${diffYears} år ${diffMonths} mån` : `${diffMonths} mån`;
  };

  const duration = calculateDuration(new_startDate, new_endDate);

  return (
    <CardLayout>
      <CardHeader title={position} secondTitle={company}/>
      <CardDate startDate={startDate} endDate={endDate + ", " + duration}/>
      <div className="text-xs mt-2">

        <>
          <CardDescription description={description}/>

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

      </div>
    </CardLayout>

  );
};
