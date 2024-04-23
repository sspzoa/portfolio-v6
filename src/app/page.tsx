import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className='flex flex-row'>
                <div className='fixed left-0'>
                    <Info/>
                </div>
                <Info/>
                <div className='flex flex-col w-full'>
                    <Projects/>
                    <Awards/>
                </div>
            </div>
        </>
    );
}

function Info() {
    return (
        <>
            <div className='flex-shrink-0 h-[100vh] p-[50px] flex flex-col gap-[40px] bg-grayscale-100'>
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
                        <p className='text-itemDescription text-grayscale-800'>한국디지털미디어고등학교 해킹방어과
                            22기</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <h1 className='text-itemTitle text-grayscale-600'>Contact</h1>
                    <div className='flex flex-col gap-[12px]'>
                        <Link href='mailto:me@sspzoa.io' className='flex flex-row items-center gap-[8px]'>
                            <Image src={'/icons/envelope-solid.svg'} alt='me@sspzoa.io' width={14} height={14}/>
                            <p className='text-itemDescription text-grayscale-800'>me@sspzoa.io</p>
                        </Link>
                        <Link href='https://github.com/sspzoa' target='_blank' rel="noreferrer"
                              className='flex flex-row items-center gap-[8px]'>
                            <Image src={'/icons/github.svg'} alt='github' width={14} height={14}/>
                            <p className='text-itemDescription text-grayscale-800'>sspzoa</p>
                        </Link>
                        <Link href='https://www.linkedin.com/in/seungpyosuh/' target='_blank' rel="noreferrer"
                              className='flex flex-row items-center gap-[8px]'>
                            <Image src={'/icons/linkedin.svg'} alt='linkedin' width={14} height={14}/>
                            <p className='text-itemDescription text-grayscale-800'>seungpyosuh</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

function Projects() {
    return (
        <>
            <div className='flex flex-col px-[50px] pt-[50px] gap-[10px] w-full'>
                <h1 className='text-itemTitle text-grayscale-600'>Projects</h1>
                <div className='grid grid-cols-2 gap-[16px]'>
                    <div className='w-full bg-grayscale-100 border-grayscale-300 border-[1px] rounded-[16px]'>
                        <img
                            src='https://assets.isamin.kr/cover/dimigoin.webp'
                            alt='din' className='w-full rounded-[16px] object-cover'/>
                        <div className='flex flex-row p-[15px] w-full gap-[12px] items-center'>
                            <img src='https://assets.isamin.kr/project/dimigoin.webp' alt='dimigoin'
                                 className='w-[44px] h-[44px] rounded-[16px]'/>
                            <div className='flex flex-col gap-[2px]'>
                                <h1 className='text-itemTitle text-grayscale-800'>디미고인</h1>
                                <p className='text-itemDescription text-grayscale-800'>한국디지털미디어고등학교 인트라넷</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full bg-grayscale-100 border-grayscale-300 border-[1px] rounded-[16px]'>
                        <img
                            src='https://portfolio.dohui.me/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe0ab7fff-490f-4ba0-a06e-5ebe3e39feb7%2F%25E1%2584%2583%25E1%2585%25B5%25E1%2584%2586%25E1%2585%25B5%25E1%2584%2591%25E1%2585%25A6%25E1%2584%258B%25E1%2585%25B5%25E1%2584%258E%25E1%2585%25AC%25E1%2584%258C%25E1%2585%25A9%25E1%2586%25BC%25E1%2584%2591%25E1%2585%25B5%25E1%2584%2591%25E1%2585%25B5%25E1%2584%2590%25E1%2585%25B5_%25E1%2584%2591%25E1%2585%25A6%25E1%2584%258B%25E1%2585%25B5%25E1%2584%258C%25E1%2585%25B5_01.png?table=block&id=f57dc633-c8c8-4c7a-ac95-859ac362ba8a&spaceId=11127302-21c0-41d0-acb1-6fb7564c2e5b&width=2000&userId=&cache=v2'
                            alt='din' className='w-full rounded-t-[16px] object-cover'/>
                        <div className='flex flex-row p-[15px] w-full gap-[12px] items-center'>
                            <img
                                src='https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc4c3e695-523c-46e1-9ee7-679a18e2820f%2F495130df-988a-4df1-bdc9-b96be0484ab5%2Fdimipay.png?table=block&id=d9d1fbb1-87b6-4514-919f-a9c5eba6155a&spaceId=c4c3e695-523c-46e1-9ee7-679a18e2820f&width=60&userId=bbb60a96-4d1c-484d-9b05-4ca10d436982&cache=v2'
                                alt='dimigoin'
                                className='w-[44px] h-[44px] rounded-[8px]'/>
                            <div className='flex flex-col gap-[2px]'>
                                <h1 className='text-itemTitle text-grayscale-800'>디미페이</h1>
                                <p className='text-itemDescription text-grayscale-800'>한국디지털미디어고 결제 핀테크 서비스, 디미페이</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className='text-token text-grayscale-100 rounded-full px-[10px] py-[3px] bg-grayscale-500 m-auto'>
                    더보기
                </div>
            </div>
        </>
    );
}

function Awards() {
    return (
        <>
            <div className='flex flex-col p-[50px] gap-[10px] w-full'>
                <h1 className='text-itemTitle text-grayscale-600'>Awards</h1>
                <div className='grid grid-cols-3 gap-[16px]'>
                    <div
                        className='flex flex-row p-[20px] w-full bg-grayscale-100 border-grayscale-300 border-[1px] rounded-[16px] gap-[12px] items-center'>
                        <Image src={'/icons/gold-medal.png'} alt='dimigoin' width={44} height={44}
                               className='rounded-full'/>
                        <div className='flex flex-col gap-[2px]'>
                            <h1 className='text-itemTitle text-grayscale-800'>제5회 한국코드페어해커톤 금상</h1>
                            <p className='text-itemDescription text-grayscale-800'>과학기술정보통신부장관상</p>
                        </div>
                    </div>
                    <div
                        className='flex flex-row p-[20px] w-full bg-grayscale-100 border-grayscale-300 border-[1px] rounded-[16px] gap-[12px] items-center'>
                        <Image src={'/icons/bronze-medal.png'} alt='dimigoin' width={44} height={44}
                               className='rounded-full'/>
                        <div className='flex flex-col gap-[2px]'>
                            <h1 className='text-itemTitle text-grayscale-800'>2023 STA+C 가작</h1>
                            <p className='text-itemDescription text-grayscale-800'>SK플래닛대표상</p>
                        </div>
                    </div>
                </div>
                <div
                    className='text-token text-grayscale-100 rounded-full px-[10px] py-[3px] bg-grayscale-500 m-auto'>
                    더보기
                </div>
            </div>
        </>
    );
}