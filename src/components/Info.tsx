import Image from "next/image";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export default function Info() {
    return (
        <>
            <div
                className='flex-shrink-0 h-auto w-[400px] sm:h-[100vh] p-[30px] pb-0 sm:p-[50px] flex flex-col justify-between gap-[40px] bg-grayscale-2s00 sm:bg-grayscale-100'>
                <div className='flex flex-col gap-[40px]'>
                    <div className='flex flex-col gap-[8px]'>
                        <Image className='rounded-full' src={'/images/sspzoa_logo.svg'} alt='sspzoa' width={120}
                               height={120}/>
                        <h1 className='text-[32px] font-[600] text-grayscale-1000'>
                            Seungpyo Suh
                        </h1>
                        <p className='text-paragraph1 text-grayscale-800'>
                            Mobile/Frontend Developer
                        </p>
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                        <h1 className='text-itemTitle text-grayscale-600'>Skills</h1>
                        <div className='flex flex-row gap-[24px]'>
                            <Image src={'/images/skills/flutter.svg'} alt='flutter' width={32} height={32}/>
                            <Image src={'/images/skills/android.svg'} alt='android' width={32} height={32}/>
                            <Image src={'/images/skills/next.svg'} alt='next' width={32} height={32}/>
                            <Image src={'/images/skills/nest.svg'} alt='nest' width={32} height={32}/>
                            <Image src={'/images/skills/supabase.svg'} alt='supabase' width={32} height={32}/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                        <h1 className='text-itemTitle text-grayscale-600'>About</h1>
                        <div className='flex flex-col gap-[16px]'>
                            <div className='flex flex-row w-full gap-[12px] items-center'>
                                <h2 className='text-description text-grayscale-500 w-[70px]'>2024.03~</h2>
                                <div className='flex flex-col gap-[2px]'>
                                    <h1 className='text-itemTitle text-grayscale-800'>Project Manager</h1>
                                    <p className='text-itemDescription text-grayscale-800'>DIN(딘)
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-row w-full gap-[12px] items-center'>
                                <h2 className='text-description text-grayscale-500 w-[70px]'>2023.10~</h2>
                                <div className='flex flex-col gap-[2px]'>
                                    <h1 className='text-itemTitle text-grayscale-800'>App Developer</h1>
                                    <p className='text-itemDescription text-grayscale-800'>Dimipay(디미페이)
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-row w-full gap-[12px] items-center'>
                                <h2 className='text-description text-grayscale-500 w-[70px]'>2023.03~</h2>
                                <div className='flex flex-col gap-[2px]'>
                                    <h1 className='text-itemTitle text-grayscale-800'>22HD</h1>
                                    <p className='text-itemDescription text-grayscale-800'>Korea Digital Media High
                                        School
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-[10px]'>
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
