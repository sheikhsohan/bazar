import Navbar from './sections/Navbar'
import Header from "./sections/Header"
import Banner from './sections/Banner'
import SupperDeals from './sections/SupperDeals'
import BestSeller from './sections/BestSeller'
import FreshBanner from './sections/FreshBanner'

const App = () => {
  return (
    <>
    <main>
      <Navbar />
      <Header />
      <Banner />
      <BestSeller />
      <SupperDeals />
      <FreshBanner />
    </main>
    </>
  )
}

export default App