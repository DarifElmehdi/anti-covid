/*https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#00030720-fae3-4c72-8aea-ad01ba17adf8*/
import React, { useState, useEffect }from "react";
import axios from 'axios';

import styled from 'styled-components'
import DataTable from 'react-data-table-component';
import { Container } from "@material-ui/core";

export default function Statistiques() {    
    const [stats, setStats] = useState([])
    
    useEffect(() => {
        fetch("https://api.covid19api.com/summary")
          .then(resp => resp.json())
          .then(resp => {
            setStats(resp['Countries'])
          })
      }, [])
    console.log(stats)
    //const data =   [{ country_name: "A", region: "", cases: "1", new_deaths: "44", deaths: "3", serious_critical: "1", active_cases: "566", total_recovered: "56", total_cases_per_1m_population: "33" }, { country_name: "B", region: "", cases: "2", new_deaths: "44", deaths: "3", serious_critical: "233", active_cases: "566", total_recovered: "56", total_cases_per_1m_population: "33" }, { country_name: "C", region: "", cases: "3", new_deaths: "44", deaths: "3", serious_critical: "233", active_cases: "566", total_recovered: "86", total_cases_per_1m_population: "33" }, { country_name: "D", region: "", cases: "4", new_deaths: "44", deaths: "3", serious_critical: "233", active_cases: "566", total_recovered: "86", total_cases_per_1m_population: "33" }]

    const columns = [{
        selector: 'Country',
        name: 'Pays',
        sortable: true,
        style: {
            fontSize: '1em',
            fontWeight: 'bold'
        },
    }, {
        selector: 'TotalConfirmed',
        name: 'Total confirmé',
        sortable: true,
    },{
        selector: 'NewConfirmed',
        name: 'Nouveau confirmé',
        sortable: true,
    },{
        selector: 'TotalDeaths',
        name: 'Total de décès',
        sortable: true,
    }, {
        selector: 'NewDeaths',
        name: 'Nouveaux décès',
        sortable: true,
    }, {
        selector: 'TotalRecovered',
        name: 'Total Rétablie',
        sortable: true,
    }, {
        selector: 'NewRecovered',
        name: 'Nouveaux Rétablies',
        sortable: true,
    }];


    const [filterText, setFilterText] = useState('');
    const handleFilterChange = (event) => {
        setFilterText(event.target.value)
    }
    const handleClear = () => {
        if (filterText) {
            setFilterText('');
        }
    };

    const filteredItems = stats.filter(item => item.Country && item.Country.toLowerCase().includes(filterText.toLowerCase()));
    return (
        <Container maxWidth="mx">
            <div class="input-group mb-3 mt-5">
                <input class="form-control" id="search" type="text" placeholder="Chercher une pays" value={filterText} onChange={handleFilterChange} />
                <div class="input-group-append">
                    <button type="button" onClick={handleClear} class="btn btn-outline-secondary">Reset</button>
                </div>
            </div>
            <DataTable
                keyField="id"
                columns={columns}
                data={filteredItems}
                striped

                fixedHeader
            />
        </Container>
    )  
}