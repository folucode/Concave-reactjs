import React from "react";
import convert from "convert-units";
import NavBar from "../src/components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Calculation from "./components/Calculation/Calculation";
import Answer from "./components/Answer/Answer";
// import "bootstrap/dist/css/bootstrap.css";
// import "./assets/css/now-ui-kit.css";
// import { Container, Row, Col } from "reactstrap";
class App extends React.Component {
  state = {
    measure: "",
    from: "",
    to: "",
    number: "",
    answer: "",
    sidebarOpen: false,
  };

  toggleSidebar = () => {
    this.setState((prevState) => {
      return { sidebarOpen: !prevState.sidebarOpen };
    });
  };

  convert = () => {
    try {
      let answer = convert(this.state.number)
        .from(this.state.from)
        .to(this.state.to);
      this.setState({ answer });
    } catch (error) {
      console.log(error);
    }
  };

  changeMode = (measure) => {
    let set = convert().possibilities(measure)[0];
    let from = set;
    let to = set;

    this.setState({
      measure,
      from,
      to,
      answer: "",
    });
  };

  componentDidMount() {
    this.setState({
      from: convert().possibilities(this.state.measure)[0],
      to: convert().possibilities(this.state.measure)[0],
    });
  }

  render() {
    let sidebarDrawer;
    if (this.state.sidebarOpen) {
      sidebarDrawer = (
        <SideBar
          click={(measure) => this.changeMode(measure)}
          show={this.state.sidebarOpen}
        />
      );
    }

    return (
      <div>
      <NavBar click={this.toggleSidebar} />
      {sidebarDrawer}
        {/* <Container className="themed-container" fluid={true}>
          <NavBar click={this.toggleSidebar} />
          
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Calculation
                change={(event) =>
                  this.setState({ number: event.target.value, answer: "" })
                }
                value={this.state.number}
                changeFrom={(event) =>
                  this.setState({ from: event.target.value, answer: "" })
                }
                measure={this.state.measure}
                changeTo={(event) =>
                  this.setState({ to: event.target.value, answer: "" })
                }
                convert={this.convert}
              />
              <Answer
                number={this.state.number}
                answer={this.state.answer}
                from={this.state.from}
                to={this.state.to}
              />
            </Col>
          </Row>
        </Container> */}
      </div>
    );
  }
}

export default App;
