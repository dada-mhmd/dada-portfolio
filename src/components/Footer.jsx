import { ButtonPrimary } from './Button';

const sitemap = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Reviews',
    href: '#reviews',
  },
  {
    label: 'Contact me',
    href: '#contact',
  },
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://www.github.com/dada-mhmd',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/codewithsadee',
  },
  {
    label: 'Twitter X',
    href: 'https://x.com/codewithsadee_',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/codewithsadee',
  },
];

const Footer = () => {
  return (
    <footer className='section mt-10'>
      <hr className='w-[90%] mx-auto mb-10  border-t-gray-300' />
      <div className='container'>
        <div className='lg:grid lg:grid-cols-2'>
          <div className='mb-10'>
            <h2 className='headline-1 mb-8 lg:max-w-[12ch] reveal-up'>
              Have a project in mind?
            </h2>

            <ButtonPrimary
              href='mailto:mohammad.aldada.dev@gmail.com'
              label='Hire Me'
              icon='chevron_right'
              classes='reveal-up'
            />
          </div>

          <div className='grid grid-cols-2 gap-4 lg:pl-20'>
            <div>
              <p className='mb-2 reveal-up'>Sitemap</p>

              <ul>
                {sitemap?.map((item, index) => {
                  return (
                    <li key={index}>
                      <a
                        className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up'
                        href={item.href}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <p className='mb-2 reveal-up'>Socials</p>

              <ul>
                {socials?.map((item, index) => {
                  return (
                    <li key={index}>
                      <a
                        className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up'
                        href={item.href}
                        target='_blank'
                        rel='noreferrer'
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-between pt-10 mb-8'>
          <a href='#home' className='text-xl font-semibold reveal-up'>
            DADA
          </a>

          <p className='text-zinc-500 text-sm reveal-up'>
            &copy; {new Date().getFullYear()}
            <span className='text-zinc-200'> Mohammad Aldada</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
