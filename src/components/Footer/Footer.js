import { footer } from '../../utils/landingContent';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__description'>{footer.description}</p>
      <div className='footer__info-container'>
        <p className='footer__text footer__copyright'>{footer.copyright}</p>
        <ul className='footer__links'>
          <li className='footer__text'>{footer.yandex}</li>
          <li className='footer__text'>{footer.git}</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
