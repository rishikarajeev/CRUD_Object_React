import React, { Component } from "react";
import BottomNav from '../Footer/BottomNav'
import Nav from "../Header/Nav";
import "../../assets/css/style.css"

export default class HomePage extends Component {
  render() {
    return (
      <div class="row">
        <div className="HomePage">
          <Nav />
        </div>
        <BottomNav />
      </div>
    );
  }
}
