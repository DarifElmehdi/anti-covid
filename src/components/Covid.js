import React from "react";
import { Card ,Image} from "react-bootstrap";
import {Container,Typography} from "@material-ui/core";

export default function Covid() {
    return (
        <div>
        <Image src="assets/banner.jpg" alt="Card image" width="100%"/>
        <div className="text-white">
            <Card.ImgOverlay>
                <br/>
                <br/>
                <h1 class="text-left">COVID-19 CoronaVirus</h1>
                <Typography variant="h3">Maladie respiratoire émergente apparue en Chine fin 2019 avant de diffuser 
                dans le monde entier, la covid 19 est causée par un coronavirus, le SARS-CoV-2.
                </Typography>
                <br/>
                <h4 class="text-left">Covid-19 c'est quoi exactement ? ce qu'il faut savoir.</h4>
            </Card.ImgOverlay>
        </div>
        <Container maxWidth="mx">
        <br/>
        <div class="row featurette">
        <div class="col-md-8">
            <h2 class="featurette-heading text-left">Qu’est-ce que la COVID-19?</h2>
            <p class="lead text-justify">Covid-19 fait référence à « Coronavirus Disease 2019 », la maladie provoquée par un virus de la famille des Coronaviridae,le SARS-CoV-2. Cette maladie infectieuse est une zoonose, dont l'origine est encore débattue, qui a émergé en décembre 2019 dans la ville 
            de Wuhan, dans la province du Hubei en Chine. Elle s'est rapidement propagée, d'abord dans toute la Chine, puis à l'étranger provoquant une épidémie mondiale.
            <br/>
            Le Covid-19 est une maladie respiratoire pouvant être mortelle chez les patients fragilisés par l'âge ou une autre maladie chronique.Elle se transmet par contact rapproché avec des personnes infectées. La maladie pourrait aussi être transmise par des patients 
            asymptomatiques mais les données scientifiques manquent pour en attester avec certitude.</p>
            </div>
        <div class="col-md-4 text-center">
        <Image src="assets/covid01.jpg" width="80%"/> 
        </div>
        </div>
        <br/>
        <div>
        <h2 class="featurette-heading text-left">Comment le virus "COVID-19" se transmet-il d’une personne à l’autre ?</h2>
            <p class="lead text-justify">
            Nous savons que la COVID-19 est causée par le virus SARS-CoV-2, qui se transmet d'une personne à l'autre de plusieurs façons.<br/>
            Le virus peut se propager lorsque de petites particules liquides sont expulsées par la bouche ou par le nez quand une personne infectée tousse, éternue, parle, chante ou respire profondément. Ces particules sont de différentes tailles, allant de grosses « gouttelettes respiratoires » à des « aérosols » plus petits.<br/>
            Selon les données actuellement disponibles, le virus se transmet principalement entre les personnes qui sont en contact étroit les unes avec les autres, généralement à moins d’un mètre (faible distance). Une personne peut être infectée lorsqu’elle inhale des aérosols ou des gouttelettes contenant le virus ou lorsque ces derniers entrent directement en contact avec ses yeux, son nez ou sa bouche.<br/>
            Le virus peut également être transmis dans des espaces intérieurs mal ventilés et/ou bondés, où l’on a tendance à rester plus longtemps, car les aérosols restent en suspension dans l'air ou se déplacent sur des distances supérieures à un mètre (longue distance).<br/>
            </p>
        </div>
        <br/>
        <div class="row featurette">
        <div class="col-md-8">
            <h2 class="featurette-heading text-left">À quel moment une personne infectée peut-elle transmettre le virus ?</h2>
            <p class="lead text-justify">
            Qu’elles présentent ou non des symptômes, les personnes infectées peuvent être contagieuses et transmettre le virus à d’autres personnes.<br/>
            D’après les données de laboratoire, c’est surtout juste avant qu’elles développent des symptômes (à savoir deux jours avant l’apparition de symptômes) et au tout début de la maladie que les personnes infectées sont les plus contagieuses. Les personnes qui développent une forme grave de la maladie peuvent être contagieuses plus longtemps.<br/>
            Même si quelqu’un qui ne développe jamais de symptômes peut transmettre le virus à autrui, on ne sait pas encore très bien dans quelle mesure cela se produit. Des recherches plus approfondies sont nécessaires dans ce domaine.
            </p>
            </div>
        <div class="col-md-4 text-center">
        <Image src="assets/covid02.jpg" width="80%"/> 
        </div>
        </div>
        <br/>
        <div class="row featurette">
        <div class="col-md-8">
            <h2 class="featurette-heading text-left">Qu’arrive-t-il aux personnes qui contractent la COVID-19 ?</h2>
            <p class="lead text-justify">
            Parmi les malades qui développent des symptômes, la plupart (environ 80 %) guérissent sans qu’il soit nécessaire de les hospitaliser. Environ 15 % des patients tombent gravement malades et nécessitent une oxygénothérapie, et 5 % des infections sont critiques et exigent des soins intensifs..<br/>
            Les complications entraînant la mort sont notamment l’insuffisance respiratoire, le syndrome de détresse respiratoire aiguë (SDRA), la septicémie et le choc septique, la thromboembolie et/ou une défaillance multiviscérale, provoquant des lésions au cœur, au foie ou aux reins.<br/>
            Dans de rares cas, les enfants peuvent développer un syndrome inflammatoire grave quelques semaines après l’infection.</p>
            </div>
        <div class="col-md-4 text-center">
        <Image src="assets/covid03.jpg" width="80%"/> 
        </div>
        </div>
        <br/>
        <div class="row featurette">
        <div class="col-md-8">
            <h2 class="featurette-heading text-left">La COVID-19 a-t-elle des effets à long terme ?</h2>
            <p class="lead text-justify">
            Certaines personnes ayant contracté la COVID-19, que leur état ait nécessité une hospitalisation ou non, continuent de ressentir des symptômes, notamment de la fatigue et des symptômes respiratoires ou neurologiques.<br/>
            L’OMS collabore avec son réseau technique mondial pour la prise en charge clinique de la COVID-19, ainsi qu’avec des chercheurs et des groupes de patients du monde entier afin de concevoir et de mener à bien des études sur des patients au-delà de la phase aiguë de la maladie ; l’objectif est de connaître la proportion de patients qui subissent des effets à long terme, la durée pendant laquelle ces symptômes persistent et les raisons qui expliquent cette persistance. Ces études seront utilisées pour élaborer de nouvelles orientations sur les soins aux patients.  
            </p>
        </div>
        <div class="col-md-4 text-center">
        <Image src="assets/covid04.jpg" width="80%"/> 
        </div>
        </div>
        <br/>
        <div class="row featurette">
        <div class="col-md-8">
            <h2 class="featurette-heading text-left">Existe-t-il un vaccin contre la COVID-19 ?</h2>
            <p class="lead text-justify">
            Oui, plusieurs vaccins sont actuellement utilisés. Le premier programme de vaccination de masse a commencé au début du mois de décembre 2020 et, au 15 février 2021, 175,3 millions de doses de vaccin avaient été administrées. Au moins sept vaccins différents (trois plateformes) ont été administrés.<br/>
            L’OMS a accordé une autorisation d’utilisation d’urgence au titre du protocole EUL au vaccin contre la COVID-19 de Pfizer (BNT162b2) le 31 décembre 2020. Le 15 février 2021, l’OMS a autorisé l’utilisation d’urgence de deux versions du vaccin AstraZeneca/Oxford contre la COVID-19, fabriquées par le Serum Institute of India et SKBio. Le 12 mars 2021, l’OMS a autorisé l’utilisation d’urgence du vaccin Ad26.COV2.S, développé par Janssen (Johnson and Johnson). L’OMS prévoit d’autoriser d’autres vaccins dans le cadre du protocole EUL d’ici au mois de juin. </p>
        </div>
        <div class="col-md-4 text-center">
        <Image src="assets/covid05.jpg" width="80%"/> 
        </div>
        </div>
    </Container>
    </div>
    )
}