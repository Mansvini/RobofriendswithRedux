import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./gh-fork-ribbon.css";
import "./App.css";
import { setSearchField, requestRobots } from "../actions";
import Header from "../components/Header";
// import CounterButton from "../components/CounterButton";
// import CounterButton2 from "../components/CounterButton2";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <a
          className="github-fork-ribbon right-top"
          href="https://github.com/Mansvini/RobofriendswithRedux"
          target="_blank"
          rel="noreferrer"
          data-ribbon="Fork me on GitHub"
          title="Fork me on GitHub"
        >
          Fork me on GitHub
        </a>
        <Header />
        {/* <CounterButton color={"red"} />
        <CounterButton2 color={"red"} /> */}
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {isPending ? <h1>Loading</h1> : <CardList robots={filteredRobots} />}
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
