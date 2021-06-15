import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function getDate(){
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;
  return today;
}
async function componentDidMount() {
  const today = getDate();
  const url = "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases2_v1/FeatureServer/2/query?where=1%3D1&outFields=OBJECTID,Country_Region,Last_Update,Confirmed,Recovered,Active,Incident_Rate,People_Tested,People_Hospitalized,Mortality_Rate,Deaths&outSR=4326&f=json";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);


  /*const name = data.dates[today].countries.Morocco.name;
  const today_confirmed = data.dates[today].countries.Morocco.today_confirmed;
  const today_deaths = data.dates[today].countries.Morocco.today_deaths;
  const today_new_confirmed = data.dates[today].countries.Morocco.today_new_confirmed;
  const today_new_deaths = data.dates[today].countries.Morocco.today_new_deaths;
  const today_new_open_cases = data.dates[today].countries.Morocco.today_new_open_cases;
  const today_new_recovered = data.dates[today].countries.Morocco.today_new_recovered;
  const today_open_cases = data.dates[today].countries.Morocco.today_open_cases;
  const today_recovered = data.dates[today].countries.Morocco.today_recovered;
  const today_vs_yesterday_confirmed = data.dates[today].countries.Morocco.today_vs_yesterday_confirmed;
  const today_vs_yesterday_deaths = data.dates[today].countries.Morocco.today_vs_yesterday_deaths;
  const today_vs_yesterday_open_cases = data.dates[today].countries.Morocco.today_vs_yesterday_open_cases;
  const today_vs_yesterday_recovered = data.dates[today].countries.Morocco.today_vs_yesterday_recovered;
  const yesterday_confirmed = data.dates[today].countries.Morocco.yesterday_confirmed;
  const yesterday_deaths = data.dates[today].countries.Morocco.yesterday_deaths;
  const yesterday_open_cases = data.dates[today].countries.Morocco.yesterday_open_cases;
  const yesterday_recovered = data.dates[today].countries.Morocco.yesterday_recovered;*/
}

export default function Statistiques() {
  const classes = useStyles();
  componentDidMount();
  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Total de cas
                </Typography>
                <Typography variant="body2" component="p">
                  123564
                </Typography>
              </CardContent>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Total de décès
                </Typography>
                <Typography variant="body2" component="p">
                  1234
                </Typography>
              </CardContent>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Total récupéré
                </Typography>
                <Typography variant="body2" component="p">
                  123564
                </Typography>
              </CardContent>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Cas actifs
                </Typography>
                <Typography variant="body2" component="p">
                  123564
                </Typography>
              </CardContent>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Nouveaux cas
                </Typography>
                <Typography variant="body2" component="p">
                  0
                </Typography>
              </CardContent>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Nouveaux décès
                </Typography>
                <Typography variant="body2" component="p">
                  123564
                </Typography>
              </CardContent>
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <Container>
    <br/>
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
    </Container>

  );
}