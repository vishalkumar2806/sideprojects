import Header from "./index/header"
import Body from "./index/body"
import Footer from "./index/footer"

const page = () => {
  return (
    <div className="wrapper">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default page
