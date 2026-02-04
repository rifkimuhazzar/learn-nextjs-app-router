import Image from "next/image";
import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "$/dummy-news";
import Backdrop from "$components/backdrop";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function InterceptedImagePage({ params }: Props) {
  const { slug } = await params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);
  if (!newsItem) notFound();

  return (
    <>
      <Backdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width={750}
            height={750}
            loading="eager"
          />
        </div>
      </dialog>
    </>
  );
}
