import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Spinner extends React.Component {

    render() {
        return (
                <div style={{width:'99%', height:'500px' ,paddingTop:'220px'}} className="d-flex justify-content-center">
                    <div className="spinner-border" role="status"></div>
                </div>
        );
    }
}