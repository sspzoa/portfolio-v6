import Image from "next/image";
import { use } from 'react';
import Link from "next/link";

interface Award {
    id: string;
    public_url: string;
    properties: {
        name?: { title: { plain_text: string; }[]; };
        description?: { rich_text: { plain_text: string; }[]; };
        medal?: { select?: { name?: string } };
    };
}

async function fetchAwards() {

    const res = await fetch(`https://api.notion.com/v1/databases/${process.env.AWARDS_DATABASE_ID}/query`, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            Accept: 'application/json',
            'Notion-Version': '2022-02-22',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NOTION_API_KEY}`
        },
        body: JSON.stringify({
            sorts: [
                {
                    property: 'date',
                    direction: 'descending'
                },
            ],
        })
    })

    return await res.json()
}

export default function Awards() {
    const data = use(fetchAwards());

    return (
        <>
            <div className='flex flex-col gap-[10px] w-full'>
                <h1 className='text-itemTitle text-grayscale-600'>Awards</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-[16px]'>
                    {data.results.map((award: Award) => {
                        const medal = award?.properties?.medal?.select?.name;
                        const name = award?.properties?.name?.title[0]?.plain_text;
                        const description = award?.properties?.description?.rich_text[0]?.plain_text;
                        const public_url = award?.public_url;

                        return (
                            <Link key={award.id} href={public_url || '#'} target='_blank' rel="noreferrer"
                                  className='flex flex-row p-[20px] w-full bg-grayscale-100 border-grayscale-200 border-[1px] rounded-[16px] gap-[12px] items-center'>
                                <Image src={`/icons/${medal}-medal.png` || ''} alt='medal' width={44} height={44}
                                       className='rounded-full'/>
                                <div className='flex flex-col gap-[2px]'>
                                    <h1 className='text-itemTitle text-grayscale-800'>{name || 'null'}</h1>
                                    <p className='text-itemDescription text-grayscale-800'>{description || 'null'}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
}