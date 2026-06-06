import Image from "next/image";

export default function FoodResult({
  name,
  description,
  price,
  imageUrl,
}: {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}) {
  return (
    <div>
      {imageUrl ? (
        <div className="border border-dashed w-fit p-2 rounded-2xl shrink-0 mx-auto sm:mx-0">
          <Image
            width={240}
            height={240}
            className="h-60 w-60 object-cover shrink-0 rounded-xl"
            src={imageUrl}
            alt={name}
          />
        </div>
      ) : null}

      <div className="flex flex-col justify-between py-2 flex-1 text-center sm:text-left text-lg sm:text-sm">
        <div>
          <h2 className="font-bold">{name}</h2>
          <p className="">{description}</p>
        </div>

        {price > 0 ? (
          <p className="font-bold">{price.toLocaleString()} VND</p>
        ) : null}
      </div>
    </div>
  );
}
