import React from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Card,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FcBookmark } from 'react-icons/fc'

export default function FeedLeftSide() {
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchProfile();
  }, []);

//   useEffect(() => {
//     fetchProfile();
//   }, [params.id]);

  const fetchProfile = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/me`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZTMxY2E4OTBjYzAwMTVjZjA3YzkiLCJpYXQiOjE2MzM5MzYxNTcsImV4cCI6MTYzNTE0NTc1N30.cQb5Rq2bVKtljqwRew41uKAJ7AUi3fQitiFeytDaAgQ",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setData(data);
      } else {
        console.log("Something went wrong with the PROFILE request");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col xs={6} md={4}>
          <Card className="mainBox">
            <Card.Img className="img-fluid" variant="top" src="https://picsum.photos/203/54?grayscale" />
            <Card.Body className=" cardProfile 
">
                <img className="imgUser imgProfileSidebar" src={data.image} alt="" />
              <Card.Title style = {{color: "black"}}><p>{data.name} {data.surname}</p></Card.Title>
              <Card.Text>
                {data.title}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Who viewed your profile </ListGroupItem>
              <ListGroupItem>Views of your post</ListGroupItem>
              <ListGroupItem>Access exclusive tools & insights</ListGroupItem>
              <ListGroupItem className="font-weight-bold" style = {{color: "black"}}><FcBookmark />Try Premium for free</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
          </Card>
          {/* <h1>SIDEBAR PENDING...</h1> */}
          {/* <img src="https://picsum.photos/300/300" alt="placeholder banner" /> */}
        </Col>
      </Row>
    </Container>
  );
}
