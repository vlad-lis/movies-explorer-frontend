import { HashLink } from 'react-router-hash-link';
import { hashLinks } from '../../utils/landingContent';

function HashNavTab() {
  function scrollIntoView(element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <nav className='navtab'>
      <HashLink className='navtab__hashlink' scroll={scrollIntoView}>{hashLinks.aboutProject}</HashLink>
      <HashLink className='navtab__hashlink' scroll={scrollIntoView}>{hashLinks.techs}</HashLink>
      <HashLink className='navtab__hashlink' scroll={scrollIntoView}>{hashLinks.student}</HashLink>
    </nav>
  );
}

export default HashNavTab;
