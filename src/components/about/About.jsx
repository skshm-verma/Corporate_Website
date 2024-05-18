import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';


import img1 from '../../assets/images/img1.jpg'

const About = () => {
    const html = 80
    const responsive = 95
    const photoshop = 60
    return (
        <section id='about' className='block about-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>About Us</h2>
                <div className='subtitle'>Learn more about us</div>
                </div>
                <Row>
                    <Col sm={6}><Image src={img1} /></Col>
                    <Col sm={6}>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur molestiae, magni nesciunt voluptates voluptatibus unde omnis quam libero officiis assumenda, rem placeat, accusamus facere odit.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur molestiae, magni nesciunt voluptates voluptatibus unde omnis quam libero officiis assumenda, rem placeat, accusamus facere odit.</p>

                        <div className='progress-block'>
                            <h4>HTML / CSS / JAVASCRIPT</h4>
                            <ProgressBar now={html} label={`${html}%`} />
                        </div>
                        <div className='progress-block'>
                            <h4>RESPONSIVE</h4>
                            <ProgressBar now={responsive} label={`${responsive}%`} />
                        </div>
                        <div className='progress-block'>
                            <h4>PHOTOSHOP</h4>
                            <ProgressBar now={photoshop} label={`${photoshop}%`} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About
