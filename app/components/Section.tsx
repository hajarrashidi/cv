export const Section = ({title, children}: SectionProps) => (
  <div>
    <h1 className="text-sm pb-3 pt-3 text-gray-600">{title}</h1>
    <div>{children}</div>
  </div>
)