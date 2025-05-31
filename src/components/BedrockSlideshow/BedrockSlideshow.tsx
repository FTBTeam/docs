import {useEffect, useState} from "react";
import {Slideshow} from "@site/src/components/SlideShow/Slideshow";

type Props = {
  slug: string;
}

export function BedrockSlideshow({slug}: Props) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  function loadMedia(data: any) {
    if (!data || !data.media) {
      return;
    }

    const thumbnail = data.media.find((a: any) => a.type === "logo").url;
    const screenshots = data.media.filter((a: any) => a.type.toLowerCase() === "image");
    const video = data.media.find((a: any) => a.type === "youtube");

    let videoEmbedUrl: string;
    if (video) {
      const parsedUrl = new URL(video.url);
      const videoId = parsedUrl.searchParams.get("v");
      videoEmbedUrl = `https://www.youtube.com/embed/${videoId}`;
    }

    setData([
        {type: "image", url: thumbnail},
        ...(videoEmbedUrl ? [{type: "youtube", url: videoEmbedUrl}] : []),
        ...screenshots.map((image: any) => ({type: "image", url: image.url}))
    ])
  }

  useEffect(() => {
    // Get the data for the slideshow
    fetch(`https://api.feed-the-beast.com/v1/dataforge/public/bedrock/product/${slug}`)
      .then(res => res.json())
      .then(data => loadMedia(data))
      .finally(() => setLoading(false))
  }, [slug])

  return <div>
    {loading && <div>Loading...</div>}
    {!loading && data && <Slideshow media={data} />}
  </div>
}
