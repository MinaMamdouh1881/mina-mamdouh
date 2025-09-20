import Image from 'next/image';
import Module from './Module';
import * as motion from 'motion/react-client';
import Script from 'next/script';
function AboutMe() {
  return (
    <section
      id='about-me'
      className='bg-[url(/about-me-bg.webp)] bg-center bg-cover py-[50px] flex flex-col items-center px-12 md:px-36'
    >
      <Module />
      <div className='flex flex-col items-center gap-10 min-[1200px]:flex-row'>
        <div className='flex flex-col items-center gap-10 md:items-start'>
          <motion.h2
            className='h1-u bg-bg1 w-fit py-4 px-10 border-3 border-brand1 rounded-br-[40px] rounded-tl-[40px]'
            initial={{ opacity: 0, y: -150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true, amount: 1 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className='flex flex-col gap-4 bg-bg1 p-5 rounded-3xl'
            initial={{ opacity: 0, y: -150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true, amount: 1 }}
          >
            <span
              className='code-m text-brand2'
              aria-hidden='true'
            >{`<p>`}</span>
            <article>
              <p className='h2-m text-brand1'>Hello!</p>
              <p className='para-m leading-8'>
                My name is Mina Mamdouh and I specialize in web development that
                utilizes <span className='text-brand1'>HTML</span>,{' '}
                <span className='text-brand1'>CSS</span>,{' '}
                <span className='text-brand1'>JavaScript</span>, and{' '}
                <span className='text-brand1'>REACT</span> etc.
              </p>
              <p className='para-m leading-8'>
                I like to have my perspective and belief systems challenged so
                that I see the world through new eyes.
              </p>
            </article>
            <span
              className='code-m text-brand2'
              aria-hidden='true'
            >{`</p>`}</span>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true, amount: 1 }}
          className='w-full md:w-[500px] h-[556px] relative'
        >
          <Image
            src='/about-me-image.webp'
            alt='Mina Mamdouh - Web Developer profile illustration'
            layout='fill'
            className='object-cover rounded-2xl'
            loading='lazy'
          />
        </motion.div>
      </div>

      {/* SEO */}
      <Script
        id='about-page-structured-data'
        type='application/ld+json'
        strategy='afterInteractive'
      >
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About Mina Mamdouh',
          description:
            "About Me - I'm Mina Mamdouh, a Front-End Developer specializing in React.js, Next.js, and TypeScript.",
          url: process.env.NEXT_PUBLIC_MY_DOMAIN,
          mainEntity: {
            '@type': 'Person',
            name: 'Mina Mamdouh',
            jobTitle: 'Front-End Developer',
            sameAs: [
              'https://www.linkedin.com/in/mina-mamdouh-793a60326/',
              'https://github.com/MinaMamdouh1881',
            ],
            knowsAbout: [
              'HTML',
              'CSS',
              'JavaScript',
              'TypeScript',
              'React',
              'Next.js',
            ],
            image: `${process.env.NEXT_PUBLIC_MY_DOMAIN}/my-pic.webp`,
            alumniOf: {
              '@type': 'CollegeOrUniversity',
              name: 'Faculty of Computers and Artificial Intelligence, Sohag University',
            },
            worksFor: {
              '@type': 'Organization',
              name: 'MRM Events',
            },
          },
        })}
      </Script>
    </section>
  );
}

export default AboutMe;
