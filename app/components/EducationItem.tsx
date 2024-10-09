import { Card } from "@/app/components/Card";

export const EducationItem = ({ education }: { education: Education }) => {
  const { degree, description, institution, startDate, endDate } = education;

  return (
    <Card
      title={degree}
      subtitle={institution}
      dateRange={`${startDate} - ${endDate}`}
      description={description}
    />
  );
};