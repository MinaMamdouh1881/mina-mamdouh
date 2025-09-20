import Module from "./Module";
import Button from "./Button";
import { FiSend } from "react-icons/fi";
import Script from "next/script";

function Contact() {
  return (
    <section id='contact' className='bg-bg2 flex flex-col items-center my-main'>
      <Module
        title='Contact'
        desc="I'm currently available for freelance work"
      />
      <h3 className='logo-m w-fit py-2 px-5 sm:py-4 sm:px-10 border-3 border-brand1 rounded-br-[40px] rounded-tl-[40px] text-brand1 mt-main'>
        Send me a message
      </h3>

      <form
        action='https://formsubmit.co/minamamdouh345@gmail.com'
        aria-label='Contact form to send me a message'
        method='POST'
        className='flex flex-col py-4 px-10 gap-10'
      >
        <input
          type='hidden'
          name='_subject'
          value='رسالة جديدة من موقعك الشخصي'
        />
        <input type='hidden' name='_captcha' value='false' />
        <input type='hidden' name='_template' value='table' />

        <div className='flex gap-20 max-sm:flex-col max-sm:gap-10'>
          <span className='flex flex-col gap-3 flex-1'>
            <label htmlFor='name' className='text-brand1'>
              Your Name*
            </label>
            <input
              required
              id='name'
              name='name'
              type='text'
              placeholder='Enter Your Name'
              className='bg-bg2 border-b-2 border-brand1 text-brand1 focus:outline-none placeholder:para-u placeholder:text-white'
              autoComplete="name"
            />
          </span>

          <span className='flex flex-col gap-3 flex-1'>
            <label htmlFor='email' className='text-brand1'>
              Your Email*
            </label>
            <input
              required
              id='email'
              name='email'
              type='email'
              placeholder='Enter Your Email'
              className='bg-bg2 border-b-2 border-brand1 text-brand1 focus:outline-none placeholder:para-u placeholder:text-white'
              autoComplete="email"
            />
          </span>
        </div>

        <span className='flex flex-col gap-3'>
          <label htmlFor='message' className='text-brand1'>
            Your Message*
          </label>
          <textarea
            required
            id='message'
            name='message'
            placeholder='Enter Your Message'
            rows={2}
            className='bg-bg2 border-b-2 border-brand1 text-brand1 focus:outline-none placeholder:para-u placeholder:text-white resize-none'
            autoComplete="off"
          />
        </span>
        <Button title='Send Message' type='solid' icon={FiSend} />
      </form>
      {/* SEO */}
    <Script
      id="contact-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact - Mina Mamdouh",
          "description": "Get in touch with Mina Mamdouh for freelance or collaboration opportunities.",
          "url": `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
          "mainEntity": {
            "@type": "Person",
            "name": "Mina Mamdouh",
            "jobTitle": "Frontend Developer",
            "url": process.env.NEXT_PUBLIC_SITE_URL,
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Freelance Work",
              "email": "minamamdouh345@gmail.com",
              "availableLanguage": ["English", "Arabic"]
            }
          }
        }),
      }}
    />

    </section>
  );
}

export default Contact;
