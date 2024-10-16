import {ReactNode} from "react";

interface CardLayoutProps {
  children: ReactNode;
  padding?: boolean;
}

export const CardLayout = ({children, padding = true}: CardLayoutProps) => (
  <div className=" pb-2">
    <div className={`bg-white rounded-lg overflow-hidden ${padding ? 'p-4 md:p-6' : ''}`}>
      {children}
    </div>
  </div>
);
