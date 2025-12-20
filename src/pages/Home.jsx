import React from "react";
import StoryPage3 from "../sections/story/StoryPage3";
import WordGameWithCategories from "../sections/alphabet/WordGameWithCategories";
import SpellingGame from "../sections/alphabet/SpellingGame";
import SentenceObject from "../sections/word/SentenceObject";
import ObjectSentenceGame from "../sections/alphabet/ObjectSentenceGame";
import VideoCard from "../sections/alphabet/VideoCard";
import DragDropQuiz from "../sections/word/DragDropQuiz";
import DragWriteBoxWithGuides from "../sections/alphabet/DragWriteBoxWithGuides ";
import SentenceBuilder from "../sections/word/SentenceBuilder";

export default function Home() {
  return (<>
  <div >
    <div className="h5 m-5 border border-3 border-warning p-4 text-center bg-info rounded">بچه ها با توجه به متن انگلیسی ، کلمات بهم ریخته را مرتب کنند و از روی 6 جمله صحیح بنویسند.  </div>
      {/* <VideoCard
        title="قصه کوتاه امروز"
        description="متن فارسی داستان زیر را بخوانید."
        videoFileName={`${process.env.PUBLIC_URL}/video/anty-1.mp4`}  // فقط اسم فایل ویدیوی mp4
      /> */}
      <SentenceBuilder/>

    {/* <SentenceObject/> */}
    {/* <ObjectSentenceGame/> */}
    {/* <DragDropQuiz/> */}
    {/* <StoryPage3 groupKey="alefba" wantedTitle="بازی در بَرف" /> */}
    <DragWriteBoxWithGuides />

    {/* <SpellingGame/> */}
    {/* <WordGameWithCategories initialCategory="وسایل مدرسه" /> */}
  </div>

  </>)
}
