'use client'
import { useState } from "react";
import Button from "../ui/button";
import FoodResult from "../ui/food-result";
import { foodData } from "@/db/static_data";

export default function RandomMeal() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)
  const [desc, setDesc] = useState("")
  const [imgUrl, setImgUrl] = useState("")

  const getSecureRandomIndex = (maxRange: number): number => {
    const cleanArray = new Uint32Array(1);
    window.crypto.getRandomValues(cleanArray);
    return cleanArray[0] % maxRange;
  };

  const handleClick = () => {
    const ranRum = getSecureRandomIndex(52)
    const food = foodData[ranRum]
    setName(food.name)
    setPrice(food.price)
    setDesc(food.description)
    setImgUrl(food.imageUrl)
  }

  return (
    <div>
      <FoodResult name={name} price={price} description={desc} imageUrl={imgUrl}/>
      <Button text="Chọn món" action={() => handleClick()}/>
    </div>
  )
}