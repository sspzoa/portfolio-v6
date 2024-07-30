import Awards from '@/components/Awards';
import Info from '@/components/Info';
import Projects from '@/components/Projects';

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <h1 className="text-center sm:text-right text-readable text-grayscale-500">
      Copyright © 2023-{currentYear} Seungpyo Suh All rights reserved.
    </h1>
  );
};

export default function Portfolio() {
  return (
    <div id="portfolio" className="flex flex-col gap-[10px] sm:flex-row sm:gap-0">
      <div className="left-0 top-0 hidden sm:block z-20">
        <Info />
      </div>
      <div className="sm:fixed flex-shrink-0 sm:opacity-0 opacity-100 z-10">
        <Info />
      </div>
      <div className="flex flex-col w-full h-[calc(100vh-32px)] px-[16px] py-[30px] gap-[30px] sm:gap-[50px] sm:p-[50px] bg-grayscale-200 rounded-t-[16px] sm:rounded-[16px] sm:m-[16px] overflow-auto">
        <Awards />
        <Projects />
        <Copyright />
      </div>
    </div>
  );
}
