/*https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#00030720-fae3-4c72-8aea-ad01ba17adf8*/
import React, { useState, useEffect }from "react";
import axios from 'axios';
import moment from 'moment';

import styled from 'styled-components'
import DataTable from 'react-data-table-component';
import { Container } from "@material-ui/core";

export default function Statistiques() {    
    const [stats, setStats] = useState([])
    const [global, setGlobal] = useState([])
    useEffect(() => {
        fetch("https://api.covid19api.com/summary")
          .then(resp => resp.json())
          .then(resp => {
            setStats(resp['Countries']); setGlobal(resp['Global']);
            
          })
      }, [])
    function getDate(){
        return moment().format("DD/MM/YYYY HH:mm:ss");
    }

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
        name: 'Total confirmés',
        sortable: true,
    },{
        selector: 'NewConfirmed',
        name: 'Nouveau confirmés',
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
        name: 'Total Rétablies',
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
    const date = getDate();
    return (
        <Container maxWidth="mx">
            <br/>
            <div class="row">
                <div class="col">
                    <div className="card shadow-md">
                        <div className="card-body bg-info text-center">
                            <p className="lead">Total confirmés</p>
                            <h3 className="card-title" style={{ fontSize: '2.2em' }}>{global['TotalConfirmed']} </h3>
                            
                        </div>
                        <div className="card-footer">
                            <small>MAJ: {date}</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div className="card shadow-md">
                        <div className="card-body bg-danger text-center">
                            <p className="lead">Total de décès</p>
                            <h3 className="card-title" style={{ fontSize: '2.2em' }}>{global['TotalDeaths']} </h3>
                        </div>
                        <div className="card-footer">
                            <large>MAJ: {date}</large>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div className="card shadow-md">
                        <div className="card-body bg-success text-center">
                            <p className="lead">Total Rétablies</p>
                            <h3 className="card-title" style={{ fontSize: '2.2em' }}>{global['TotalRecovered']} </h3>
                        </div>
                        <div className="card-footer">
                            <small>MAJ: {date}</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div className="card shadow-md">
                        <div className="card-body bg-warning text-center">
                            <p className="lead">Nouveaux confirmés</p>
                            <h3 className="card-title" style={{ fontSize: '2.2em' }}>{global['NewConfirmed']} </h3>
                        </div>
                        <div className="card-footer">
                            <small>MAJ: {date}</small>
                        </div>
                    </div>
                </div>
            </div>
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