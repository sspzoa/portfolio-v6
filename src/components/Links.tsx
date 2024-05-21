import Link from "next/link";
import {Velog} from "@/components/svg";

export default function Links() {
    return (
        <div className='flex flex-col gap-[20px] w-full'>
            <h1 className='text-itemTitle text-grayscale-600'>Velog</h1>
            <div className='grid grid-cols-1 gap-[16px]'>
                <Link href={'https://velog.io/@sspzoa/posts'} target='_blank' rel="noreferrer"
                      className='border-grayscale-200 border-[1px] w-full bg-grayscale-100 p-[20px] rounded-[16px] flex flex-row gap-[12px] justify-center items-center ease-in-out duration-500 hover:-translate-y-[8px]'>
                    <Velog/>
                    <h1 className='font-firamono font-semibold text-grayscale-800'>sspzoa.log</h1>
                </Link>
            </div>
        </div>
    )
}
