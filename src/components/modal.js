import { ListGroup, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

export default class modal extends React.Component {



    render() {
        return (
            <>
                        <Card style={{ width: '18rem' }}>
  <Card.Header>Featured</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  </ListGroup>
</Card>
                {/* <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Bank</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="bank-info">
                        
                        <div className="details-heading">Bank Details</div>

                       

                            <div>

                           <div className="bank-name">{this.props.modalData.bank_name}</div>

                            <div className="row">  

                            <div className="col-4">
                                <label>Branch:</label>
                                <div>{this.props.modalData.branch}</div>
                            </div>



                            <div className="col-4">
                                <label>IFSC:</label>
                                <div>{this.props.modalData.ifsc}</div>
                            </div>
                            
                            <div className="col-4">
                                <label>Bank Id:</label>
                                <div>{this.props.modalData.bank_id}</div>
                            </div>

                            </div>

<br></br>

                            <div className="row">  

<div className="col-4">
    <label>City:</label>
    <div>{this.props.modalData.city}</div>
</div>



<div className="col-4">
    <label>District:</label>
    <div>{this.props.modalData.district}</div>
</div>

<div className="col-4">
    <label>State:</label>
    <label>{this.props.modalData.state}</label>
</div>

</div>

<br></br>

<div className="row"> 
<div>
    <label>Address:</label>
    <div>{this.props.modalData.address}</div>
</div>
</div>








                            </div>
                        
                       


                        </div>
                        
                       
                       
                      
                       
                        
                        </Modal.Body>
                   
                </Modal> */}
            </>
        );
    }
}