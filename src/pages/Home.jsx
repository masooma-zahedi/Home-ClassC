import React from "react";
import StoryPage3 from "../sections/story/StoryPage3";
import WordGameWithCategories from "../sections/alphabet/WordGameWithCategories";
import SpellingGame from "../sections/alphabet/SpellingGame";
import SentenceObject from "../sections/word/SentenceObject";
import ObjectSentenceGame from "../sections/alphabet/ObjectSentenceGame";

export default function Home() {
  return (<>
  <div >
    <div className="h5 m-5 border border-3 border-warning p-4 text-center bg-info rounded">بچه ها جملات زیر را تمرین کنند و از روی 7 جمله جواب درست آن بنویسند.  </div>
    {/* <SentenceObject/> */}
    <ObjectSentenceGame/>
    {/* <SpellingGame/> */}
    {/* <StoryPage3 groupKey="alefba" wantedTitle="رِسـتوران" /> */}
    {/* <WordGameWithCategories initialCategory="وسایل مدرسه" /> */}
  </div>

  </>)
}
