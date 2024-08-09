import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import data from'../fileManager/data.json';
import Patrimoine from './patrimoineManager/models/Patrimoine.js';
import DatePicker from 'react-datepicker';
import { Form, Container, Button } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
function Body(){
 const possessions = (data[1].data.possessions);
 const [total, setTotal] = useState(0);
 const patri = new Patrimoine(null,[]);
 const [endDate, setEndDate] = useState(new Date());

console.log(possessions);
let t = 0;
    return <>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Possessions</th>
          <th>Libelle</th>
          <th>Valeur initiale</th>
          <th>datedebut</th>
          <th>datefin</th>
          <th>amortissement</th>
          <th>Valeur actuel</th>
        </tr>
      </thead>
      <tbody>
            {possessions.map((possession, index) =>  {
                t = t + possession.valeur;
                patri.addPossession(possession);
                return <tr key={index}>
                    <td>{possession.possession}</td>
                    <td>{possession.libelle}</td>
                    <td>{possession.valeur}</td>
                    <td>{possession.dateDebut}</td>
                    <td>{possession.dateFin}</td>
                    <td>{possession.tauxAmortissement}</td>
                    <td>{possession.valeuractuel}</td>
                </tr>
            })}
      </tbody>
    </Table>
    <h3>Total : {t}</h3>
    <Container>
      <Form>
        <Form.Group controlId="formDate">
          <Form.Label>Select Date</Form.Label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="form-control"
            dateFormat="yyyy/MM/dd"
            placeholderText="Click to select a date"
          />
        </Form.Group>
      </Form>
    </Container>
    <Button onClick={()=>{
        const daty = endDate.getFullYear()+":"+endDate.getMonth()+1+":"+endDate.getDate();
        const val=patri.getValeur( daty);
        
    }}>
        Calculate
    </Button>
    </>
}

function handleChange(){

}

export default Body;