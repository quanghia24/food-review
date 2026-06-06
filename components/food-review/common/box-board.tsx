import styles from '@/components/food-review/style.module.css'

export default function BoxBoard({
  title,
  children,
}: Readonly<{
  title: string,
  children: React.ReactNode;
}>) {
  return (
    <div className="border text-[#941512] w-full">
      {/* header */}
      <div className={`${styles.tab} font-bold `}>{title}</div>

      {/* body */}
      <div className='p-1'>
        {children}
      </div>
    </div>
  )
}