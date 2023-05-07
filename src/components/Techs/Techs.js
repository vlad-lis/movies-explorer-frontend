import { techs } from '../../utils/landingContent';

function Techs() {
  return (
    <section className='techs' id='techs'>
      <div className='techs__container'>
        <h2 className='techs__heading'>{techs.heading}</h2>
        <div className='techs__info'>
          <h3 className='techs__subheading'>{techs.count}</h3>
          <p className='techs__description'>{techs.info}</p>
          <ul className='techs__list'>
            <li className='techs__tech'>{techs.html}</li>
            <li className='techs__tech'>{techs.css}</li>
            <li className='techs__tech'>{techs.js}</li>
            <li className='techs__tech'>{techs.react}</li>
            <li className='techs__tech'>{techs.git}</li>
            <li className='techs__tech'>{techs.express}</li>
            <li className='techs__tech'>{techs.mongo}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Techs;
