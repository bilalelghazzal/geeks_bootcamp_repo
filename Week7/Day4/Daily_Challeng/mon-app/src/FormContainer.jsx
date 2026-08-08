import React, { Component } from "react";
import FormUser from "./FormUser";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      nutsFree: false,
      lactoseFree: false,
      isVegan: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value, name, type, checked } = event.target;
    if (type === "checkbox") {
      this.setState({ [name]: checked });
    } else {
      this.setState({ [name]: value });
    }
  }

  render() {
    return <FormUser handleChange={this.handleChange} {...this.state} />;
  }
}

export default FormContainer;
