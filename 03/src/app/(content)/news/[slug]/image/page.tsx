import Image from "next/image";
import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "$/dummy-news";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function InterceptedImagePage({ params }: Props) {
  const { slug } = await params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);
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
