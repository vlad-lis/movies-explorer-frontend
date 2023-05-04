import student from '../../images/student.svg';
import { aboutme } from '../../utils/landingContent';

function AboutMe() {
  return (
    <section className='aboutme'>
      <h2 className='aboutme__heading'>{aboutme.job}</h2>
      <div className='aboutme__container'>
        <div className='aboutme__info'>
          <h3 className='aboutme__name'>{aboutme.name}</h3>
          <p className='aboutme__profile'>{aboutme.profile}</p>
          <p className='aboutme__bio'>{aboutme.bio}</p>
          <a className='aboutme__ghlink' href='#' target='_blank'>{aboutme.github}</a>
        </div>
        <img className='aboutme__photo' src={student} alt='student photo' />
      </div>
    </section>
  );
}

export default AboutMe;
