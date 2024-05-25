import Portfolio from "@/components/Portfolio";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div>
                <div className='flex justify-center items-center w-full h-[100vh] flex-col gap-[32px]'>
                    <Link href="#portfolio">
                            <Image
                                className='shadow-2xl shadow-primary-brand rounded-[32px] ease-in-out duration-300 cursor-pointer hover:scale-125'
                                src={'/images/sspzoa_logo.svg'}
                                alt={'sspzoa'}
                                width={180}
                                height={180}
                            />
                    </Link>
                    <h1 className='text-[32px] sm:text-[48px] font-[800] text-grayscale-1000'>I&apos;m Seungpyo Suh</h1>
                </div>
                <div id="portfolio">
                    <Portfolio/>
                </div>
            </div>
        </>
    );
}
