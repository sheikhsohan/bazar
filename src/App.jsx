import Navbar from './sections/Navbar'
import Header from "./sections/Header"
import Banner from './sections/Banner'
import SupperDeals from './sections/SupperDeals'
import BestSeller from './sections/BestSeller'
import FreshBanner from './sections/FreshBanner'
import NewArrivals from './sections/NewArrivals'

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
      <NewArrivals />
    </main>
    </>
  )
}

export default App