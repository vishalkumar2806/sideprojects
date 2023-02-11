import Body from "@/components/index/body";
import Footer from "@/components/index/footer";
import Header from "@/components/index/header";
import React from "react";
import { useRouter } from "next/router";

class App extends React.Component {
  render() {
    return (
          <div className="wrapper">
            <Header />
            <Body />
            <Footer />
          </div>
    );
  }
}

// export default App;
// const App = () => {
//   return (

//   );
// };

export default App;
