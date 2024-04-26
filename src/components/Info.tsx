import Image from "next/image";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export default function Info() {
    return (
        <>
            <div className='flex-shrink-0 h-auto sm:h-[100vh] p-[30px] pb-0 sm:p-[50px] flex flex-col gap-[40px] bg-grayscale-2s00 sm:bg-grayscale-100'>
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
                        <Image src={'/images/skills/react.svg'} alt='react' width={32} height={32}/>
                        <Image src={'/images/skills/nest.svg'} alt='nest' width={32} height={32}/>
                    </div>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <h1 className='text-itemTitle text-grayscale-600'>About</h1>
                    <div className='flex flex-col gap-[8px]'>
                        <p className='text-itemDescription text-grayscale-800'>디미고 인트라넷 개발팀, DIN Project
                            Manager</p>
                        <p className='text-itemDescription text-grayscale-800'>교내 무인매점 결제 솔루션 개발팀, 디미페이 App
                            Developer</p>
                        <p className='text-itemDescription text-grayscale-800'>IT 소셜벤처 동아리, LUNA Developer</p>
                        <p className='text-itemDescription text-grayscale-800'>한국디지털미디어고등학교 해킹방어과
                            22기</p>
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