import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    const { forSearch } = this.props;
    return (
      <section className="searchbar">
        <form className="d-flex" action="/home" method="GET">
          <input
            name="searchedToy"
            className="form-control me-2"
            type="search"
            placeholder="Search for Author or Title"
            aria-label="Search"
            onChange={forSearch}
          ></input>
        </form>
      </section>
    );
  }
}
