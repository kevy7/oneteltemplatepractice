import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import styles from './GalleryComponent.module.css';
//import { Container, Row, Col} from 'react-bootstrap';

const GalleryComponent = () => {

    return (
        <div className={styles.galleryComponent}>
            <Container>
                <Row>
                    <Col xs={6} sm={6} md={4} style={{ padding: '0px' }}>
                        <img className={styles.image} src="https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                    </Col>
                    <Col xs={6} sm={6} md={4} style={{ padding: '0px' }}>
                        <img className={styles.image} src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                    </Col>
                    <Col xs={6} sm={6} md={4} style={{ padding: '0px' }}>
                        <img className={styles.image} src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                    </Col>

                    <Col xs={6} sm={6} md={3} style={{ padding: '0px' }}>
                        <img className={styles.image} src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                    </Col>
                    <Col xs={6} sm={6} md={3} style={{ padding: '0px' }}>
                        <img className={styles.image} src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                    </Col>
                    <Col xs={6} sm={6} md={3} style={{ padding: '0px' }}>
                        <img className={styles.image} src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                    </Col>
                    <Col xs={12} sm={12} md={3} style={{ padding: '0px' }}>
                        <img className={styles.image} src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default GalleryComponent;