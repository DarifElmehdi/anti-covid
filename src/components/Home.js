import React from "react";
import { Carousel,Image, Col} from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import config from './chatbotConfig'
import ActionProvider from './ActionProvider'
import MessageParser from './MessageParser'
import Chatbot from "react-chatbot-kit";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function Home() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

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
    <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
      Open Popover
    </Button>
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
    </Popover>
    <br/>
    <br/>

    </div>
    )
}