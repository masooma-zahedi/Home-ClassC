import React from "react";
import StoryPage3 from "../sections/story/StoryPage3";
import WordGameWithCategories from "../sections/alphabet/WordGameWithCategories";
import SpellingGame from "../sections/alphabet/SpellingGame";
import SentenceObject from "../sections/word/SentenceObject";

export default function Home() {
  return (<>
  <div >
    <h5 className="p-4 bg-warning m-4 rounded text-center"> بچه ها از روی جملات بخوانند و از روی 5 جمله به دلخواه بنویسند</h5>
    <SentenceObject/>
    {/* <SpellingGame/> */}
    {/* <StoryPage3 groupKey="alefba" wantedTitle="رِسـتوران" /> */}
    {/* <WordGameWithCategories initialCategory="وسایل مدرسه" /> */}
  </div>

  </>)
}
