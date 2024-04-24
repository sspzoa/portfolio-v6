import Info from "@/components/Info";
import Awards from "@/components/Awards";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <>
            <div className='flex flex-col gap-[10px] sm:flex-row sm:gap-0'>
                <div className='fixed left-0 hidden sm:block'>
                    <Info/>
                </div>
                <Info/>
                <div className='flex flex-col w-full p-[30px] gap-[30px] sm:gap-[50px] sm:p-[50px]'>
                    <Awards/>
                    <Projects/>
                </div>
            </div>
        </>
    );
}

