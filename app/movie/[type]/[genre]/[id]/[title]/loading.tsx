import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border-4 border-zinc-700 border-t-white animate-spin">
<Image 
  src="/logoLoader.png"
  alt="Загрузка"
  width={150}
  height={150}
/>      </div>
    </div>
  );
}