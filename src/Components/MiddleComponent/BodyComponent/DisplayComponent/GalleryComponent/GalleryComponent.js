import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import styles from './GalleryComponent.module.css';
//import { Container, Row, Col} from 'react-bootstrap';

const GalleryComponent = () => {
    return (
        <div className={styles.galleryComponent}>
            <Container>
                <Row>
                    <Col xs={6} sm={6} md={4}>
                        <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Italian Trulli" />
                    </Col>
                    <Col xs={6} sm={6} md={4}>2 of 2</Col>
                    <Col xs={6} sm={6} md={4}>2 of 2</Col>

                    <Col xs={6} sm={6} md={3}>1 of 3</Col>
                    <Col xs={6} sm={6} md={3}>2 of 3</Col>
                    <Col xs={6} sm={6} md={3}>3 of 3</Col>
                    <Col xs={12} sm={6} md={3}>3 of 3</Col>
                </Row>
        </Container>
        </div>
    )
}

export default GalleryComponent;