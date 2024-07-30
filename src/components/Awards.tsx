import { useAwards } from '@/hooks/useAwards';
import type { Award } from '@/types/Award';
import Link from 'next/link';

export default function Awards() {
  const data = useAwards();

  return (
    <div className="flex flex-col gap-[20px] w-full">
      <h1 className="text-itemTitle text-grayscale-600">Awards</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px]">
        {data.results.map((award: Award) => {
          const name = award?.properties?.name?.title[0]?.plain_text;
          const description = award?.properties?.description?.rich_text[0]?.plain_text;
          const date = award?.properties?.date?.date?.start;
          const formattedDate = date ? new Date(date).toISOString().slice(0, 7).replace(/-/g, '.') : null;
          const public_url = award?.public_url;

          return (
            <Link
              key={award.id}
              href={public_url || '#'}
              target="_blank"
              rel="noreferrer"
              className="flex flex-row p-[20px] w-full bg-grayscale-100 border-grayscale-200 border-[1px] rounded-[16px] gap-[16px] items-center ease-in-out duration-500 hover:-translate-y-[8px]">
              <h2 className="text-description text-grayscale-500 w-[50px]">{formattedDate || 'null'}</h2>
              <div className="flex flex-col gap-[2px]">
                <h1 className="text-itemTitle text-grayscale-800">{name || 'null'}</h1>
                <p className="text-itemDescription text-grayscale-800">{description || 'null'}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
