import React from "react";
import { Component } from "react";
import { Carousel } from "react-bootstrap";

export default class Statistiques extends Component {
    state = {
        loading : true
    };
    async componentDidMount() {
        const today = this.getDate();
        const url = "https://api.covid19tracking.narrativa.com/api/"+today+"/country/morocco";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.dates[today].countries.Morocco);
        const name = data.dates[today].countries.Morocco.name;
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
        const yesterday_recovered = data.dates[today].countries.Morocco.yesterday_recovered;
    }
    getDate(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;
        return today;
    }
    render() {
        return (
            <p>
                Statistiques
            </p>
        )
    }
}