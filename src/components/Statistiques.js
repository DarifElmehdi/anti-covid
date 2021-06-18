import React, { useState, useEffect }from "react";
import moment from 'moment';

import emailjs from 'emailjs-com'
import styled from 'styled-components'
import DataTable from 'react-data-table-component';
import { Container ,Popover } from "@material-ui/core";
import { data } from "jquery";

import '../App.css'
export default function Statistiques() {    
    const [showInvite = true , setValue] = useState(1);
    const [showChatbot = true , setBotVisibility] = useState(1);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        if(showChatbot) {
        setAnchorEl(event.currentTarget);
        setBotVisibility(false);
        setValue((true));
        }
        if(!showChatbot){
        setAnchorEl(null);
        setBotVisibility(true);
        }
        setValue((false));
    };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
    const [stats, setStats] = useState([])
    const [global, setGlobal] = useState([])
    useEffect(() => {
        fetch("https://api.covid19api.com/summary")
          .then(resp => resp.json())
          .then(resp => {
            setStats(resp['Countries']); 
            setGlobal(resp['Global']);
            
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
    function getSpecificData(country){
        for (var i=0; i < stats.length ; i++) {
            if (stats[i].Country == country){
                return stats[i];
            }
        }
    }

    function sendEmail(e) {
        e.preventDefault();
        const myStat = getSpecificData(e.target[2].value)
        emailjs.send("service_lpapieb","template_3q8g3n7",{
            to_name: e.target[1].value,
            to_email: e.target[0].value,
            country: e.target[2].value,
            T_confirmed: myStat['TotalConfirmed'],
            N_confirmed: myStat['NewConfirmed'],
            T_deaths: myStat['TotalDeaths'],
            N_deaths: myStat['NewDeaths'],
            T_recovered: myStat['TotalRecovered'],
            N_recovred: myStat['NewRecovered'],
            G_confirmed: global['TotalConfirmed'],
            G_Deaths: global['TotalDeaths'],
            G_recovred: global['TotalRecovered'],
            },'user_vhbUORBjgpIWhEFgIeb4W')

    //emailjs.sendForm('service_lpapieb', 'template_3q8g3n7',e.target, 'user_vhbUORBjgpIWhEFgIeb4W')
        .then((result) => {
            console.log(result.text);
            handleClick();
            alert("Email envoyer !")
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    const filteredItems = stats.filter(item => item.Country && item.Country.toLowerCase().includes(filterText.toLowerCase()));
    const date = getDate();
    return (
        <div>
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
        {
            showInvite?
            <div class="pop-invite">Envoyer Statistiques par mail !
            <div class="pop-invite-arrow"></div>
            </div>
            :null
        }
        
        <button class="app-email-button" aria-describedby={id} onClick={handleClick}>
            <img src="assets/sendMail.jpg" style={{width : 55,padding : 5}} />
        </button>
        <Popover id={id} open={open} anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'left', }} transformOrigin={{ vertical: 'bottom', horizontal: 'right',}}  >
            <div className="container">
                <h2 className="card-title" style={{ fontSize: '1.9em' , margin :20 }}>Envoyer Statistiques </h2>
                <form onSubmit={sendEmail}>
                        <div className="form-group mx-auto justify-content">
                            <input type="email" className="form-control" placeholder="Email Address" name="to_email"/>
                        </div>
                        <div className="form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Nom et Prénom" name="to_name"/>
                        </div>
                        <div className=" form-group mx-auto">
                            <select type="text" className="form-control" placeholder="Pays" name="ountry">
                            {
                                stats.map(item => <option value={item.Country}>{item.Country}</option>)
                            }
                            </select>
                        </div>
                        <div className="pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" id="liveToastBtn" value="Envoyer"></input>
                        </div>
                </form>
                <br/>
            </div>
        </Popover>
        </div>
    )  
}