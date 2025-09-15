import { FaGithub, FaLinkedinIn } from "react-icons/fa";
function Footer() {
  return (
    <footer className="para-u">
      <hr className="h-[2px] bg-grey border-0" />
      <div className="flex justify-center items-center px-[10%] text-white flex-wrap gap-x-16 gap-y-5 py-5">
        <p className="max-xl:order-2">
          &copy; 2025 Mina Mamdouh. All rights reserved.
        </p>
        <div className="flex gap-x-5 max-xl:order-3">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <ul className="flex gap-x-2 max-xl:order-1 max-xl:w-full justify-center items-center">
          <li className="bg-brand2 p-2 rounded-full">
            <a href="https://github.com/MinaMamdouh1881" target="_blank">
              <FaGithub size={20} color="black" />
            </a>
          </li>
          <li className="bg-brand2 p-2 rounded-full">
            <a
              href="https://www.linkedin.com/in/mina-mamdouh-793a60326/"
              target="_blank"
            >
              <FaLinkedinIn size={20} color="black" />
            </a>
          </li>
        </ul>
        <p className="max-xl:order-4">
          Design By &nbsp;
          <a
            className="text-brand1 underline"
            href="https://www.linkedin.com/in/mina-mamdouh-793a60326/"
          >
            Mina Mamdouh
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
