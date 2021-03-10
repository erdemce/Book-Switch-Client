import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    const { forSearch } = this.props;
    return (
      <section className="searchbar body-width">
        <form className="d-flex" action="/home" method="GET">
          <img width="30px"src="/assets/006-search.png" alt="searchicon"/>
          <input
            name="searchedToy"
            className="search-input form-control me-2"
            type="search"
            placeholder="Search by Author or Title"
            aria-label="Search"
            onChange={forSearch}
          ></input>
        </form>
      </section>
    );
  }
}
