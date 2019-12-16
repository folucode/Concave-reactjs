import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import classNames from "classnames";
import { Container } from "reactstrap";
import NavBar from "./components/NavBar/NavBar";
import Calculation from "./components/Calculation/Calculation";
import Answer from "./components/Answer/Answer";
import convert from "convert-units";
import ReactGA from 'react-ga'

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
      console.error(error);
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
    ReactGA.initialize('UA-154668045-1');
    ReactGA.pageview('/');
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
          <div className="row">
            <div className="col-sm-12 col-md-6 offset-md-3">
              {this.state.measure === "" ? (
                <div className="alert alert-danger">
                  <h3 className="text-center">
                    Pick a conversion mode from the sidebar to get started
                  </h3>
                </div>
              ) : (
                  ""
                )}
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
            </div>
          </div>
          <footer class="footer">

            <p class="text-center mb-0">Created with <span className="has-danger">&#10084;</span> by <a href="https://twitter.com/chukwutosin_" target="_blank" className="text-danger" rel="noopener noreferrer">ChukwuTosin</a> </p>

          </footer>
        </Container>
      </div>
    );
  }

}

export default App;
