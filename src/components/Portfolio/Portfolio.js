import { portfolio } from '../../utils/landingContent';
import linkBtn from '../../images/portfolio-link-btn.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__title'>{portfolio.name}</h3>
      <ul className='portfolio__list'>
        <li className='portfolio__project'>
          <p className='portfolio__project-name'>{portfolio.project1}</p>
          <button className='portfolio__btn' type='button'><img src={linkBtn} alt='link btn' /></button>
        </li>
        <li className='portfolio__project'>
          <p className='portfolio__project-name'>{portfolio.project2}</p>
          <button className='portfolio__btn' type='button'><img src={linkBtn} alt='link btn' /></button>
        </li>
        <li className='portfolio__project'>
          <p className='portfolio__project-name'>{portfolio.project3}</p>
          <button className='portfolio__btn' type='button'><img src={linkBtn} alt='link btn' /></button>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
