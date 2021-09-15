import React from "react";
import Chatbot from "react-chatbot-kit";
import { Row , Col} from "react-bootstrap";
import config from './chatbotConfig'
import ActionProvider from './ActionProvider'
import MessageParser from './MessageParser'
import Header from "./Header";
import { Container } from "@material-ui/core";
export default function Chat() {
    return (
        <Container style={{ width : '100%'}}>
            <Row>
                <Col xs={6} style={{ backgroundImage: `url(assets/side-banner.jpg)` }}> 
                </Col>
                <Col xs={6}>
                    <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
                </Col>
            </Row>
        </Container>        
    )
}
