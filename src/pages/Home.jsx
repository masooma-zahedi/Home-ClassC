import React from "react";
import StoryPage3 from "../sections/story/StoryPage3";
import WordGameWithCategories from "../sections/alphabet/WordGameWithCategories";
import SpellingGame from "../sections/alphabet/SpellingGame";
import SentenceObject from "../sections/word/SentenceObject";
import ObjectSentenceGame from "../sections/alphabet/ObjectSentenceGame";
import VideoCard from "../sections/alphabet/VideoCard";

export default function Home() {
  return (<>
  <div >
    <div className="h5 m-5 border border-3 border-warning p-4 text-center bg-info rounded">بچه ها فیلم زیر را ببینند و جملات فارسی آن را بخوانند. و از روی 6 جمله آن بنویسند یا از روی کلمات حشرات با معنی بنویسند.  </div>
    {/* <SentenceObject/> */}
    {/* <ObjectSentenceGame/> */}
    <VideoCard
      title="قصه کوتاه امروز"
      description="متن فارسی داستان زیر را بخوانید."
      videoFileName={`${process.env.PUBLIC_URL}/video/chick.mp4`}  // فقط اسم فایل ویدیوی mp4
    />

    <SpellingGame/>
    {/* <StoryPage3 groupKey="alefba" wantedTitle="رِسـتوران" /> */}
    {/* <WordGameWithCategories initialCategory="وسایل مدرسه" /> */}
  </div>

  </>)
}
