import '../App.css';
import {Outlet} from 'react-router-dom';
import Layout from './Layout.tsx';


const PublicLayout = () => (
  <Layout className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
    <Outlet/>
  </Layout>
)

export default PublicLayout;
