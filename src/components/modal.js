import { ListGroup, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Spinner from './Spinner';

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
                



                <div className="bank-info">

                    <div className="details-heading">Bank Details</div>



                    <div>

                        <div className="bank-name">{this.state.data.bank_name}</div>

                        <div className="row">

                            <div className="col-4">
                                <label>Branch:</label>
                                <div>{this.state.data.branch}</div>
                            </div>



                            <div className="col-4">
                                <label>IFSC:</label>
                                <div>{this.state.data.ifsc}</div>
                            </div>

                            <div className="col-4">
                                <label>Bank Id:</label>
                                <div>{this.state.data.bank_id}</div>
                            </div>

                        </div>

                        <br></br>

                        <div className="row">

                            <div className="col-4">
                                <label>City:</label>
                                <div>{this.state.data.city}</div>
                            </div>



                            <div className="col-4">
                                <label>District:</label>
                                <div>{this.state.data.district}</div>
                            </div>

                            <div className="col-4">
                                <label>State:</label>
                                <label>{this.state.data.state}</label>
                            </div>

                        </div>

                        <br></br>

                        <div className="row">
                            <div>
                                <label>Address:</label>
                                <div>{this.state.data.address}</div>
                            </div>
                        </div>








                    </div>




                </div>

                </div>

                
            }
            
                
            </>
        );
    }
}