import Image from 'next/image';

export const ProfileSection = () => (
  <div className="flex flex-col gap-[10px] items-center sm:items-start">
    <Image className="rounded-full" src={'/images/sspzoa_logo.svg'} alt="sspzoa" width={120} height={120} />
    <h1 className="text-[32px] font-[800] text-grayscale-1000">Seungpyo Suh</h1>
    <p className="text-paragraph1 text-grayscale-600 text-center sm:text-left">
      I&apos;m a Mobile/Frontend Engineer
      <br />
      passionate about creating and learning.
    </p>
  </div>
);
