import React from "react";
import { Container } from "react-bootstrap";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

export default class favourites extends React.Component{
    state={
        rowData:[]
    }

    componentDidMount(){
        this.setState({rowData:this.props.favourites});
    }

    columnDefs = {
        wrapText: true,
        flex: 1,
        headerClass: { textAlign: 'center' },
        sortable: true,
        filter: true
    }

    render(){
        return(
            <Container>
                {this.state.rowData.length === 0 ? 
                
                <div>
                    <img width="35%" height="20%" className="notFound" src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?size=626&ext=jpg&ga=GA1.2.668480129.1628294400"/>
                    <br/>
                     <h8>Uh Oh! Looks like the table is empty. Add some banks to your favourites by clicking on the star :(</h8>
                </div>
                
                
              
               

                
                :
                        <div className="ag-theme-alpine" style={{marginTop:'83px', width: '99%', height: '500px' }}>
                            <AgGridReact
                                defaultColDef={this.columnDefs}
                                rowData={this.state.rowData}
                                className="ag-grid"
                                pagination={true}
                                rowHeight="80"
                                paginationPageSize={10}
                            >
                                <AgGridColumn headerName="BANK" field="bank_name" flex="1.5"></AgGridColumn>
                                <AgGridColumn headerName="IFSC" field="ifsc" flex="1"  ></AgGridColumn>
                                <AgGridColumn headerName="BRANCH" field="branch" flex="1" ></AgGridColumn>
                                <AgGridColumn headerName="BANK ID" field="bank_id" flex="1" ></AgGridColumn>
                                <AgGridColumn headerName="ADDRESS" field="address" flex="2" ></AgGridColumn>

                            </AgGridReact>
                        </div>}
            </Container>
        );
    }
}