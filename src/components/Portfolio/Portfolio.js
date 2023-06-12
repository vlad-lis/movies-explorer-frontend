import { portfolio } from '../../utils/staticContent/landingContent';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__title'>{portfolio.name}</h3>
      <ul className='portfolio__list'>
      <li className='portfolio__project'>
          <a className='portfolio__project-link' href='https://github.com/vlad-lis/react-mesto-api-full-gha' target='_blank' rel='noreferrer'>
            <p className='portfolio__project-name'>{portfolio.project3}</p>
          </a>
          <a className='portfolio__btn' href='https://github.com/vlad-lis/react-mesto-api-full-gha' target='_blank' rel='noreferrer' />
        </li>
        <li className='portfolio__project'>
          <a className='portfolio__project-link' href='https://github.com/vlad-lis/russian-travel' target='_blank' rel='noreferrer'>
            <p className='portfolio__project-name'>{portfolio.project2}</p>
          </a>
          <a className='portfolio__btn' href='https://github.com/vlad-lis/russian-travel' target='_blank' rel='noreferrer' />
        </li>
        <li className='portfolio__project'>
          <a className='portfolio__project-link' href='https://github.com/vlad-lis/how-to-learn' target='_blank' rel='noreferrer'>
            <p className='portfolio__project-name'>{portfolio.project1}</p>
          </a>
          <a className='portfolio__btn' href='https://github.com/vlad-lis/how-to-learn' target='_blank' rel='noreferrer' />
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
