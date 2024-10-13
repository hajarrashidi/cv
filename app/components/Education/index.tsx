import {CardLayout} from "@/app/components/Layout/Card/Index";
import {CardDate} from "@/app/components/Layout/Card/CardDate";
import {CardHeader} from "@/app/components/Layout/Card/CardHeader";
import {CardDescription} from "@/app/components/Layout/Card/CardDescription";

export const Education = ({education}: { education: Education }) => {
  const {degree, description, institution, startDate, endDate} = education;

  return (
    <CardLayout>
      <CardHeader title={degree} secondTitle={institution}/>
      <CardDate startDate={startDate} endDate={endDate}/>
      <CardDescription description={description}/>
    </CardLayout>

  );
};