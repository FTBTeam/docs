import {useEffect, useState} from "react";
import {Slideshow} from "@site/src/components/SlideShow/Slideshow";

type Props = {
  slug: string;
}

export function BedrockSlideshow({slug}: Props) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  function loadMedia(data: any) {
    if (!data || !data.images) {
      return;
    }

    const thumbnail = data.images.find((a: any) => a.type === "Thumbnail").location;
    const screenshots = data.images.filter((a: any) => a.type.toLowerCase() === "screenshot");

    let videoEmbedUrl;
    if (data.video?.location) {
      const parsedUrl = new URL(data.video.location);
      const videoId = parsedUrl.searchParams.get("v");
      videoEmbedUrl = `https://www.youtube.com/embed/${videoId}`;
    }

    setData([
        {type: "image", url: thumbnail},
        ...(videoEmbedUrl ? [{type: "youtube", url: videoEmbedUrl}] : []),
        ...screenshots.map((image: any) => ({type: "image", url: image.location}))
    ])
  }

  useEffect(() => {
    // Get the data for the slideshow
    fetch(`https://meta.feed-the-beast.com/v1/marketplace/${slug}`)
      .then(res => res.json())
      .then(data => loadMedia(data))
      .finally(() => setLoading(false))
  }, [slug])

  return <div>
    {loading && <div>Loading...</div>}
    {!loading && data && <Slideshow media={data} />}
  </div>
}
