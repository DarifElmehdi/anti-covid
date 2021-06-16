import React, {useState}from "react";
import { Carousel,Image, Col} from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';

import config from './chatbotConfig'
import ActionProvider from './ActionProvider'
import MessageParser from './MessageParser'
import Chatbot from "react-chatbot-kit";
import Popover from '@material-ui/core/Popover';
import { tsConstructorType } from "@babel/types";

export default function Home() {
  const [showInvite = true , setValue] = useState(1);
  const [showChatbot = true , setBotVisibility] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    if(showChatbot) {
      setAnchorEl(event.currentTarget);
      setBotVisibility(false);
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
      {
        showInvite?
        <div class="pop-invite">You have a question ? ask me !
        <div class="pop-invite-arrow"></div>
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
      </Popover>
    </div>
    )
}