import { ListGroup, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Spinner from './Spinner';
import '../styles/styles.css';

export default class modal extends React.Component {

    state = {
        isLoading: true,
        data: {}
    }

    componentDidMount() {
        const data = this.props.rowData.find((data) => data.ifsc == window.location.href.slice(-11));
        this.setState({ data: data, isLoading: false });
    }

    render() {

        return (
            <>
            {this.state.isLoading
                    ? <Spinner />
                    : 












                <div>
                

                <Card className="text-center">
             
  <Card.Header> <div className="details-heading"><b>Bank Details</b></div></Card.Header>
  <Card.Body>
    <Card.Title>  <div className="bank-name">{this.state.data.bank_name}</div></Card.Title>
    <Card.Text>
    <div className="row">

<div className="col-4">
    <label><b>Branch:</b></label>
    <div>{this.state.data.branch}</div>
</div>



<div className="col-4">
    <label><b>IFSC:</b></label>
    <div>{this.state.data.ifsc}</div>
</div>

<div className="col-4">
    <label><b>Bank Id:</b></label>
    <div>{this.state.data.bank_id}</div>
</div>

</div>

<br></br>

<div className="row">

<div className="col-4">
    <label><b>City:</b></label>
    <div>{this.state.data.city}</div>
</div>



<div className="col-4">
    <label><b>District:</b></label>
    <div>{this.state.data.district}</div>
</div>

<div className="col-4">
    <label><b>State:</b></label>
    <div>{this.state.data.state}</div>
</div>

</div>

<br></br>

<div className="row">
<div>
    <label><b>Address:</b></label>
    <div>{this.state.data.address}</div>
</div>
</div>

    </Card.Text>
    <Button variant="primary" href="/all-banks">Go Back</Button>
  </Card.Body>
 
</Card>


            

                </div>

                
            }
            
                
            </>
        );
    }
}