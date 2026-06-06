import BoxBoard from "@/components/food-review/common/box-board";
import RandomMeal from "@/components/food-review/common/random-meal";

export default function Home() {
  return (
    // <SiteHeader width={100} img_url="/no-meat.svg" title="NoMeat" />
    <>
      <BoxBoard title="What to eat today?">
        <RandomMeal />
      </BoxBoard>
    </>
    // <WhatToEatToday></WhatToEatToday>
    // <Intro></Intro>
    // <Boards></Boards>
    // <Popular></Popular>
    // <Stats></Stats>
    // <Footer></Footer>
  );
}
