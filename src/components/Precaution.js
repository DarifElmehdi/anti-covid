import React from "react";
import { Carousel } from "react-bootstrap";
import Button from '@material-ui/core/Button';
import { CardActionArea } from "@material-ui/core";
import {Card} from 'react-bootstrap';
import {Col} from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import {Row}  from "react-bootstrap";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ShareIcon from '@material-ui/icons/Share';
import MoreIcon from '@material-ui/icons/More';
import { CardMedia } from "@material-ui/core";
import { useState } from "react";
import '../App.css';
import config from './chatbotConfig'
import ActionProvider from './ActionProvider'
import MessageParser from './MessageParser'
import Chatbot from "react-chatbot-kit";
import Popover from '@material-ui/core/Popover';
import Rating from "@material-ui/lab/Rating";
import { Box } from "@material-ui/core";
import {ShareSocial} from 'react-share-social' ;
import { FacebookShareButton, FacebookIcon ,TwitterIcon , TwitterShareButton ,WhatsappIcon , WhatsappShareButton ,EmailIcon ,EmailShareButton} from "react-share";

const useStyles = makeStyles({
    root: {
        margin: 'auto',
        width: 200,
        display: 'flex',
        alignItems: 'center',
      },
    image : {
        padding : '10px',
    },
    card: {
        height: '100%',
        flexDirection: 'column',
    },
    button: {
        width : '100px',
        height :'50px',
        position: 'relative',
        float: 'right'
    },
    div1 : {
        margin : 'auto'
    },
    icon :{
        borderRadius : '50%',
        height: '40px',
        width : '40px'
    },
    cardmedia : {
        border : 'none',
        padding : '20px',
        height : '360px'
    },
    Col :{
    },
    title1: {
        fontSize : '4vw'
      },
      title2:{
        fontSize : '2vw'
      },
  });
    const style = {
        borderRadius: 3,
        border: 0,
        color: 'white',
        padding: '0 30px',
        position : 'end'
    };
  const labels = {
    0.5: 'Inutile',
    1: 'Inutile+',
    1.5: 'Mauvais',
    2: 'Mauvais+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Bien',
    4: 'Bien+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

export default function Precaution() {
const [showInvite = true , setValue] = useState(1);
  const [showChatbot = true , setBotVisibility] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);

  const [value, setValues] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const handleClick = (event) => {
    if(showChatbot) {
      setAnchorEl(event.currentTarget);
      setBotVisibility(false);
      setValue((true));
    }
    if(!showChatbot){
      setAnchorEl(null);
      setBotVisibility(true);
    }
    setValue((false));
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
    const classes = useStyles();
    return (
        <div>
        <Carousel controls={false} >
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="assets/precautions.jpg"
            alt="First slide"
            width="100%"
            />
            <Carousel.Caption>
            <Typography component="h1" variant="h1" align="center"  gutterBottom className={classes.title1}>           
            RESTEZ CHEZ VOUS.SAUVEZ DES VIES.
            </Typography>
            <Typography component="h1" variant="h1" align="center"  gutterBottom className={classes.title2}>           
            Maladie à coronavirus 2019 (COVID-19): conseils au grand public
            </Typography>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        
        <Container  maxWidth="lg">
        <br/>
        <div className={classes.div1}>
            <FacebookShareButton className={classes.button}
                url="http://localhost:3000/precaution">
                <FacebookIcon logoFillColor="white" className={classes.icon}/>
            </FacebookShareButton>
            <TwitterShareButton className={classes.button}
                url="http://localhost:3000/precaution">
                <TwitterIcon logoFillColor="white" className={classes.icon}/>
            </TwitterShareButton>
            <WhatsappShareButton className={classes.button}
                url="http://localhost:3000/precaution">
                <WhatsappIcon logoFillColor="white" className={classes.icon}/>
            </WhatsappShareButton>
        </div>
        <Typography component="h3" variant="h3" align="left" color="textPrimary" gutterBottom>           
            Précautions
        </Typography>
        <Row xs={1} md={3}>
            <Col>
            <Card className={classes.card}>
                <Card.Img className={classes.image}  variant="top" src="assets/img01.jpg" />
                <Card.Body>
                <Card.Title>Rester à la maison.</Card.Title>
                <Card.Text>
                La plupart des personnes atteintes de COVID-19 ont une maladie bénigne et peuvent se rétablir à la maison sans soins médicaux. Ne quittez pas votre domicile, sauf pour vous faire soigner. Ne visitez pas les lieux publics.
                </Card.Text>
                </Card.Body>
                <div className={classes.div}>
                    <Button className={classes.button} color="primary" href='https://www.who.int/fr/emergencies/diseases/novel-coronavirus-2019/advice-for-public'>
                        <MoreIcon/>
                    </Button>
                </div>
            </Card>
            </Col>
            <Col>
            <Card className={classes.card}>
                <Card.Img className={classes.image} variant="top" src="assets/img02.jpg" />
                <Card.Body>
                <Card.Title>Séparez-vous des autres personnes</Card.Title>
                <Card.Text>
                Autant que possible, restez dans une pièce spécifique et loin des autres personnes et animaux de votre maison. Si possible, vous devriez utiliser une salle de bain séparée.
                </Card.Text>
                </Card.Body>
                <div className={classes.div}>
                    <Button className={classes.button} color="primary" href='https://www.who.int/fr/emergencies/diseases/novel-coronavirus-2019/advice-for-public'>
                        <MoreIcon/>
                    </Button>
                    
                </div>
            </Card>
            </Col>
            <Col>
            <Card className={classes.card}>
                <Card.Img className={classes.image} variant="top" src="assets/img03.jpg" class="ratio ratio-16x6"/>
                <Card.Body>
                <Card.Title>Surveillez vos symptômes</Card.Title>
                <Card.Text>
                Suivez les instructions d'entretien de votre fournisseur de soins de santé et du service de santé local. Vos autorités sanitaires locales peuvent vous donner des instructions.
                </Card.Text>
                </Card.Body>
                <div className={classes.div}>
                    <Button className={classes.button} color="primary" href='https://www.who.int/fr/emergencies/diseases/novel-coronavirus-2019/advice-for-public'>
                        <MoreIcon/>
                    </Button>
                    
                </div>
            </Card>
            </Col>
            <Col>
            <Card className={classes.card}>
                <Card.Img className={classes.image} variant="top" src="assets/img04.jpg" />
                <Card.Body>
                <Card.Title>Appelez avant de consulter votre médecin</Card.Title>
                <Card.Text>
                Si vous avez un rendez-vous médical qui ne peut être reporté, appelez le bureau de votre médecin  et dites-lui que vous avez ou pourriez avoir COVID-19.
                </Card.Text>
                </Card.Body>
                <div className={classes.div}>
                    <Button className={classes.button} color="primary" href='https://www.who.int/fr/emergencies/diseases/novel-coronavirus-2019/advice-for-public'>
                        <MoreIcon/>
                    </Button>
                    
                </div>
            </Card>
            </Col>
            <Col>
            <Card className={classes.card}>
                <Card.Img className={classes.image} variant="top" src="assets/img05.jpg" />
                <Card.Body>
                <Card.Title>Faites-vous tester</Card.Title>
                <Card.Text>
                Si vous présentez des  symptômes de COVID-19 , faites - vous tester . En attendant les résultats des tests, vous restez à l'écart des autres, y compris de ceux qui vivent dans votre foyer.
                </Card.Text>
                </Card.Body>
                <div className={classes.div}>
                    <Button className={classes.button} color="primary" href='https://www.who.int/fr/emergencies/diseases/novel-coronavirus-2019/advice-for-public'>
                        <MoreIcon/>
                    </Button>
                    
                </div>
            </Card>
            </Col>
            <Col>
            <Card className={classes.card}>
                <Card.Img className={classes.image} variant="top" src="assets/img06.jpg" />
                <Card.Body>
                <Card.Title>Portez un masque sur le nez et la bouche</Card.Title>
                <Card.Text>
                Vous devez porter un masque  sur le nez et la bouche si vous devez être en présence d'autres personnes ou d'animaux, y compris des animaux domestiques (même à la maison).
                </Card.Text>
                </Card.Body>
                <div className={classes.div}>
                    <Button className={classes.button} color="primary" href='https://www.who.int/fr/emergencies/diseases/novel-coronavirus-2019/advice-for-public'>
                        <MoreIcon/>
                    </Button>
                    
                </div>
            </Card>
            </Col>
            <Col>
            <Card className={classes.card}>
                <Card.Img className={classes.image} variant="top" src="assets/img07.jpg" />
                <Card.Body>
                <Card.Title>Couvrez vos toux et éternuements</Card.Title>
                <Card.Text>
                Couvrez-vous la bouche et le nez avec un mouchoir lorsque vous toussez ou éternuez.
                Jetez les mouchoirs usagés dans une poubelle doublée.
                </Card.Text>
                </Card.Body>
                <div className={classes.div}>
                    <Button className={classes.button} color="primary" href='https://www.who.int/fr/emergencies/diseases/novel-coronavirus-2019/advice-for-public'>
                        <MoreIcon/>
                    </Button>
                    
                </div>
            </Card>
            </Col>
            <Col>
            <Card className={classes.card}>
                <Card.Img className={classes.image} variant="top" src="assets/img08.jpg" />
                <Card.Body>
                <Card.Title>Lavez-vous souvent les mains</Card.Title>
                <Card.Text>
                Lavez-vous souvent les mains à l'eau et au savon pendant au moins 20 secondes. Ceci est particulièrement important après s'être mouché, toussé ou éternué; aller a la salle de bain; et avant de manger ou de préparer des aliments.
                </Card.Text>
                </Card.Body>
                <div className={classes.div}>
                    <Button className={classes.button} color="primary" href='https://www.who.int/fr/emergencies/diseases/novel-coronavirus-2019/advice-for-public'>
                        <MoreIcon/>
                    </Button>
                    
                </div>
            </Card>
            </Col>
            <Col>
            <Card className={classes.card}>
                <Card.Img className={classes.image} variant="top" src="assets/img10.jpg" />
                <Card.Body>
                <Card.Title>Nettoyez toutes les surfaces « à contact élevé »</Card.Title>
                <Card.Text>
                Nettoyez et désinfectez les surfaces fréquemment touchées dans votre « chambre des malades » et votre salle de bain ; porter des gants jetables.
                </Card.Text>
                </Card.Body>
                <div className={classes.div}>
                    <Button className={classes.button} color="primary" href='https://www.who.int/fr/emergencies/diseases/novel-coronavirus-2019/advice-for-public'>
                        <MoreIcon/>
                    </Button>
                    
                </div>
            </Card>
            </Col>
        </Row>
        </Container>
        <br/>
        <Container  maxWidth="lg">
        <Typography component="h3" variant="h3" align="left" color="textPrimary" gutterBottom>           
            Vidéos utiles
        </Typography>
        <Row xs={12} sm={6} md={2}>
            <CardMedia  className={classes.cardmedia}
            component="iframe"
            image="https://www.youtube.com/embed/p0iOofonWqE"
            allowfullscreen/>
            <CardMedia  className={classes.cardmedia}
            component="iframe"
            image="https://www.youtube.com/embed/t0Lwij6CbaU"
            />
            <CardMedia  className={classes.cardmedia}
            component="iframe"
            image="https://www.youtube.com/embed/oN-PvqU9Lhk"
            />
            <CardMedia  className={classes.cardmedia}
            component="iframe"
            image="https://www.youtube.com/embed/rAj38E7vrS8"
            />
        </Row>
        </Container>

        {
            showInvite?
            <div class="pop-invite">Discuter avec covibot !<div class="pop-invite-arrow"></div>
            </div>
            :null
        }
        
        <button class="app-chatbot-button" aria-describedby={id} onClick={handleClick}>
            <svg viewBox="0 0 640 512" class="app-chatbot-button-icon">
            <path d="M192,408h64V360H192ZM576,192H544a95.99975,95.99975,0,0,0-96-96H344V24a24,24,0,0,0-48,0V96H192a95.99975,95.99975,0,0,0-96,96H64a47.99987,47.99987,0,0,0-48,48V368a47.99987,47.99987,0,0,0,48,48H96a95.99975,95.99975,0,0,0,96,96H448a95.99975,95.99975,0,0,0,96-96h32a47.99987,47.99987,0,0,0,48-48V240A47.99987,47.99987,0,0,0,576,192ZM96,368H64V240H96Zm400,48a48.14061,48.14061,0,0,1-48,48H192a48.14061,48.14061,0,0,1-48-48V192a47.99987,47.99987,0,0,1,48-48H448a47.99987,47.99987,0,0,1,48,48Zm80-48H544V240h32ZM240,208a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,240,208Zm160,0a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,400,208ZM384,408h64V360H384Zm-96,0h64V360H288Z">
            </path>
            </svg>
        </button>
        <Popover id={id} open={open} anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'left', }} transformOrigin={{ vertical: 'bottom', horizontal: 'right',}}  >
            <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
            <div className={classes.root}>
            <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                setValues(newValue);
                }}
                onChangeActive={(event, newHover) => {
                setHover(newHover);
                }}
            />
            {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
            </div>
        </Popover>
        </div>
    )
}

