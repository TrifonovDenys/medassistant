import Link from 'next/link';
const Footer = () => {
  return (
    <footer className='footer mt-auto py-3 bg-dark'>
      <div className='container'>
        <p className='text-light'>
          App desenvolvido por{' '}
          <a href='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' target='_blank' rel='noreferrer'>
            Rafael Lima
          </a>
        </p>
        <p className='text-light'>
          <small>
            <strong>Semana Spring React</strong>
            <br />
            Evento promovido pela escola DevSuperior:{' '}
            <a href='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' target='_blank' rel='noreferrer'>
              @devsuperior.ig
            </a>
          </small>
        </p>
        <ul>
          <li>
            <Link href='/contact_us'>Зв’язатися з нами</Link>
          </li>
          <li>
            <Link href='/about'>Про Нас</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
