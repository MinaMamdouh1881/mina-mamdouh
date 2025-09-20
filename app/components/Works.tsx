import Module from './Module';
import projects from '@/public/projects.json';
import MySwiper from './MySwiper';

function Works() {
  const mid = Math.ceil(projects.length / 2);
  const firstHalf = projects.slice(0, mid);
  const secondHalf = projects.slice(mid);
  return (
    <section
      id='works'
      className='bg-[url(/works-bg.webp)] bg-center bg-contain py-[50px] px-0 md:px-12'
    >
      <Module
        title='Works'
        desc='I had the pleasure of working with these awesome projects'
      />
      <div className='overflow-hidden px-2 py-3 md:p-5'>
        <MySwiper data={firstHalf} />
        <MySwiper data={secondHalf} />
      </div>
    </section>
  );
}

export default Works;
