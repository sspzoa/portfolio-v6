'use client';

import { Arrow } from '@/svg/svg';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

const ScrollLink = () => (
  <span
    id="scroll-link"
    className="absolute bottom-[75px] flex flex-col justify-center items-center gap-[4px] cursor-pointer">
    <div className="animate-upDown">
      <Arrow />
    </div>
    <h1 className="text-itemDescription">스크롤하여 더 알아보기</h1>
  </span>
);

const Intro = () => {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const handleScroll = (e: MouseEvent) => {
      e.preventDefault();
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    };

    const scrollLink = document.getElementById('scroll-link');
    if (scrollLink) {
      scrollLink.addEventListener('click', handleScroll);
    }

    return () => {
      if (scrollLink) {
        scrollLink.removeEventListener('click', handleScroll);
      }
    };
  }, []);

  const handleImageClick = useCallback(() => {
    setClickCount((prevCount) => {
      if (prevCount === 4) {
        window.open('https://pop-one-bay.vercel.app/', '_blank');
        return 0;
      }
      return prevCount + 1;
    });
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-[100vh] flex-col gap-[32px]">
      <Image
        className="shadow-2xl shadow-primary-brand rounded-[32px] ease-in-out duration-300 cursor-pointer"
        src={'/images/sspzoa_logo.svg'}
        alt={'sspzoa'}
        width={180}
        height={180}
        onClick={handleImageClick}
      />
      <h1 className="text-[32px] sm:text-[48px] font-[800] text-grayscale-1000">I&apos;m Seungpyo Suh</h1>
      <ScrollLink />
    </div>
  );
};

export default Intro;
