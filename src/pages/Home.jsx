import React from "react";
import StoryPage3 from "../sections/story/StoryPage3";
import WordGameWithCategories from "../sections/alphabet/WordGameWithCategories";
import SpellingGame from "../sections/alphabet/SpellingGame";

export default function Home() {
  return (<>
  <div >
    <h5 className="p-4 bg-warning m-4 rounded text-center">بچه ها از روی کلمات وسایل مدرسه با معنی انگلیسی آن یک بار بنویسندو همین طور فعالیت آن را انجام دهند. </h5>
    <SpellingGame/>
    <StoryPage3 groupKey="alefba" wantedTitle="رِسـتوران" />
    {/* <WordGameWithCategories initialCategory="وسایل مدرسه" /> */}
  </div>

  </>)
}
