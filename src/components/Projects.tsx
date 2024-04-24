import Image from "next/image";
import {use} from "react";
import Link from "next/link";

interface Project {
    id: string;
    public_url: string;
    icon: { file: { url: string; }; };
    cover: { file: { url: string; }; };
    properties: {
        name?: { title: { plain_text: string; }[]; };
        description?: { rich_text: { plain_text: string; }[]; };
        github?: { url: string; };
    };

}

async function fetchProjects() {

    const res = await fetch(`https://api.notion.com/v1/databases/${process.env.PROJECTS_DATABASE_ID}/query`, {
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
                    property: 'workPeriod',
                    direction: 'descending'
                },
            ],
        })
    })

    return await res.json()
}

export default function Projects() {
    const data = use(fetchProjects());

    return (
        <>
            <div className='flex flex-col gap-[10px] w-full'>
                <h1 className='text-itemTitle text-grayscale-600'>Projects</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-[16px]'>
                    {data.results.map((project: Project) => {
                        const icon = project?.icon?.file?.url;
                        const cover = project?.cover?.file?.url;
                        const name = project?.properties?.name?.title[0]?.plain_text;
                        const description = project?.properties?.description?.rich_text[0]?.plain_text;
                        const github = project?.properties?.github?.url;

                        return (
                            <Link key={project.id} href={github || '#'} target='_blank' rel="noreferrer"
                                  className='w-full bg-grayscale-100 border-grayscale-300 border-[1px] rounded-[16px]'>
                                <img
                                    src={cover || ''}
                                    className='w-full h-[180px] rounded-t-[16px] object-cover'/>
                                <div className='flex flex-row p-[15px] w-full gap-[12px] items-center'>
                                    <img src={icon || ''}
                                         className='w-[44px] h-[44px] rounded-[8px] object-contain'/>
                                    <div className='flex flex-col gap-[2px]'>
                                        <h1 className='text-itemTitle text-grayscale-800'>{name || 'null'}</h1>
                                        <p className='text-itemDescription text-grayscale-800'>{description || 'null'}</p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
