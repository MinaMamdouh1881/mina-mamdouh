'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaGithub, FaExternalLinkAlt, FaVideo } from 'react-icons/fa';
import Script from 'next/script';
import Image from 'next/image';

export type DATA = {
  hasDemo: boolean;
  title: string;
  description: string;
  image: string;
  alt: string;
  githup: string;
  demo?: string;
  video?: string;
  tech: string[];
};
export default function MySwiper({ data }: { data: DATA[] }) {
  return (
    <Swiper
      spaceBetween={25}
      slidesPerView={1}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      modules={[Navigation, Autoplay]}
      className='h-[550px] md:h-[550px] mb-10 relative'
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        700: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
      }}
    >
      {data.map((project, index) => (
        <SwiperSlide key={index}>
          <article className='bg-bg1 flex flex-col justify-between h-full group duration-300 hover:scale-103 hover:shadow-[0_0_8px_#12f7d6]'>
            <div className=''>
              <div className='overflow-hidden'>
                <div className='relative w-full h-44'>
                  <Image
                    src={project.image}
                    alt={project.alt}
                    className='scale-105 transition-transform duration-500 group-hover:scale-110 aspect-[19/10]'
                    loading='lazy'
                    layout='fill'
                  />
                </div>
                <h3 className='text-xl font-semibold mb-2 text-white h2-m px-4 py-2'>
                  {project.title}
                </h3>
                <p className='text-white mb-4 para-m px-4 py-2'>
                  {project.description}
                </p>
              </div>
            </div>
            <div>
              <div className='flex flex-wrap gap-5 px-5'>
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className='code-m bg-bg2 text-white py-1 px-2 rounded-full duration-300 hover:text-black hover:bg-brand1 hover:scale-110 hover:font-semibold'
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className='flex flex-row justify-around my-4'>
                <a
                  target='_blank'
                  href={project.githup}
                  className='bg-bg2 rounded-full duration-500 p-2 hover:bg-brand1 hover:scale-110 hover:rotate-12 hover:text-black hover:shadow-[0_0_15px_rgba(18,247,214,0.5)]'
                >
                  <FaGithub size={20} />
                </a>
                <a
                  target='_blank'
                  href={project.hasDemo ? project.demo : project.video}
                  className='bg-bg2 rounded-full duration-500 p-2 hover:bg-brand1 hover:scale-110 hover:-rotate-12 hover:text-black hover:shadow-[0_0_15px_rgba(18,247,214,0.5)]'
                >
                  {project.hasDemo ? (
                    <FaExternalLinkAlt size={20} />
                  ) : (
                    <FaVideo size={20} />
                  )}
                </a>
              </div>
            </div>
          </article>
          {/* SEO */}
          <Script type='application/ld+json' id={`project-schema-${index}`}>
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CreativeWork',
              name: project.title,
              description: project.description,
              image: project.image,
              url: project.hasDemo ? project.demo : project.video,
              creator: {
                '@type': 'Person',
                name: 'Mina Mamdouh',
              },
            })}
          </Script>
        </SwiperSlide>
      ))}
      <div className='swiper-button-prev !text-white !bg-bg2 !rounded-full !p-4 !shadow-md hover:!bg-brand1 hover:!text-black hover:!scale-110 transition-all duration-300'></div>
      <div className='swiper-button-next !text-white !bg-bg2 !rounded-full !p-4 !shadow-md hover:!bg-brand1 hover:!text-black hover:!scale-110 transition-all duration-300'></div>
    </Swiper>
  );
}
