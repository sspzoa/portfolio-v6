import type { AboutItemProps } from '@/types/AboutItem';

export const AboutSection = () => (
  <div className="flex flex-col gap-[20px] items-center sm:items-start">
    <h1 className="text-itemTitle text-grayscale-600">About</h1>
    <div className="grid grid-cols-2 sm:flex sm:flex-col gap-[40px] sm:gap-[16px]">
      <AboutItem date="2024.03~" title="Project Manager" description="DIN(딘)" />
      <AboutItem date="2023.10~" title="App Developer" description="Dimipay(디미페이)" />
    </div>
  </div>
);

const AboutItem: React.FC<AboutItemProps> = ({ date, title, description }) => (
  <div className="flex flex-col sm:flex-row w-full gap-[12px] items-center">
    <h2 className="text-description text-grayscale-500 sm:w-[70px]">{date}</h2>
    <div className="flex flex-col gap-[2px]">
      <h1 className="text-itemTitle text-grayscale-800">{title}</h1>
      <p className="text-itemDescription text-grayscale-800">{description}</p>
    </div>
  </div>
);
