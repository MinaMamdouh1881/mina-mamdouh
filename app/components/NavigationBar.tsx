// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   FiGrid,
//   FiUser,
//   FiCode,
//   FiMonitor,
//   FiMail,
//   FiChevronRight,
// } from 'react-icons/fi';

// function NavigationBar() {
//   const [active, setActive] = useState('home');
//   const [isOpen, setIsOpen] = useState(false);
//   const navRef = useRef<HTMLUListElement | null>(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const sections = document.querySelectorAll('section');
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActive(entry.target.id);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     sections.forEach((section) => observer.observe(section));
//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     function handleClickOutside(e: MouseEvent) {
//       if (
//         isOpen &&
//         navRef.current &&
//         !navRef.current.contains(e.target as Node)
//       ) {
//         setIsOpen(false);
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [isOpen]);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const links = [
//     { text: 'Home', id: 'home', icon: FiGrid, href: '#home' },
//     { text: 'About Me', id: 'about-me', icon: FiUser, href: '#about-me' },
//     { text: 'Skills', id: 'skills', icon: FiCode, href: '#skills' },
//     { text: 'Works', id: 'works', icon: FiMonitor, href: '#works' },
//     { text: 'Contact', id: 'contact', icon: FiMail, href: '#contact' },
//   ];

//   const variants = {
//     desktop: { x: 0 },
//     mobileClosed: { x: '-105%' },
//     mobileOpen: { x: 0 },
//   };

//   return (
//     <>
//       {!isOpen && (
//         <button
//           className='fixed top-1/2 left-0 z-50 bg-bg2 p-2 rounded-r-full text-white md:hidden'
//           onClick={() => setIsOpen(true)}
//         >
//           <FiChevronRight size={24} />
//         </button>
//       )}

//       <motion.ul
//         ref={navRef}
//         initial={{ x: isMobile ? '-105%' : 0 }}
//         animate={{ x: isMobile ? (isOpen ? 0 : '-105%') : 0 }}
//         transition={{ type: 'spring', stiffness: 120, damping: 20 }}
//         className='fixed top-1/2 left-0 md:left-5 z-50 flex flex-col gap-6 border rounded-t-full rounded-b-full py-3 px-1 bg-bg2 -translate-y-1/2'
//       >
//         {links.map(({ id, text, icon: Icon, href }) => (
//           <li
//             key={id}
//             data-text={text}
//             className={`relative rounded-full after:bg-white after:absolute after:bottom-1/2 after:left-10 md:after:left-15 after:p-2 after:rounded-xl after:translate-y-1/2 after:opacity-0 hover:after:opacity-100 after:duration-300 whitespace-nowrap text-black after:pointer-events-none after:content-[attr(data-text)] ${
//               active === id ? 'bg-[#fff]' : ''
//             }`}
//           >
//             <a href={href} className='block p-2'>
//               <Icon
//                 color={active === id ? 'black' : 'white'}
//                 className='text-[20px] md:text-[30px]'
//               />
//             </a>
//           </li>
//         ))}
//       </motion.ul>
//     </>
//   );
// }

// export default NavigationBar;

// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   FiGrid,
//   FiUser,
//   FiCode,
//   FiMonitor,
//   FiMail,
//   FiChevronRight,
// } from 'react-icons/fi';
// import { useMediaQuery } from 'react-responsive';

// function NavigationBar() {
//   const [active, setActive] = useState('home');
//   const [isOpen, setIsOpen] = useState(false);
//   const navRef = useRef<HTMLUListElement | null>(null);

//   // ✅ بدل resize logic
//   const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

//   // Track active section
//   useEffect(() => {
//     const sections = document.querySelectorAll('section');
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActive(entry.target.id);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     sections.forEach((section) => observer.observe(section));
//     return () => observer.disconnect();
//   }, []);

//   // Close nav when clicking outside
//   useEffect(() => {
//     function handleClickOutside(e: MouseEvent) {
//       if (
//         isOpen &&
//         navRef.current &&
//         !navRef.current.contains(e.target as Node)
//       ) {
//         setIsOpen(false);
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [isOpen]);

//   const links = [
//     { text: 'Home', id: 'home', icon: FiGrid, href: '#home' },
//     { text: 'About Me', id: 'about-me', icon: FiUser, href: '#about-me' },
//     { text: 'Skills', id: 'skills', icon: FiCode, href: '#skills' },
//     { text: 'Works', id: 'works', icon: FiMonitor, href: '#works' },
//     { text: 'Contact', id: 'contact', icon: FiMail, href: '#contact' },
//   ];

//   return (
//     <>
//       {!isOpen && isMobile && (
//         <button
//           className='fixed top-1/2 left-0 z-50 bg-bg2 p-2 rounded-r-full text-white md:hidden'
//           onClick={() => setIsOpen(true)}
//         >
//           <FiChevronRight size={24} />
//         </button>
//       )}

//       <motion.ul
//         ref={navRef}
//         initial={{ x: isMobile ? '-105%' : 0 }}
//         animate={{ x: isMobile ? (isOpen ? 0 : '-105%') : 0 }}
//         transition={{ type: 'spring', stiffness: 120, damping: 20 }}
//         className='fixed top-1/2 left-0 md:left-5 z-50 flex flex-col gap-6 border rounded-t-full rounded-b-full py-3 px-1 bg-bg2 -translate-y-1/2'
//       >
//         {links.map(({ id, text, icon: Icon, href }) => (
//           <li
//             key={id}
//             data-text={text}
//             className={`relative rounded-full after:bg-white after:absolute after:bottom-1/2 after:left-10 md:after:left-15 after:p-2 after:rounded-xl after:translate-y-1/2 after:opacity-0 hover:after:opacity-100 after:duration-300 whitespace-nowrap text-black after:pointer-events-none after:content-[attr(data-text)] ${
//               active === id ? 'bg-[#fff]' : ''
//             }`}
//           >
//             <a href={href} className='block p-2'>
//               <Icon
//                 color={active === id ? 'black' : 'white'}
//                 className='text-[20px] md:text-[30px]'
//               />
//             </a>
//           </li>
//         ))}
//       </motion.ul>
//     </>
//   );
// }

// export default NavigationBar;
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiGrid,
  FiUser,
  FiCode,
  FiMonitor,
  FiMail,
  FiChevronRight,
} from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive';

function NavigationBar() {
  const [active, setActive] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLUListElement | null>(null);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        isOpen &&
        navRef.current &&
        !navRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const links = [
    { text: 'Home', id: 'home', icon: FiGrid, href: '#home' },
    { text: 'About Me', id: 'about-me', icon: FiUser, href: '#about-me' },
    { text: 'Skills', id: 'skills', icon: FiCode, href: '#skills' },
    { text: 'Works', id: 'works', icon: FiMonitor, href: '#works' },
    { text: 'Contact', id: 'contact', icon: FiMail, href: '#contact' },
  ];

  return (
    <>
      {!isOpen && isMobile && (
        <button
          className='fixed top-1/2 left-0 z-50 bg-bg2 p-2 rounded-r-full text-white md:hidden'
          onClick={() => setIsOpen(true)}
        >
          <FiChevronRight size={24} />
        </button>
      )}

      <motion.ul
        ref={navRef}
        initial={{ x: isMobile ? '-105%' : 0 }}
        animate={{ x: isMobile ? (isOpen ? 0 : '-105%') : 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className='fixed top-1/2 left-0 md:left-5 z-50 flex flex-col gap-6 border rounded-t-full rounded-b-full py-3 px-1 bg-bg2 -translate-y-1/2'
      >
        {links.map(({ id, text, icon: Icon, href }) => {
          const isActive = active === id;
          return (
            <li
              key={id}
              data-text={text}
              className='relative rounded-full whitespace-nowrap text-black'
            >
              {isActive && (
                <motion.div
                  layoutId='active-circle'
                  className='absolute inset-0 bg-white rounded-full'
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <a href={href} className='relative block p-2 z-10'>
                <Icon
                  color={isActive ? 'black' : 'white'}
                  className='text-[20px] md:text-[30px]'
                />
              </a>
            </li>
          );
        })}
      </motion.ul>
    </>
  );
}

export default NavigationBar;
