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
    <div className="h5 m-5 border border-3 border-warning p-4 text-center bg-info rounded">بچه ها از روی داستان بخوانند و تا بالای عکس بنویسند. اسامی وسایل خانه را هم یاد بگیرند.  </div>
    {/* <SentenceObject/> */}
    {/* <ObjectSentenceGame/> */}
    {/* <VideoCard
      title="قصه کوتاه امروز"
      description="متن فارسی داستان زیر را بخوانید."
      videoFileName={`${process.env.PUBLIC_URL}/video/chick.mp4`}  // فقط اسم فایل ویدیوی mp4
    /> */}

    <StoryPage3 groupKey="alefba" wantedTitle="تابِستانِ گَرمِ مَن" />
    <SpellingGame/>
    {/* <WordGameWithCategories initialCategory="وسایل مدرسه" /> */}
  </div>

  </>)
}
