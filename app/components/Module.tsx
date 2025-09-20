import moduleIcon from '@/public/moduleIcon.svg';
import { RiCodeSSlashLine } from 'react-icons/ri';
import Image from 'next/image';
import * as motion from 'motion/react-client';

function Module({
  title,
  desc,
  code = false,
}: {
  title?: string;
  desc?: string;
  code?: boolean;
}) {
  return (
    <motion.div
      className='relative flex flex-col items-center justify-center gap-4'
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      viewport={{ once: true, amount: 1 }}
    >
      {code && (
        <RiCodeSSlashLine
          size={250}
          className='text-brand1 absolute top-0 right-0 translate-x-full max-lg:hidden'
        />
      )}
      <Image src={moduleIcon} alt='Module icon' className='mb-10' priority />
      {title && (
        <h2 className='h1-u text-brand1 border-b-4 border-brand1 pb-8 after:content-[""] after:h-4 after:w-4 after:bg-brand1 after:absolute after:bottom-0 after:left-0 after:-translate-x-1/2 after:translate-y-[calc(50%+2px)] after:rounded-full before:content-[""] before:h-4 before:w-4 before:bg-brand1 before:absolute before:bottom-0 before:right-0 before:translate-x-1/2 before:translate-y-[calc(50%+2px)] before:rounded-full relative'>
          {title}
        </h2>
      )}
      {desc && <p className='para-m text-white text-center'>{desc}</p>}
    </motion.div>
  );
}

export default Module;
