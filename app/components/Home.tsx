import Image from 'next/image';
import MyPic from '@/public/my-pic.jpg';
import { MdOutlineMail } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';
import { RiBriefcase3Line } from 'react-icons/ri';
import { FiDownload } from 'react-icons/fi';
import Button from './Button';
import * as motion from 'motion/react-client';
function Home() {
  const info = [
    {
      id: 1,
      icon: <MdOutlineMail size={14} className='text-brand1' />,
      title: 'minamamdouh345@gmail.com',
    },
    {
      id: 2,
      icon: <IoLocationOutline size={14} className='text-brand1' />,
      title: 'Egypt',
    },
    {
      id: 3,
      icon: <RiBriefcase3Line size={14} className='text-brand1' />,
      title: 'Full-Time / Remotely',
    },
  ];
  const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next'];

  return (
    <section
      id='home'
      className='mb-main overflow-visible'
      itemScope
      itemType='https://schema.org/Person'
    >
      <h1 className='bgtext-u text-center text-brand2 mb-17'>
        {'Mina Mamdouh'.split('').map((e, i) => (
          <motion.span
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 100 }}
            transition={{ delay: 0.1 * i }}
            viewport={{ once: true, amount: 'some' }}
            key={i}
          >
            {e}
          </motion.span>
        ))}
      </h1>

      <div className='flex flex-col gap-10 mx-10 md:flex-row lg:w-4/5 lg:mx-auto'>
        <motion.div
          className='flex flex-col items-center gap-4 border-2 rounded-tl-[150px] rounded-br-[150px] py-6 px-15 shadow-[-2px_-2px_4px_0px_#12F7D6]'
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
          viewport={{ once: true, amount: 'some' }}
        >
          <Image
            src={MyPic}
            alt='Mina Mamdouh - Profile Picture'
            width={150}
            height={150}
            className='rounded-full border-4 border-brand1'
          />
          <h2 className='logo-m'>Mina Mamdouh</h2>
          <h3 className='code-m'>Front-End Developer</h3>
          <div className='flex flex-col gap-4'>
            {info.map((item) => (
              <span key={item.id} className='flex gap-2 items-center'>
                {item.icon}
                <p className='code-m'>{item.title}</p>
              </span>
            ))}
          </div>
          <div className='flex flex-wrap gap-4 max-w-[250px] justify-center'>
            {skills.map((item) => (
              <span
                key={item}
                className='code-m text-bg1 bg-brand1 py-1 px-2 rounded-full'
              >
                {item}
              </span>
            ))}
          </div>
          <Button
            title='Download CV'
            type='white'
            icon={FiDownload}
            myhref='Mina Mamdouh CV.pdf'
          />
        </motion.div>
        <motion.div
          className='flex flex-col gap-7 justify-center'
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
          viewport={{ once: true, amount: 'some' }}
        >
          <span className='code-m text-brand2'>{`<h1>`}</span>
          <h2 className='h1-u pl-5'>
            Hey I&apos;m <span className='text-brand1'>Mina Mamdouh</span>,
            Front-End Developer
            <span className='code-m text-brand2'>{`</h1>`}</span>
          </h2>
          <span className='code-m text-brand2'>{`<p>`}</span>
          <p className='para-m'>
            I help business grow by crafting amazing web experiences. If
            you&apos;re looking for a developer that likes to get stuff done,
          </p>
          <span className='code-m text-brand2'>{`</p>`}</span>
          <a
            href='mailto:minamamdouh345@gmail.com'
            aria-label='Send me an email'
            className='flex flex-row gap-5 h2-m text-brand1 items-center'
          >
            {`Let's Talk`}
            <MdOutlineMail
              size={32}
              className='text-brand1 bg-grey rounded-full p-1'
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
