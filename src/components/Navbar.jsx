import { useEffect, useRef } from 'react';

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const activeBoxHandler = () => {
    activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
  };

  useEffect(activeBoxHandler, []);
  window.addEventListener('resize', activeBoxHandler);

  const currentActiveLink = (e) => {
    lastActiveLink.current?.classList.remove('active');
    e.target.classList.add('active');
    lastActiveLink.current = e.target;

    activeBox.current.style.top = e.target.offsetTop + 'px';
    activeBox.current.style.left = e.target.offsetLeft + 'px';
    activeBox.current.style.width = e.target.offsetWidth + 'px';
    activeBox.current.style.height = e.target.offsetHeight + 'px';
  };

  const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link active',
      ref: lastActiveLink,
    },
    {
      label: 'About',
      link: '#about',
      className: 'nav-link',
    },
    {
      label: 'Work',
      link: '#work',
      className: 'nav-link',
    },
    {
      label: 'Contact',
      link: '#contact',
      className: 'nav-link',
    },
  ];

  return (
    <nav className={`navbar ${navOpen ? 'active' : ''}`}>
      {navItems?.map(({ label, link, className, ref }, key) => (
        <a
          key={key}
          href={link}
          ref={ref}
          className={className}
          onClick={currentActiveLink}
        >
          {label}
        </a>
      ))}

      <div className='active-box' ref={activeBox}></div>
    </nav>
  );
};

export default Navbar;