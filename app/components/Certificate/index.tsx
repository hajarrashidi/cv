import {CardLayout} from "@/app/components/Layout/Card/Index";
import {CardDate} from "@/app/components/Layout/Card/CardDate";
import {CardHeader} from "@/app/components/Layout/Card/CardHeader";

export const Certificate = ({certificate}: { certificate: Certificate }) => {

  const {name, date, organization, link} = certificate;

  return (
    <CardLayout>

      <CardHeader title={name} secondTitle={organization}/>
      <CardDate startDate={date}/>
      <br/>

      <a className="text-xs break-words" target="_blank" href={link}>
        {link}
      </a>
    </CardLayout>
  );
};
