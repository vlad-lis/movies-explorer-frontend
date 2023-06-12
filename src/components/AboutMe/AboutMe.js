import student from '../../images/student.jpg';
import { aboutme } from '../../utils/staticContent/landingContent';

function AboutMe() {
  return (
    <section className='aboutme' id='aboutme'>
      <h2 className='aboutme__heading'>{aboutme.job}</h2>
      <div className='aboutme__container'>
        <div className='aboutme__info'>
          <h3 className='aboutme__name'>{aboutme.name}</h3>
          <p className='aboutme__profile'>{aboutme.profile}</p>
          <p className='aboutme__bio'>{aboutme.bio}</p>
          <a className='aboutme__ghlink'
          href='https://github.com/vlad-lis'
          target='_blank'
          rel="noreferrer">{aboutme.github}</a>
        </div>
        <img className='aboutme__photo' src={student} alt='student photo' />
      </div>
    </section>
  );
}

export default AboutMe;
