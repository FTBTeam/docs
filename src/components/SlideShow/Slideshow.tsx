import s from './Slideshow.module.scss';
import {useEffect, useRef, useState} from "react";
import clsx from "clsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

type Media = {
  type: 'youtube' | 'image',
  url: string,
  title?: string,
  text?: string,
}

type Props = {
  media: Media[];
}

export function Slideshow({media}: Props) {
  const [activeIndex, setActiveIndex] = useState(0)

  // When the active index changes, try and scroll the active thumbnail into view
  const thumbnailHolder = useRef<HTMLDivElement | null>(null);

  function moveToIndex(index: number) {
    if (thumbnailHolder.current) {
      const activeThumbnail = thumbnailHolder.current.children[index];
      if (activeThumbnail) {
        // Check if the user has the thumbnail in view before scrolling
        const rect = activeThumbnail.getBoundingClientRect();
        const scrollY = window.scrollY;

        // Has the user scrolled anywhere near the thumbnail?
        if (scrollY > rect.top - 300) {
          activeThumbnail.scrollIntoView({behavior: "smooth", block: "nearest", inline: "center"});
        }
      }

      setActiveIndex(index);
    }
  }

  return <div className={s.slideshow}>
    <div className={clsx(s.main, "relative")}>
      <div className={s.masker}>
        {media.map((item, index) => <div key={index}
                                         className={clsx(s.item, {[s.active]: activeIndex === index}, "rounded overflow-hidden")}>
          {item.type === 'youtube' && <iframe key={index} width="100%" height="100%" src={item.url} frameBorder="0"
                                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                              allowFullScreen/>}
          {item.type === "image" && <img key={index} src={item.url} alt=""/>}
        </div>)}
      </div>

      <div onClick={() => moveToIndex((activeIndex - 1 + media.length) % media.length)} className={s.control}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>

      <div onClick={() => moveToIndex((activeIndex + 1) % media.length)} className={clsx(s.control, s.right)}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>

    {media[activeIndex].title && <div className={s.text}>
        <div className={s.title}>{media[activeIndex].title}</div>
      {media[activeIndex].text && <p>{media[activeIndex].text}</p>}
    </div>}

    <div className={clsx(s.thumbnails, "rounded")}>
      <div className={clsx(s.thumbnailsHolder)} ref={thumbnailHolder}>
        {media.map((item, index) => <div key={index} onClick={() => moveToIndex(index)} className={clsx(s.thumbnail, {[s.active]: activeIndex === index}, "rounded overflow-hidden")}>
          {item.type === 'youtube' && <div className="relative" style={{width: 'inherit', height: 'inherit'}}>
            <div className="icon absolute inset-0 flex justify-center items-center opacity-75">
              <FontAwesomeIcon icon={faYoutube} size="5x" className="" />
            </div>
            <img src={`https://img.youtube.com/vi/${item.url.split("/").pop()}/0.jpg`} alt=""/>
          </div>}
          {item.type === 'image' && <img src={item.url} alt=""/>}
        </div>)}
      </div>
    </div>
  </div>
}
