import React from "react";
import StoryPage3 from "../sections/story/StoryPage3";
import WordGameWithCategories from "../sections/alphabet/WordGameWithCategories";

export default function Home() {
  return (<>
  <div >
    <StoryPage3 groupKey="alefba" wantedTitle="گُلدانِ نازنین" />
    <WordGameWithCategories initialCategory="وسایل مدرسه" />
  </div>

  </>)
}
