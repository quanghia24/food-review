import BoxBoard from "@/components/common/box-board";
import RandomMeal from "@/components/common/random-meal";
import SiteHeader from "@/components/common/site-header";

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
