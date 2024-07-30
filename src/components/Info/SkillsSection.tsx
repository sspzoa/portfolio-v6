import { Android, Flutter, Nest, React } from '@/svg/svg';

export const SkillsSection = () => (
  <div className="flex flex-col gap-[20px] items-center sm:items-start">
    <h1 className="text-itemTitle text-grayscale-600">Skills</h1>
    <div className="flex flex-row gap-[24px]">
      <Flutter />
      <Android />
      <React />
      <Nest />
    </div>
  </div>
);
