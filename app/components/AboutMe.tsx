import Image from 'next/image';
import Module from './Module';
function AboutMe() {
  return (
    <section
      id="about-me"
      className="bg-[url(/about-me-bg.png)] bg-center bg-cover py-[50px] flex flex-col items-center px-12 md:px-36"
    >
      <Module />
      <div className="flex flex-col items-center gap-10 min-[1200px]:flex-row">
        <div className="flex flex-col items-center gap-10 md:items-start">
          <h2 className="h1-u bg-bg1 w-fit py-4 px-10 border-3 border-brand1 rounded-br-[40px] rounded-tl-[40px]">
            About Me
          </h2>
          <div className="flex flex-col gap-4 bg-bg1 p-5 rounded-3xl">
            <span className="code-m text-brand2">{`<p>`}</span>
            <div>
              <p className="h2-m text-brand1">Hello!</p>
              <p className="para-m leading-8">
                My name is Mina Mamdouh and I specialize in web developement
                that utilizes <span className="text-brand1">HTML</span>,{" "}
                <span className="text-brand1">CSS</span>,{" "}
                <span className="text-brand1">JS</span>, and{" "}
                <span className="text-brand1">REACT</span> etc.
              </p>
              <p className="para-m leading-8">
                I like to have my perspective and belief systems challenged so
                that I see the world through new eyes.
              </p>
            </div>
            <span className="code-m text-brand2">{`</p>`}</span>
          </div>
        </div>
        <Image
          src="/about-me-image.png"
          alt="about-me-section-image"
          width={462}
          height={556}
        />
      </div>
    </section>
  );
}

export default AboutMe;