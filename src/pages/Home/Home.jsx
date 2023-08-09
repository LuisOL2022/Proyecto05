import { useContext } from 'react';
import { Carousel, Container, Card, Row, Col } from 'react-bootstrap';
import UserContext from '../../contexts/user/UserContext.jsx';
import "./home.css"

export function Home() {
    const userCtx = useContext(UserContext)
    const { user, verifyingToken, authStatus } = userCtx

    return (
        <Container>
            <Container className='carrusel py-3'>
                <h1>{` ${user?.fullName || ""}`}</h1>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2019/09/uncharted-4.jpg?tf=3840x"
                            alt="First slide"
                            height="500px"
                        
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://assets.xboxservices.com/assets/02/32/0232e424-c004-426c-9ca0-ebb47ac60274.jpg?n=Game-Hub_Content-Placement-0_029482443_788x444.jpg"
                            alt="Second slide"
                            height="500px"
                        
                        />

                        <Carousel.Caption>
                        <h3 className='bg-primary'>xbox  </h3>
                        <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://storage.googleapis.com/public.ioio.mx/1024x1024/4b09b92d04f04cdd99ecaf806aa67e28.webp"
                            alt="Third slide"
                            height="500px"
                            
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>

            <Container className='cards py-3 m-md-auto'>
                <h2>Destacados</h2>
                <Row>
                    <Col>
                        <Card className="card-tarjeta">
                            <Card.Body>
                            <Card.Img variant="top" src="https://juegosdigitaleschile.com/files/images/thumbs/productos_300x400_1622823523-crash-bandicoot-4-its-about-time-ps4.jpg" />
                                <Card.Title>Juegos de playstation 4 y 5</Card.Title>
                                <Card.Text>
                                Los mejores juegos de playstation aca podras encontrarlos.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                            <Card.Img variant="top" src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1676380949-41W9CRYlx6L._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*" />
                                <Card.Title>Juegos de xbox serie s</Card.Title>
                                <Card.Text className='card-text'>
                                Amplio catalogo de xbox tanto fisico como virtual.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                            <Card.Img variant="top" src="https://imagenes.elpais.com/resizer/2rSNE0URbOppybb8MvSqL3pOxhE=/980x980/cloudfront-eu-central-1.images.arcpublishing.com/prisa/2CJQNYG32RAGXJYXG5CTYLNWO4.png" />
                                <Card.Title>Juegos de nintendo switch</Card.Title>
                                <Card.Text>
                                    Lo mas nuevo en nintendo switch aqui lo encontraras.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}





