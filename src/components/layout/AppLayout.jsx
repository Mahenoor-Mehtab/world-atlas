import { Outlet } from 'react-router-dom'
import Header from './Header'
import About from '../../pages/About'
import Footer from './Footer'
const AppLayout = () => {
  return (
    <>
        <div>
        <Header />
        <Outlet/>
        {/* <About/> */}
        <Footer/>
        </div>
    </>
  )
}

export default AppLayout