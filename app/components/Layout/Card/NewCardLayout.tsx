import {ReactNode} from "react";

interface NewCardLayoutProps {
  children: ReactNode;
  padding?: boolean;
}

export const NewCardLayout = ({children, padding = true}: NewCardLayoutProps) => (
  <div className=" pb-2">
    <div className={`bg-white rounded-lg overflow-hidden ${padding ? 'p-3.5 md:p-6' : ''}`}>
      {children}
    </div>
  </div>
);
