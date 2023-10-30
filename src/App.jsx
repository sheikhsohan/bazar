import Navbar from './sections/Navbar'
import Header from "./sections/Header"
import Banner from './sections/Banner'
import SupperDeals from './sections/SupperDeals'
import BestSeller from './sections/BestSeller'
import FreshBanner from './sections/FreshBanner'
import NewArrivals from './sections/NewArrivals'
import MiddleBanner from './sections/MiddleBanner'
import PopularCategory from './sections/PopularCategory'

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
      <MiddleBanner />
      <PopularCategory />
    </main>
    </>
  )
}

export default App