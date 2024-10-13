export const Section = ({title, children}: SectionProps) => (
  <div>
    <h1 className="text-sm pb-2 pt-2 section">{title}</h1>
    <div>{children}</div>
  </div>
)
