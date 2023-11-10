import Head from 'next/head';
import { Menu } from '../classes/componentes/Menu';

const Home: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Loja Next</title>
      </Head>

      <Menu />

      <main className="main container">
        <h1 className="title">Página Inicial</h1>
      </main>
    </div>
  );
};

export default Home;
