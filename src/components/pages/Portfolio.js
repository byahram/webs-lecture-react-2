import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import PortCont from "../include/PortCont";
import axios from "axios";

// function Portfolio() {
//   return (
//     <div>
//       <Header />
//       <Contents>
//         <Title title={["Portfolio", "Api"]} />
//         <MovieCont />
//         <Contact />
//       </Contents>
//       <Footer />
//     </div>
//   );
// }

class Portfolio extends React.Component {
  state = {
    isLoading: true,
    ports: [],
  };

  mainAnimation = () => {};

  getPorts = async () => {
    const {
      data: {
        data: { ports },
      },
    } = await axios.get(
      "https://webstoryboy.github.io/dothome1/portfolio.json"
    );
    console.log(ports);
    this.setState({ ports: ports });
  };

  componentDidMount() {
    // 생명 주기 함수
    console.log("시작");
    this.getPorts();
  }

  render() {
    const { ports } = this.state;

    console.log(ports);

    return (
      <>
        <Header />
        <Contents>
          <Title title={["Portfolio", "Api"]} />
          <PortCont ports={ports} />
          <Contact />
        </Contents>
        <Footer />
      </>
    );
  }
}

export default Portfolio;
