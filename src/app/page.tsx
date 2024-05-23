import Info from "@/components/Info";
import Awards from "@/components/Awards";
import Projects from "@/components/Projects";

export default function Home() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className='flex flex-col gap-[10px] sm:flex-row sm:gap-0'>
                <div className='fixed left-0 hidden sm:block z-20'>
                    <Info/>
                </div>
                <div className='flex-shrink-0 sm:opacity-0 opacity-100 z-10'>
                    <Info/>
                </div>
                <div className='flex flex-col w-full px-[16px] py-[30px] gap-[30px] sm:gap-[50px] sm:p-[50px]'>
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

