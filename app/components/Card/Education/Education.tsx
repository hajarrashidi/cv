import {CardLayout} from "@/app/components/Card/CardLayout";
import {CardDate} from "@/app/components/Card/CardDate";
import {CardHeader} from "@/app/components/Card/CardHeader";
import {CardDescription} from "@/app/components/Card/CardDescription";

interface Education {
  degree: string;
  description: string;
  institution: string;
  startDate: string;
  endDate: string;
  location: string;
}

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