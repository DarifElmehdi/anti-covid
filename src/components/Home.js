import React from "react";
import { Carousel,Image, Col} from "react-bootstrap";

export default function Home() {
    return (
    <div>
    <Carousel fade>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="assets/pic00.jpg"
        alt="First slide"
        width="100%"
        />
        <Carousel.Caption>
        <h2>Stop Coronavirus</h2>
        <p>Ensemble, combattons le coronavirus.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="assets/pic01.jpg"
        alt="Second slide"
        width="100%"
        />

        <Carousel.Caption>
        <h2>Restez à la maison, Restez en sécurité</h2>
        <p>Pour vous protéger et protéger les autres, restez chez vous.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="assets/pic02.jpg"
        alt="Third slide"
        width="100%"
        />

        <Carousel.Caption>
        <h2>Portez un masque</h2>
        <p>Pour limiter la transmission des virus respiratoires et protéger vos proches.</p>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
    <br/>
    <br/>
    <h3> Notre Equipe</h3>
    <br/>
    <div class="container marketing">
    <div class="row">
      <div class="col-lg-4">
        <Col>
            <Image src="assets/darif.jpg" roundedCircle height="200" width="200"/>
        </Col> 
        <h3>Darif Elmehdi</h3>
        <p>Etudiant Ingenieur à l'ENSIAS</p>
        <p><a class="btn btn-secondary" href="/#">Contact</a></p>
      </div>
      <div class="col-lg-4">
        <Col>
            <Image  src="assets/benhidi.jpg" roundedCircle height="200" width="200" />
        </Col> 
        <h3>Mr. Mohammed Benhidi</h3>
        <p>Computer Scientist chez MKDEV</p>
        <p><a class="btn btn-secondary" href="/#">Contact</a></p>
      </div>
      <div class="col-lg-4">
        <Col>
            <Image  src="assets/elfkihi.jpg" roundedCircle height="200" width="200"/>
        </Col> 
        <h3>Mme. Sanaa EL FKIHI</h3>
        <p>Professeur Habilité à l'ENSIAS</p>
        <p><a class="btn btn-secondary" href="/#">Contact</a></p>
      </div>
    </div>
    </div>
    <br/>
    <br/>

    </div>
    )
}