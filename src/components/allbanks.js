import 'bootstrap/dist/css/bootstrap.min.css';
import Filters from './filters'
import Table from './table'
import React from 'react';

export default class AllBanks extends React.Component{
  
  render(){
    console.log(this.props.city);
    return (
      <div>
        <Filters city={this.props.city} category={this.props.category} searchTerm={this.props.searchTerm} changeCity={this.props.changeCity} changeCategory={this.props.changeCategory} changeSearch={this.props.changeSearch}
        />
        <Table favourites={this.props.favourites} isLoading={this.props.isLoading} rowData={this.props.rowData} toogle={this.props.toogle} city={this.props.city} category={this.props.category} searchTerm={this.props.searchTerm}/>
      </div>
    );
  }
}
