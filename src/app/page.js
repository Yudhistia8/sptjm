import Image from "next/image";

export default function Home() {
  return (
      <div className='flex items-center justify-center'>
          <Image className='rounded-lg' src="/herta.gif" alt="Herta" width={600} height={600}/>
      </div>
  );
}
