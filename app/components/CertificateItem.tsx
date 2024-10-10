export const CertificateItem = ({certificate}: { certificate: Certificate }) => {

  const {name, date, organization, link} = certificate;

  return (
    <div className="relative pb-2">
      <div className="bg-white rounded-lg p-3.5 md:p-6">


        <h2 className="text-sm font-semibold flex items-center pb-1">
          <span>{name}</span>
          {organization && (
            <>
              <span className="mx-2 border-l-2 h-4 rounded border-gra-300"></span>
              <span>{organization}</span>
            </>
          )}
        </h2>
        <p className="text-xs">{date}</p>

        <br/>

        <a className="text-xs break-words" target="_blank" href={link}>
          {link}
        </a>


      </div>
    </div>
  );
};
