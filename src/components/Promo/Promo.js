import NavTab from '../NavTab/NavTab';
import { promoTitle } from '../../utils/landingContent';

function Promo() {
  return (
    <section className='promo'>
      <h1 className='promo__heading'>{promoTitle}</h1>
      <NavTab />
    </section>
  );
}

export default Promo;
