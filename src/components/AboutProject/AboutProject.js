import { aboutProject } from '../../utils/landingContent';

function AboutProject() {
  return (
    <section className='aboutproject'>
      <h2 className='aboutproject__heading'>{aboutProject.heading}</h2>
      <ul className='aboutproject__info'>
        <li className='aboutproject__subcontainer'>
          <h3 className='aboutproject__subheading'>{aboutProject.stages}</h3>
          <p className='aboutproject__subinfo'>{aboutProject.stagesInfo}</p>
        </li>
        <li className='aboutproject__subcontainer'>
          <h3 className='aboutproject__subheading'>{aboutProject.duration}</h3>
          <p className='aboutproject__subinfo'>{aboutProject.durationInfo}</p>
        </li>
      </ul>
      <ul className='aboutproject__duration'>
        <li className='aboutproject__back-duration'>{aboutProject.backendDuration}</li>
        <li className='aboutproject__back-info'>{aboutProject.backendDescription}</li>
        <li className='aboutproject__front-duration'>{aboutProject.frontendDuration}</li>
        <li className='aboutproject__front-info'>{aboutProject.frontendDescription}</li>
      </ul>
    </section>
  );
}

export default AboutProject;
