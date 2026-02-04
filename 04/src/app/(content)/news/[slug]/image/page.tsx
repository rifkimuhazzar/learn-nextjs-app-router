import Image from "next/image";
import { notFound } from "next/navigation";

import { getNewsItem } from "$lib/news";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function InterceptedImagePage({ params }: Props) {
  const { slug } = await params;
  const newsItem = await getNewsItem(slug);
  if (!newsItem) notFound();

  return (
    <div className="fullscreen-image">
      <Image
        src={`/images/news/${newsItem.image}`}
        alt={newsItem.title}
        width={1000}
        height={1000}
      />
    </div>
  );
}
