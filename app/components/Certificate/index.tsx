import {CardLayout} from "@/app/components/Layout/Card/Index";
import {CardDate} from "@/app/components/Layout/Card/CardDate";
import {CardHeader} from "@/app/components/Layout/Card/CardHeader";

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
