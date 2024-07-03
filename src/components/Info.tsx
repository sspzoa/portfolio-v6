import Image from "next/image";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {Android, Flutter, Nest, React} from "@/components/svg";

export default function Info() {
    return (
        <>
            <div
                className='flex-shrink-0 h-auto w-full sm:w-[350px] sm:h-[100vh] px-[30px] py-[50px] sm:p-[50px] flex flex-col justify-between gap-[40px]'>
                <div className='flex flex-col gap-[50px]'>
                    <div className='flex flex-col gap-[10px] items-center sm:items-start'>
                        <Image className='rounded-full' src={'/images/sspzoa_logo.svg'} alt='sspzoa' width={120}
                               height={120}/>
                        <h1 className='text-[32px] font-[800] text-grayscale-1000'>
                            Seungpyo Suh
                        </h1>
                        <p className='text-paragraph1 text-grayscale-600 text-center sm:text-left'>
                            I&apos;m a Mobile/Frontend Engineer<br/>
                            passionate about creating and learning.
                        </p>
                    </div>
                    <div className='flex flex-col gap-[20px] items-center sm:items-start'>
                        <h1 className='text-itemTitle text-grayscale-600'>Skills</h1>
                        <div className='flex flex-row gap-[24px]'>
                            <Flutter/>
                            <Android/>
                            <React/>
                            <Nest/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[20px] items-center sm:items-start'>
                        <h1 className='text-itemTitle text-grayscale-600'>About</h1>
                        <div className='grid grid-cols-2 sm:flex sm:flex-col gap-[40px] sm:gap-[16px]'>
                            <div className='flex flex-col sm:flex-row w-full gap-[12px] items-center'>
                                <h2 className='text-description text-grayscale-500 sm:w-[70px]'>2024.03~</h2>
                                <div className='flex flex-col gap-[2px]'>
                                    <h1 className='text-itemTitle text-grayscale-800'>Project Manager</h1>
                                    <p className='text-itemDescription text-grayscale-800'>DIN(딘)
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col sm:flex-row w-full gap-[12px] items-center'>
                                <h2 className='text-description text-grayscale-500 sm:w-[70px]'>2023.10~</h2>
                                <div className='flex flex-col gap-[2px]'>
                                    <h1 className='text-itemTitle text-grayscale-800'>App Developer</h1>
                                    <p className='text-itemDescription text-grayscale-800'>Dimipay(디미페이)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-[20px] items-center sm:items-start'>
                    <h1 className='text-itemTitle text-grayscale-600'>Contact</h1>
                    <div className='flex flex-col gap-[12px]'>
                        <Link href='mailto:me@sspzoa.io' className='flex flex-row items-center gap-[8px]'>
                            <FontAwesomeIcon icon={faEnvelope} className='w-[14px] h-[14px] text-grayscale-800'/>
                            <p className='text-itemDescription text-grayscale-800'>me@sspzoa.io</p>
                        </Link>
                        <Link href='https://github.com/sspzoa' target='_blank' rel="noreferrer"
                              className='flex flex-row items-center gap-[8px]'>
                            <FontAwesomeIcon icon={faGithub} className='w-[14px] h-[14px] text-grayscale-800'/>
                            <p className='text-itemDescription text-grayscale-800'>sspzoa</p>
                        </Link>
                        <Link href='https://www.linkedin.com/in/seungpyosuh/' target='_blank' rel="noreferrer"
                              className='flex flex-row items-center gap-[8px]'>
                            <FontAwesomeIcon icon={faLinkedin} className='w-[14px] h-[14px] text-grayscale-800'/>
                            <p className='text-itemDescription text-grayscale-800'>seungpyosuh</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
