import {CardLayout} from "@/app/components/Layout/Card";

export const Education = ({education}: { education: Education }) => {
  const {degree, description, institution, startDate, endDate} = education;

  return (
    <CardLayout
      title={degree}
      subtitle={institution}
      dateRange={`${startDate} - ${endDate}`}
      description={description}
      content={null}
    />
  );
};