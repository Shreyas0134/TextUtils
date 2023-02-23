import React from 'react';
import { Carousel } from 'react-bootstrap';

const About = () => {
  return (
    <div className="container my-5">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                className="card-img-top"
                src="https://via.placeholder.com/150"
                alt="Team member"
              />
              <div className="card-body">
                <h5 className="card-title">John Doe</h5>
                <p className="card-text">Developer</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                className="card-img-top"
                src="https://via.placeholder.com/150"
                alt="Team member"
              />
              <div className="card-body">
                <h5 className="card-title">Jane Smith</h5>
                <p className="card-text">Designer</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                className="card-img-top"
                src="https://via.placeholder.com/150"
                alt="Team member"
              />
              <div className="card-body">
                <h5 className="card-title">Bob Johnson</h5>
                <p className="card-text">Marketer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;