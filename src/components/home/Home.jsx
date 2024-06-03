import Banner from "./banner/Banner"
import Discount from "./discount/Discount"
import HotDeals from "./hotdeals/HotDeals"
import Newsletter from "./newsletter/Newsletter"
import Tab from "./tab/Tab"

function Home() {
  return (
    <div>
      <Banner />
      <HotDeals/>
      <Discount/>
      <Tab/>
      <Newsletter/>
    </div>
  )
}

export default Home