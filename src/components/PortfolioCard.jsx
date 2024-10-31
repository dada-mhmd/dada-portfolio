const PortfolioCard = ({ imgSrc, projectLink, tags, title, classes }) => {
  return (
    <div
      className={`relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 ${classes}`}
    >
      <figure className='img-box'>
        <img src={imgSrc} alt={title} className='img-cover' loading='lazy' />
      </figure>

      <div className='flex items-center justify-between gap-4'>
        <div>
          <h3 className='title-1 mt-1'>{title}</h3>

          <div className='flex flex-wrap items-center gap-2'>
            {tags?.map((label, key) => (
              <span
                key={key}
                className='h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg mt-2'
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className='size-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0'>
          <span className='material-symbols-rounded' aria-hidden='true'>
            arrow_outward
          </span>
        </div>
      </div>

      <a
        href={projectLink}
        target='_blank'
        rel='noreferrer'
        className={`absolute inset-0`}
      ></a>
    </div>
  );
};

export default PortfolioCard;
