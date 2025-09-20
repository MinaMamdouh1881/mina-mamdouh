import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import * as motion from 'motion/react-client';
import Link from 'next/link';
function Header() {
  const socialLinks = [
    {
      id: 1,
      name: 'Github',
      icon: <FaGithub className='text-brand1 md:w-6 md:h-6 h-5 w-5' />,
      link: 'https://github.com/MinaMamdouh1881',
    },
    {
      id: 2,
      name: 'LinkedIn',
      icon: <FaLinkedinIn className='text-brand1 md:w-6 md:h-6 h-5 w-5' />,
      link: 'https://www.linkedin.com/in/mina-mamdouh-793a60326/',
    },
  ];

  const sections = [
    {
      id: 1,
      name: 'Home',
      link: '#home',
    },
    {
      id: 2,
      name: 'Works',
      link: '#works',
    },
    {
      id: 3,
      name: 'Contact',
      link: '#contact',
    },
  ];
  return (
    <motion.header
      initial={{ opacity: 0, y: -250 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', duration: 0.5 }}
      className='py-[32px] bg-bg1 flex justify-center items-center'
    >
      <div className='w-11/12 flex justify-between items-center'>
        <div className='grow'>
          <Link href='/' aria-label='Go to homepage'>
            <span className='sm:medium-m md:menu-m lg:logo-m text-white flex items-center gap-2'>
              <span className='text-brand1' role='img' aria-label='Logo'>
                {'<MM/>'}
              </span>
              <span className='max-sm:hidden'>MinaMamdouh</span>
            </span>
          </Link>
        </div>
        <nav
          className='flex justify-between items-center media-m md:menu-m text-white sm:grow'
          aria-label='Main navigation'
        >
          {/* <nav> */}
          <ul className='flex gap-x-5'>
            {sections.map((item) => (
              <li key={item.id} className='hover:text-brand1 cursor-pointer'>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label='Social media'>
          <ul className='gap-x-5 hidden sm:flex'>
            {socialLinks.map((item) => (
              <li key={item.id} className='hover:text-brand1 cursor-pointer'>
                <a
                  href={item.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={item.name}
                  title={item.name}
                  className='flex items-center gap-x-2'
                >
                  <span>{item.icon}</span>
                  <span className='lg:block hidden'>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}

export default Header;
