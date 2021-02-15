import React, { Component } from "react";
import { Paper, TextField } from "@material-ui/core";

class searchBar extends Component {
  //state object
  state = {
    searchTerm: "",
  };

  //arrow functions are special because they don't have ther own this
  handleChange = (event) => {
    //console.log(event.target.value);
    this.setState({ searchTerm: event.target.value }); //this will refer to the clss not to the handleChange arrow function
    //setState{()} is important method in react which set the state of the state object and make react component know what the current state of some proprty in the state obj (ex. searchTerm)
  };

  handleSubmit = (event) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);
    event.preventDefault();
  };

  render() {
    return (
      <Paper elevation={6} style={{ padding: "15px" }}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            required
            variant="outlined"
            fullwidth="true"
            label="Search"
            onChange={this.handleChange}
          />
        </form>
      </Paper>
    );
  }
}

export default searchBar;
