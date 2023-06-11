import HashNavTab from '../HashNavTab/HashNavTab';
import { promoTitle } from '../../utils/staticContent/landingContent';

function Promo() {
  return (
    <section className='promo'>
      <h1 className='promo__heading'>{promoTitle}</h1>
      <HashNavTab />
    </section>
  );
}

export default Promo;
