import Module from "./Module";
import Button from "./Button";
import { FiSend } from "react-icons/fi";

function Contact() {
  return (
    <section id="contact" className="bg-bg2 flex flex-col items-center my-main">
      <Module
        title="Contact"
        desc="I'm currently available for freelance work"
      />
      <h2 className="logo-m w-fit py-2 px-5 sm:py-4 sm:px-10 border-3 border-brand1 rounded-br-[40px] rounded-tl-[40px] text-brand1 mt-main">
        Send me a message
      </h2>

      <form
        action="https://formsubmit.co/minamamdouh345@gmail.com"
        method="POST"
        className="flex flex-col py-4 px-10 gap-10"
      >
        <input
          type="hidden"
          name="_subject"
          value="رسالة جديدة من موقعك الشخصي"
        />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />

        <div className="flex gap-20 max-sm:flex-col max-sm:gap-10">
          <span className="flex flex-col gap-3 flex-1">
            <label htmlFor="name" className="text-brand1">
              Your Name*
            </label>
            <input
              required
              id="name"
              name="name"
              type="text"
              placeholder="Enter Your Name"
              className="bg-bg2 border-b-2 border-brand1 text-brand1 focus:outline-none placeholder:para-u placeholder:text-white"
            />
          </span>

          <span className="flex flex-col gap-3 flex-1">
            <label htmlFor="email" className="text-brand1">
              Your Email*
            </label>
            <input
              required
              id="email"
              name="email"
              type="email"
              placeholder="Enter Your Email"
              className="bg-bg2 border-b-2 border-brand1 text-brand1 focus:outline-none placeholder:para-u placeholder:text-white"
            />
          </span>
        </div>

        <span className="flex flex-col gap-3">
          <label htmlFor="message" className="text-brand1">
            Your Message*
          </label>
          <textarea
            required
            id="message"
            name="message"
            placeholder="Enter Your Message"
            rows={2}
            className="bg-bg2 border-b-2 border-brand1 text-brand1 focus:outline-none placeholder:para-u placeholder:text-white resize-none"
          />
        </span>
        <Button title="Send Message" type="solid" icon={FiSend} />
      </form>
    </section>
  );
}

export default Contact;
