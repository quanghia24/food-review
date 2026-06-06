import Image from "next/image";

export default function SiteHeader({
  img_url,
  title,
  width
}: {
  img_url: string;
  title: string;
  width: any;
}) {
  return (
    <div className="flex items-center gap-2">
      <Image src={img_url} alt="Cool logo" width={width} height={width}/>
      <p className="font-bold text-4xl">{title}</p>
    </div>
  )
}