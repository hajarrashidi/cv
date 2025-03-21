interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section = ({title, children}: SectionProps) => (
  <div>
    <h1 className="text-sm pb-2 layout-section">{title}</h1>
    <div>{children}</div>
  </div>
)
