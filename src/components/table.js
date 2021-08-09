import React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Modal from './modal';
import { Container, Dropdown} from 'react-bootstrap';
import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from './Spinner';
import { withRouter } from 'react-router-dom';

class table extends React.Component {

    state = {
        show: false,
        modalData: {},
        pagePerRow: 10,
        tableRef: null,
        text: 10
    }
   
    handleClose = () => {
        this.setState({ show: false });
    }
    handleShow = (res) => {
        this.setState({ show: true, modalData: res });
        const ifsc_code = res.ifsc;
        this.props.history.push(`/bank-details/${ifsc_code}`);
    }

    columnDefs = {
        wrapText: true,
        headerClass: { textAlign: 'center' },
        sortable: true,
        filter: true
    }

    handlePagination = (e) => {
        this.setState({ pagePerRow: parseInt(e.target.outerText), text: e.target.outerText }, () => {
            this.state.tableRef.paginationSetPageSize(Number(this.state.pagePerRow));
        })
    }


    onGridReady = (params) => {
        this.setState({ tableRef: params.api });
    }

    actionButton = (params) => {
        
        console.log(document.getElementById(params.data.ifsc).getElementsByTagName('div')[0].innerHTML);
        if(document.getElementById(params.data.ifsc).getElementsByTagName('div')[0].innerHTML==='<svg class="svg-inline--fa fa-star fa-w-18" aria-hidden="true" data-prefix="far" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg><!-- <i class="far fa-star"></i> -->'){
             this.props.toogle(params.data,1);
             document.getElementById(params.data.ifsc).getElementsByTagName('div')[0].innerHTML='<i class="fas fa-star"></i>';
        }else{
            this.props.toogle(params.data,0);
            document.getElementById(params.data.ifsc).getElementsByTagName('div')[0].innerHTML='<i class="far fa-star"></i>';
        }
        
    }

    render() {

        return (

            <Container>
                {this.props.isLoading
                    ? <Spinner />
                    : 
                    
                    this.props.rowData.length === 0 ? 
                    
                    <div>
                    <img width="35%" height="20%" className="notFound" src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?size=626&ext=jpg&ga=GA1.2.668480129.1628294400"/>
                    <br/>
                     <h8>Uh Oh! No Data Found :(</h8>
                </div>
                
                    
                    
                    : <>

                        <div className="ag-theme-alpine" style={{ width: '99%', height: '500px' }}>
                            {/* <Modal
                                show={this.state.show}
                                handleClose={this.handleClose}
                                handleShow={this.handleShow}
                                modalData={this.state.modalData}
                            /> */}
                            <AgGridReact
                                defaultColDef={this.columnDefs}
                                rowData={this.props.rowData}
                                className="ag-grid"
                                pagination={true}
                                onRowClicked={(e) => { this.handleShow(e.data) }}
                                rowHeight="80"
                                paginationPageSize={this.state.pagePerRow}
                                onGridReady={this.onGridReady}
                                rowSelection={'multiple'}
                            >

<AgGridColumn headerName="" field="bank_name" width='15px' cellRendererFramework={(params)=><div id={params.data.ifsc}> <div onClick={()=>this.actionButton(params)}>{this.props.favourites.includes(params.data) ? <i class="fas fa-star"></i> : <i class="far fa-star"></i>}</div></div>}></AgGridColumn>
                                <AgGridColumn headerName="BANK" field="bank_name" width="270%" tooltipField="bank_name" ></AgGridColumn>
                                <AgGridColumn headerName="IFSC" field="ifsc" width="200%"  tooltipField="ifsc"></AgGridColumn>
                                <AgGridColumn headerName="BRANCH" field="branch" width="200%" tooltipField="branch"></AgGridColumn>
                                <AgGridColumn headerName="BANK ID" field="bank_id" width="180%" tooltipField="bank_id"></AgGridColumn>
                                <AgGridColumn headerName="ADDRESS" field="address" width="400%" tooltipField="address"></AgGridColumn>

                            </AgGridReact>
                            <div className='row' style={{ 'marginTop': '5px' }}>
                                <div className='col-12' style={{ 'textAlign': 'right' }}>
                                    <p style={{ display: 'inline-block', marginRight: '10px' }}>Pages per row</p>
                                    <Dropdown size="sm" style={{ display: 'inline-block' }}>

                                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                                            {this.state.text}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={(e) => { this.handlePagination(e) }}>10</Dropdown.Item>
                                            <Dropdown.Item onClick={(e) => { this.handlePagination(e) }}>50</Dropdown.Item>
                                            <Dropdown.Item onClick={(e) => { this.handlePagination(e) }}>100</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>

                        </div>
                    </>}
            </Container>

        );
    }

};

export default withRouter(table);