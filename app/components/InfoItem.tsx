export const InfoItem = ({ label, content }: InfoItemProps) => (
  <div className="text-sm infoItem rounded p-1 m-1 flex-grow inline-flex items-center justify-center">
    {content}
  </div>
);