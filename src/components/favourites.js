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
                        </div>
            </Container>
        );
    }
}