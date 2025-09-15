import moduleIcon from '@/public/moduleIcon.svg';
import { RiCodeSSlashLine } from "react-icons/ri";
import Image from 'next/image';

function Module({ title, desc,code=false }: { title?: string; desc?: string; code?:boolean }) {
  return (
    <div className='relative flex flex-col items-center justify-center gap-4'>
      {code && <RiCodeSSlashLine size={250} className='text-brand1 absolute top-0 right-0 translate-x-full max-lg:hidden'/>}
      <Image src={moduleIcon} alt='Module icon' className='mb-10' priority />
      {title && (
        <h1 className='h1-u text-brand1 border-b-4 border-brand1 pb-8 after:content-[""] after:h-4 after:w-4 after:bg-brand1 after:absolute after:bottom-0 after:left-0 after:-translate-x-1/2 after:translate-y-[calc(50%+2px)] after:rounded-full before:content-[""] before:h-4 before:w-4 before:bg-brand1 before:absolute before:bottom-0 before:right-0 before:translate-x-1/2 before:translate-y-[calc(50%+2px)] before:rounded-full relative'>
          {title}
        </h1>
      )}
      {desc && <p className='para-m text-white text-center'>{desc}</p>}
    </div>
  );
}

export default Module;