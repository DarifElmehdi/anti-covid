import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../App.css';
import { Container } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  footer: {
        // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

export default function Contact() {

  return (
    <div>
    <Container maxWidth="lg">
    <Typography component="h4" variant="h4" align="left"  gutterBottom>           
        Nous Contacter.
    </Typography>
    <div class="row">
      <div class="col-lg-12 col-lg-offset-2">
        <form id="contact-form" method="post" action="" role="form">
        <div class="messages"></div>
        <div class="controls">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="form_name">Nom</label>
                <input id="form_name" type="text" name="name" class="form-control" placeholder="Entrer votre nom" required="required" data-error="Firstname is required."/>
                <div class="help-block with-errors"></div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="form_lastname">Prenom</label>
                <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Entrer votre prénom" required="required" data-error="Lastname is required."/>
                <div class="help-block with-errors"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="form_email">Adresse email</label>
                <input id="form_email" type="email" name="email" class="form-control" placeholder="Entrer votre email" required="required" data-error="Valid email is required."/>
                <div class="help-block with-errors"></div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="form_phone">Télé</label>
                <input id="form_phone" type="tel" name="phone" class="form-control" placeholder="Entrer votre telephone"/>
                <div class="help-block with-errors"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label for="form_message">Message</label>
                <textarea id="form_message" name="message" class="form-control" placeholder="Votre message ici !" rows="4" required data-error="Please,leave us a message."></textarea>
                <div class="help-block with-errors"></div>
              </div>
            </div>
          </div>        
        </div>
        <div class="text-center">
              <input type="submit" class="btn btn-primary btn-send" value="Send message"/>
        </div>
        </form>
      </div>
    </div>
    </Container>
    </div>
  );
}
