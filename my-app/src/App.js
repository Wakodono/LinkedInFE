import "bootstrap/dist/css/bootstrap.min.css";
import TopNavbar from "./components/TopNavbar";
import BottomFooter from "./components/BottomFooter";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/SideBar";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profilejumbotron from "./components/Profilejumbotron";
import ExperienceLI from "./components/ExperienceLI";
import Skills from "./components/Skills";
import Activity from "./components/Activity";
import Interests from "./components/Interests";

import { BrowserRouter as Router, Route } from "react-router-dom";

const ProfileView = () => (
  <Container>
    <Row>
      <Col md={8}>
        <Profilejumbotron />
        <Activity />
        <ExperienceLI />
        <Interests/>
        <Skills />
        <Interests />
      </Col>
      <Col md={4}>
        <Sidebar />
      </Col>
    </Row>
  </Container>
);

function App() {
  return (
    <>
      <Router>
        <TopNavbar />
        <Route path="/user/:id" component={ProfileView} />

        <BottomFooter />
      </Router>
    </>
  );
}

export default App;


