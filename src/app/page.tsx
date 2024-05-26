import Portfolio from "@/components/Portfolio";
import Image from "next/image";
import Link from "next/link";
import {Arrow} from "@/components/svg";

export default function Home() {
    return (
        <>
            <div>
                <div className='flex justify-center items-center w-full h-[100vh] flex-col gap-[32px]'>
                    <Image
                        className='shadow-2xl shadow-primary-brand rounded-[32px] ease-in-out duration-300'
                        src={'/images/sspzoa_logo.svg'}
                        alt={'sspzoa'}
                        width={180}
                        height={180}
                    />
                    <h1 className='text-[32px] sm:text-[48px] font-[800] text-grayscale-1000'>I&apos;m Seungpyo Suh</h1>
                    <Link href='#portfolio' className='absolute bottom-[75px] flex flex-col justify-center items-center gap-[4px]'>
                        <div className='animate-upDown'>
                            <Arrow />
                        </div>
                        <h1 className='text-itemDescription'>스크롤하여 더 알아보기</h1>
                    </Link>
                </div>
                <div id="portfolio">
                    <Portfolio/>
                </div>
            </div>
        </>
    );
}
