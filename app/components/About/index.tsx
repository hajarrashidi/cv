import {CardLayout} from "@/app/components/Layout/Card/Index";

export const About = () => (
  <CardLayout>
    <div className="flex flex-wrap">
      <div className="text-sm">
        Hej, mitt namn är Hajar Rashidi och jag har arbetat som systemutvecklare i 6 år. Jag jobbar i dagsläget som konsult på Sogeti. Jobbat främst med webbutveckling.

        <br/><br/>

        Några av mina intressen är programmering, hälsa och ekonomi. Jag tycker om att lära mig nya saker och utvecklas. Jag skulle beskriva mig själv som en hjälpsam och kreativ person.

        <br/><br/>

        <div className="tips">
          Denna CV har jag utvecklad med hjälp av React, Typescript och Tailwind. Koden finns på <a
          className="text-gray-700" href="https://github.com/hajarrashidi/cv"><span
          className="font-semibold">github.com/hajarrashidi/cv</span></a>
        </div>
      </div>
    </div>
  </CardLayout>
);