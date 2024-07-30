import { useProjects } from '@/hooks/useProjects';
import type { Project } from '@/types/Project';
import Link from 'next/link';

export default function Projects() {
  const data = useProjects();

  return (
    <div className="flex flex-col gap-[20px] w-full">
      <h1 className="text-itemTitle text-grayscale-600">Projects</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px]">
        {data.results.map((project: Project) => {
          const icon = project?.icon?.file?.url;
          const cover = project?.cover?.file?.url;
          const name = project?.properties?.name?.title[0]?.plain_text;
          const description = project?.properties?.description?.rich_text[0]?.plain_text;
          const public_url = project?.public_url;

          return (
            <Link
              key={project.id}
              href={public_url || '#'}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-grayscale-100 border-grayscale-200 border-[1px] rounded-[16px] ease-in-out duration-500 hover:-translate-y-[8px]">
              <img
                src={cover || ''}
                alt={`${name || 'Project'} cover`}
                className="w-full aspect-video rounded-t-[16px] object-cover"
              />
              <div className="flex flex-row p-[15px] w-full gap-[12px] items-center">
                <img
                  src={icon || ''}
                  alt={`${name || 'Project'} icon`}
                  className="w-[44px] h-[44px] rounded-[8px] object-contain"
                />
                <div className="flex flex-col gap-[2px]">
                  <h1 className="text-itemTitle text-grayscale-800">{name || 'Untitled Project'}</h1>
                  <p className="text-itemDescription text-grayscale-800">{description || 'No description available'}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
