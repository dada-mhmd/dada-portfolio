import PortfolioCard from './PortfolioCard';

const works = [
  {
    imgSrc: '/images/bot.png',
    title: 'Full stack music app',
    tags: ['API', 'MVC', 'Development'],
    projectLink: 'https://musify-5al0.onrender.com/',
  },
  {
    imgSrc: '/images/bot.png',
    title: 'Free stock photo app',
    tags: ['API', 'SPA'],
    projectLink: 'https://pixstock-official.vercel.app/',
  },
  {
    imgSrc: '/images/bot.png',
    title: 'Recipe app',
    tags: ['Development', 'API'],
    projectLink: '',
  },
  {
    imgSrc: '/images/bot.png',
    title: 'Real state website',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/codewithsadee-org/wealthome',
  },
  {
    imgSrc: '/images/bot.png',
    title: 'eCommerce website',
    tags: ['eCommerce', 'Development'],
    projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website',
  },
  {
    imgSrc: '/images/bot.png',
    title: 'vCard Personal portfolio',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio',
  },
];

const Work = () => {
  return (
    <section id='work' className='section'>
      <div className='container'>
        <h2 className='headline-2 mb-8 reveal-up'>My Recent Work</h2>

        <div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(300px,1fr))]'>
          {works?.map(({ imgSrc, projectLink, tags, title }, key) => (
            <PortfolioCard
              key={key}
              imgSrc={imgSrc}
              projectLink={projectLink}
              tags={tags}
              title={title}
              classes='reveal-up'
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
