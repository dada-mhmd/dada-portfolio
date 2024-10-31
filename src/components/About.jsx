const About = () => {
  const aboutItems = [
    { label: 'Project done', number: 25 },
    { label: 'Years of experience', number: 3 },
  ];

  return (
    <section id='about' className='section'>
      <div className='container'>
        <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up'>
          <p className='text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]'>
            Welcome! I&apos;m Mohammad, a passionate web developer with a
            knowledge of Full Stack Development. I&apos;m dedicated to creating
            engaging, user-friendly and fully functional websites. Let&apos;s
            collaborate to bring your ideas to life!
          </p>

          <div className='flex flex-wrap items-center gap-4 md:gap-7'>
            {aboutItems?.map(({ label, number }, key) => (
              <div key={key}>
                <div className='flex items-center md:mb-2'>
                  <span className='text-2xl font-semibold md:text-4xl'>
                    {number}
                  </span>
                  <span className='text-sky-400 font-semibold md:text-3xl'>
                    +
                  </span>
                </div>
                <p className='text-sm text-zinc-400'>{label}</p>
              </div>
            ))}
            <span className='relative size-6 -z-10 ml-auto size-2 rounded-full bg-emerald-400'>
              <span className='absolute inset-0  rounded-full bg-emerald-400 animate-ping'></span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
