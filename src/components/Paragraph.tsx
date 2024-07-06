import Image from "next/image";
import Link from "next/link";

export default function Paragraph() {
    return (
        <>
            <div className='py-[250px] flex flex-col justify-center items-center'>
                <div
                    className='flex sm:flex-row flex-col max-w-[1200px] justify-center items-center'>
                    <Image className='rounded-[16px] sm:scale-100 scale-90' src={'/images/pic.jpeg'} alt={'pic'} width={400}
                           height={400}/>
                    <div className='flex flex-col gap-[15px] p-[32px]'>
                        <h1 className='text-title'>안녕하세요.</h1>
                        <h1 className='text-title'>한국디지털미디어고등학교 해킹방어과 2학년 서승표입니다.</h1>
                        <br/>
                        <h1 className='text-header2'>앱 및 프론트엔드 개발에 깊은 관심을 가지고 있으며,</h1>
                        <h1 className='text-header2'>주로 Flutter를 이용한 앱 개발과 Next.js 기반 웹 개발을 하고 있습니다.</h1>
                        <h1 className='text-header2'>현재 교내 무인매점 결제 솔루션을 개발하는 &apos;디미페이&apos; 팀에서 활동 중입니다.</h1>
                        <br/>
                        <h1 className='text-header2'>보다 자세한 정보는 아래 <Link className='text-blue-500'
                                                                         href={'#portfolio'}>포트폴리오</Link>와 <Link
                            className='text-blue-500'
                            href={'https://github.com/sspzoa'} target='_blank' rel="noreferrer">깃헙</Link>을 참고해 주세요!</h1>
                        <Link className='text-paragraph1 text-blue-500' href={'/서승표 명함.pdf'} target='_blank'
                              rel="noreferrer"><h1>명함 보기</h1></Link>
                    </div>
                </div>
            </div>
        </>
    );
}
