import './App.scss'
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer';
import { Layout } from '../components/Layout';

export const App = () => (
  <Layout>
    <Header />
    <Main />
    {/*<Footer />*/}
  </Layout>
)
