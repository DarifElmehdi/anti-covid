import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    border: '1px solid #A9BCD0',
    borderRadius : '50%' ,
    height : '300px',
    width : '300px',
    margin : 'auto'
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="lg">
            <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>
            À propos
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            AntiCovid est une application web qui permet la sensibilisation des personnes par la dangerosité du covid-19 et ainsi l’importance de respecter les mesures de précautions.
            L'application sera aussi un outil de réclamation des cas suspects qui porte les symptômes de covid-19.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>           
            Notre équipe
          </Typography>
          <br/>
          <br/>
          <Grid container spacing={8}>
              <Grid item key={1} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="assets/darif.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      DARIF Elmehdi
                    </Typography>
                    <Typography>
                     Elève ingénieur (ENSIAS) - Genie Logiciel.
                    </Typography>
                    <Typography>
                     En Stage PFE.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button color="primary">
                      <LinkedInIcon/>
                    </Button>
                    <Button color="primary">
                      <EmailIcon/>
                    </Button>
                    <Button color="primary">
                      <GitHubIcon/>
                    </Button>
                    <Button color="primary">
                      <FacebookIcon/>
                    </Button>
                    <Button color="primary">
                      <TwitterIcon/>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item key={2} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="assets/elfkihi.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Mme Sanaa EL FKIHI
                    </Typography>
                    <Typography>
                    Professeur Habilité (ENSIAS) - Département Génie logiciel.
                    </Typography>
                    <Typography>
                    Encadrante Interne.
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button color="primary">
                      <LinkedInIcon/>
                    </Button>
                    <Button color="primary">
                      <EmailIcon/>
                    </Button>
                    <Button color="primary">
                      <GitHubIcon/>
                    </Button>
                    <Button color="primary">
                      <FacebookIcon/>
                    </Button>
                    <Button color="primary">
                      <TwitterIcon/>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item key={3} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="assets/benhidi.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Mr Mohamed BENHIDI
                    </Typography>
                    <Typography>
                        Computer Scientist et Dévloppeur (MKDEv - Maroc).
                    </Typography>
                    <Typography>
                        Encadrant Externe.
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button color="primary">
                      <LinkedInIcon/>
                    </Button>
                    <Button color="primary">
                      <EmailIcon/>
                    </Button>
                    <Button color="primary">
                      <GitHubIcon/>
                    </Button>
                    <Button color="primary">
                      <FacebookIcon/>
                    </Button>
                    <Button color="primary">
                      <TwitterIcon/>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}