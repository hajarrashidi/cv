import {CardLayout} from "@/app/components/Card/CardLayout";
import {CardDate} from "@/app/components/Card/CardDate";
import {CardHeader} from "@/app/components/Card/CardHeader";

interface Certificate {
  name: string;
  organization: string;
  date: string;
  link?: string;
  description?: string;
}


export const Certificate = ({certificate}: { certificate: Certificate }) => {

  const {name, date, organization, link, description} = certificate;

  return (
    <CardLayout>

      <CardHeader title={name} secondTitle={organization}/>
      <CardDate startDate={date}/>

      {description && (
        <div className="text-xs pt-3">
          {description}
        </div>
      )}


      <div className="pt-1.5 ">
        <a
          className="text-xs break-words hover:text-gray-900 hover:border-b hover:border-gray-700 transition duration-1000"
          target="_blank" href={link}>
          {link}
        </a>
      </div>

    </CardLayout>
  );
};
