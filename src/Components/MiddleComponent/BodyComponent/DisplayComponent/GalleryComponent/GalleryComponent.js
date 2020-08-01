import React from 'react';
import styles from './GalleryComponent.module.css';
import { Container, Row, Col} from 'react-bootstrap';

const GalleryComponent = () => {
    return (
        <div className={styles.galleryComponent}>
            <Container>
                <Row>
                    <Col>1 of 3</Col>
                    <Col xs={6}>2 of 3 (wider)</Col>
                    <Col>3 of 3</Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col xs={5}>2 of 3 (wider)</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        </div>
    )
}

export default GalleryComponent;