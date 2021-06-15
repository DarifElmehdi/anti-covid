import React from "react";
import { Component } from "react";

import { Typography ,CardContent,Container,Card ,Grid} from "@material-ui/core";

export default class Statistiques extends Component {
    state = {
        loading : true ,
        todayStats : null,
        today : null
    };
    getDate(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;
        this.setState({today : today});
        return today;
    }
    async componentDidMount() {
        const today = this.getDate();
        const url = "https://api.covid19tracking.narrativa.com/api/"+today+"/country/morocco";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({todayStats : data});
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
    render() {
      return (
        <Container>
          <br/>
          <br/>
            <Grid container item xs={12} spacing={1}>
              <Card variant="outlined">
                  <CardContent>
                    <Typography
                      color="textSecondary"
                      gutterBottom>
                      Total confirmés
                    </Typography>
                    <Typography variant="body2" component="p">
                      123456
                    </Typography>
                  </CardContent>
                </Card>
                <Card variant="outlined">
                  <CardContent>
                    <Typography
                      color="textSecondary"
                      gutterBottom
                    >
                otal de décès
                    </Typography>
                    <Typography variant="body2" component="p">
                      123564
                    </Typography>
                  </CardContent>
                </Card>
                <Card variant="outlined">
                  <CardContent>
                    <Typography
                      color="textSecondary"
                      gutterBottom
                    >
                      Total confirmés
                    </Typography>
                    <Typography variant="body2" component="p">
                      123564
                    </Typography>
                  </CardContent>
                </Card>
            </Grid>
        </Container>
      )
    }
}