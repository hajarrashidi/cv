interface InfoItemProps {
  label: string;
  content: string;
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

interface CardProps {
  title: string;
  description?: string;
  subtitle?: string;
  dateRange: string;
  content: React.ReactNode;
}

interface Experience {
  position: string;
  description?: string;
  company: string;
  startDate: string;
  endDate: string;
  skills?: { title: string }[];
  assignments?: { title: string }[];
}

interface Education {
  degree: string;
  description?: string;
  institution: string;
  startDate: string;
  endDate: string;
  location: string;
}