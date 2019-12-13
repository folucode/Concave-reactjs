import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
// import Content from "./components/content/Content";

import classNames from "classnames";
import { Container } from "reactstrap";
import NavBar from "./components/NavBar/NavBar";
import Calculation from "./components/Calculation/Calculation";
import Answer from "./components/Answer/Answer";
import convert from "convert-units";
// import "./assets/css/now-ui-kit.css";

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

  convert = (e) => {
    e.preventDefault();
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
    return (
      <div className="App wrapper">
        <SideBar
          click={(measure) => this.changeMode(measure)}
          toggle={this.toggleSidebar}
          isOpen={this.state.sidebarOpen}
        />

        <Container
          fluid
          className={classNames("content", { "is-open": this.state.isOpen })}>
          <NavBar toggle={this.toggleSidebar} />
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
        </Container>
        {/* <Content toggle={this.toggleSidebar} isOpen={this.state.sidebarOpen} /> */}
      </div>
    );
  }
}

export default App;
