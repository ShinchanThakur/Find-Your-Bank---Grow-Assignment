import { InputGroup, FormControl, Container, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

export default class navbar extends React.Component {
    
    render() {
        
        return (
            <Container>

                <div style = {{marginTop:"10px",width:'100%'}} className="row">
                    <div className="col-3">
                        <p className="searchLabel">Select City</p>
                        <Dropdown>
                       
                            <Dropdown.Toggle className="city" variant="light" id="dropdown-basic">
                                {this.props.city}
                            </Dropdown.Toggle>

                            <Dropdown.Menu align={'start'}>
                                <Dropdown.Item onClick={(e)=>{this.props.changeCity(e.target.outerText)}}>Mumbai</Dropdown.Item>
                                <Dropdown.Item onClick={(e)=>{this.props.changeCity(e.target.outerText)}}>Pune</Dropdown.Item>
                                <Dropdown.Item onClick={(e)=>{this.props.changeCity(e.target.outerText)}}>Banglore</Dropdown.Item>
                                <Dropdown.Item onClick={(e)=>{this.props.changeCity(e.target.outerText)}}>Delhi</Dropdown.Item>
                                <Dropdown.Item onClick={(e)=>{this.props.changeCity(e.target.outerText)}}>Chennai</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    <div className="col-3">
                        <p className="searchLabel">Select search category</p>
                        <Dropdown>
                            <Dropdown.Toggle className="category" variant="light" id="dropdown-basic">
                                {this.props.category}
                               
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={(e)=>{this.props.changeCategory(e.target.outerText)}}>Bank Name</Dropdown.Item>
                                <Dropdown.Item onClick={(e)=>{this.props.changeCategory(e.target.outerText)}}>IFSC</Dropdown.Item>
                                <Dropdown.Item onClick={(e)=>{this.props.changeCategory(e.target.outerText)}}>Branch</Dropdown.Item>
                                <Dropdown.Item onClick={(e)=>{this.props.changeCategory(e.target.outerText)}}>Address</Dropdown.Item>
                                <Dropdown.Item onClick={(e)=>{this.props.changeCategory(e.target.outerText)}}>Bank Id</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>


                    <div className="col-6">
                        <p className="searchLabel">Search box
                        
                        </p>
                        <InputGroup className="mb-3" onChange={(e)=>this.props.changeSearch(e.target.value)}>
                            <FormControl
                           
                                placeholder="Enter Search term"
                                aria-label="Search Area"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                    </div>

                </div>



            </Container>


        );

    }
}