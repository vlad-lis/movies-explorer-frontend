import { useNavigate } from 'react-router-dom';
import notFoundPageContent from '../../utils/notFoundPageContent';

function NotFound() {
  const navigate = useNavigate();
  const { errorCode, errorMessage, goBackBtn } = notFoundPageContent;

  return (
    <main className='notfound-content'>
      <section className='notfound'>
        <h1 className='notfound__err-code'>{errorCode}</h1>
        <p className='notfound__err-message'>{errorMessage}</p>
        <button className='notfound__goback-btn' onClick={() => navigate(-1)}>{goBackBtn}</button>
      </section>
    </main>
  );
}

export default NotFound;
