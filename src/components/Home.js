import React, {useState}from "react";
import { Carousel,Image, Col} from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import config from './chatbotConfig'
import ActionProvider from './ActionProvider'
import MessageParser from './MessageParser'
import Chatbot from "react-chatbot-kit";
import Popover from '@material-ui/core/Popover';
import { tsConstructorType } from "@babel/types";
import About from "./About";
import '../App.css';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import { Row } from "react-bootstrap";
import {Card} from 'react-bootstrap';

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

const useStyles = makeStyles({
  root: {
    margin: 'auto',
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
  title1: {
    fontSize : '6vw'
  },
  title2:{
    fontSize : '4vw'
  },
  cardmedia : {
    backgroundColor : '#fafafa',
    border : 'none',
    height : '400px',
    padding : '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
},
});
export default function Home() {
  const [showInvite = true , setValue] = useState(1);
  const [showChatbot = true , setBotVisibility] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);

  const [value, setValues] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

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
    return (
    <div>
    <Carousel className={classes.carousel}>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="assets/pic00.jpg"
        alt="First slide"
        width="100%"
        />
        <Carousel.Caption>
        <Typography component="h1" variant="h1" align="center"  gutterBottom className={classes.title1} >           
          Stop Coronavirus
        </Typography>
        <Typography component="h1" variant="h1" align="center"  gutterBottom className={classes.title2}>           
          Ensemble, combattons le coronavirus.
        </Typography>
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
        <Typography component="h1" variant="h1" align="center"  gutterBottom className={classes.title1}>           
          Restez ?? la maison
        </Typography>
        <Typography component="h1" variant="h1" align="center"  gutterBottom className={classes.title2}>           
        Pour vous prot??ger et prot??ger les autres, restez chez vous.
        </Typography>
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
        <Typography component="h1" variant="h1" align="center"  gutterBottom className={classes.title1}>           
          Portez vos masques
        </Typography>
        <Typography component="h1" variant="h1" align="center"  gutterBottom className={classes.title2}>           
        Pour limiter la transmission des virus respiratoires et prot??ger vos proches.
        </Typography>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
    <br/>
    <br/>
    <Container  maxWidth="lg" className={classes.Container}>
        <Row sm={6} md={2}>
            <Card className={classes.cardmedia}>
            <Typography component="h5" variant="h4" align="left" color="textPrimary" gutterBottom >           
              "Sans confinement, on ne pourra pas mettre fin ?? l'??pid??mie du coronavirus"
            </Typography>
            <Typography component="h5" variant="h4" align="left" color="textPrimary" gutterBottom>           
              "Le coronavirus est un ennemi invisible"
            </Typography>
            </Card>
            <CardMedia  className={classes.cardmedia}
            component="iframe"
            image="https://www.youtube.com/embed/0k7wEwtWAns"
            />
        </Row>
     </Container>

    <About/>
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