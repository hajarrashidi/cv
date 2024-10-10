export const AboutMe = () => (
  <div className="bg-white rounded-lg border border-gray-200 p-3.5 md:p-6">
    <div className="flex flex-wrap">
      <div className="text-sm">
        Hej, mitt namn är Hajar och jag har arbetat som systemutvecklare i 6 år. Jag jobbar
        främst med fullstack utveckling.

        <br/><br/>

        Några av mina intressen är webbutveckling, hälsa och ekonomi. Just nu lär jag mig Helix ett (ergonomisk
        Integrerad utvecklingsmiljö) och Rust på fritiden.

        <br/><br/>

        <div className="p-1.5 text-xs border-dashed border-2 border-gray-150 text-gray-700 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
             role="alert">
          Detta CV har jag utvecklad med hjälp av React, Typescript och Tailwind. Koden finns på <a className="text-gray-700" href="https://github.com/hajarrashidi/cv"><span className="font-semibold">github.com/hajarrashidi/cv</span></a> eller så kan du besöka sidan på
          <a className="text-gray-700" href="https://veycloud.com"> <span className="font-semibold">veycloud.com</span></a>
        </div>
      </div>
    </div>
  </div>
);