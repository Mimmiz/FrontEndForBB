import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { MyFunc } from './MyFunc';

const rootElement = document.getElementById('root');
let goviesItalia = [{ titolo: 'Govies Italia' }, { color: '255, 99, 132' }, { vars: [10690, 11670, 11219, 11616] }];
let goviesOther = [{ titolo: 'Govies Other' }, { color: '54, 162, 235' }, { vars: [7368, 8288, 8237, 8261] }];
let emergingMarkets = [{ titolo: 'Emerging Markets' }, { color: '255, 206, 86' }, { vars: [1670, 1741, 1885, 2092] }];
let corporate = [{ titolo: 'Corporate' }, { color: '75, 192, 192' }, { vars: [4918, 4900, 5030, 4965] }];
let financial = [{ titolo: 'Financial' }, { color: '153, 102, 255' }, { vars: [2936, 3000, 3004, 2872] }];
let securitizations = [{ titolo: 'Securitizations' }, { color: '255, 159, 64' }, { vars: [522, 520, 575, 571] }];

let vars = [11616, 8621, 2092, 4965, 2872, 571 ] ;
let totHTC = 0;
for(let i = 0; i<vars.length; i++){
    totHTC += vars[i];
}
createRoot(rootElement).render(
    <Container fluid="md">
        <Row>
        <Col xs={1}></Col>
            <Col xs={6}>
                <h1>Totale HTC : {totHTC}</h1>
                <MyFunc prop={vars}/>
            </Col>
            <Col xs={1}></Col>
            <Col xs={4}>
            <br></br>
            <br></br>
                <Row>
                    <App prop={goviesItalia} />
                    <App prop={goviesOther} />
                    <App prop={emergingMarkets} />
                </Row>
            </Col>
        </Row>
        <Row>
            <Col xs={4}>
                <App prop={corporate} />
            </Col>
            <Col xs={4}>
                <App prop={financial} />
            </Col>
            <Col xs={4}>
                <App prop={securitizations} />
            </Col>
        </Row>
    </Container>);