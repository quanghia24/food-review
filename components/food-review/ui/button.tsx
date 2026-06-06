"use client";

export default function Button({
  text,
  action,
}: {
  text: string;
  action: () => void;
}) {
  return (
    <button
      className="border rounded-lg px-8 py-4 sm:px-4 sm:py-0 font-bold text-[#941512] bg-[#FFCCAA]"
      onClick={action}
    >
      {text}
    </button>
  );
}
