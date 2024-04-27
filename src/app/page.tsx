import Info from "@/components/Info";
import Awards from "@/components/Awards";
import Projects from "@/components/Projects";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className='flex flex-col gap-[10px] sm:flex-row sm:gap-0 z-10'>
                <div className='fixed left-0 hidden sm:block'>
                    <Info/>
                </div>
                <div className='flex-shrink-0 sm:opacity-0 opacity-100'>
                    <Info/>
                </div>
                <div className='flex flex-col w-full p-[30px] gap-[30px] sm:gap-[50px] sm:p-[50px]'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-[16px]'>
                        <Link href={'https://disquiet.io/@sspzoa'} target='_blank' rel="noreferrer"
                              className=' w-full bg-grayscale-100 p-[20px] rounded-[16px] flex justify-center items-center hover:drop-shadow-md ease-in-out duration-500 hover:-translate-y-[8px]'>
                            <Image className='overflow-hidden' src={'/images/disquiet.svg'} alt={'disquiet'} height={24} width={115} />
                        </Link>
                        <Link href={'https://velog.io/@sspzoa/posts'} target='_blank' rel="noreferrer"
                              className='w-full bg-grayscale-100 p-[20px] rounded-[16px] flex flex-row gap-[12px] justify-center items-center hover:drop-shadow-md ease-in-out duration-500 hover:-translate-y-[8px]'>
                            <Image src={'/images/velog.svg'} alt={'velog'} width={24} height={24} />
                            <h1 className='text-firaMono'>sspzoa.log</h1>
                        </Link>
                    </div>
                    <Awards/>
                    <Projects/>
                    <div>
                        <h1 className='text-center sm:text-right text-readable text-grayscale-500'>Copyright © 2023-{currentYear} Seungpyo Suh All rights reserved.</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

