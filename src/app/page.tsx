import Info from "@/components/Info";
import Awards from "@/components/Awards";
import Projects from "@/components/Projects";
import Portfolio from "@/components/Portfolio";
import {Wing} from "@/components/svg";
import Image from "next/image";

export default function Home() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div>
                <div className='flex justify-center items-center w-full h-[100vh] flex-col gap-[32px]'>
                    <Image className='shadow-2xl shadow-primary-brand rounded-[32px]' src={'/images/sspzoa_logo.svg'} alt={'sspzoa'} width={180} height={180}/>
                    <h1 className='text-[32px] sm:text-[48px] font-[800] text-grayscale-1000'>I&apos;m Seungpyo Suh</h1>
                </div>
                <Portfolio/>
            </div>
        </>
    );
}

