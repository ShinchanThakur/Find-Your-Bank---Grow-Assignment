import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarHeader from './components/navbar';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import AllBanks from './components/allbanks';
import Favourites from './components/favourites';
import Axios from 'axios';
import Modal from './components/modal';

export default class App extends React.Component {
  state = {
    favourites: [],
    rowData: [],
    secondaryData: [],
    cache: {},
    isLoading: false,
    city: 'Mumbai',
    category: 'Bank Name',
    searchTerm: '',
  }

  changeCity = (city) => {
    if (this.state.city !== city) {
      this.setState({ city: city }, () => {
        this.makeRequest();
      });
    }
  }

  changeCategory = (category) => {

    if (this.state.category !== category) {
      this.setState({ category: category }, () => {
        if (this.state.category && this.state.searchTerm && this.state.category !== '' && this.state.searchTerm !== '')
          this.setState({ rowData: this.state.secondaryData.filter(element => element[this.translate[this.state.category]].toString().includes(this.state.searchTerm.toUpperCase())) });
        else {
          this.setState({ rowData: this.state.secondaryData })
        }
      });
    }
  }

  changeSearch = (searchValue) => {
    if (this.state.searchTerm !== searchValue) {
      this.setState({ searchTerm: searchValue }, () => {
        if (this.state.category && this.state.searchTerm && this.state.category !== '' && this.state.searchTerm !== '')
          this.setState({ rowData: this.state.secondaryData.filter(element => element[this.translate[this.state.category]].toString().includes(this.state.searchTerm.toUpperCase())) });
        else
          this.setState({ rowData: this.state.secondaryData })
      })
    }
  }


  translate = {
    'Bank Name': 'bank_name',
    'IFSC': 'ifsc',
    'Branch': 'branch',
    'Address': 'address',
    'Bank Id': 'bank_id'
  }

  componentDidMount() {
    this.setState({ isLoading: true }, () => {
      Axios.get('https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI').then((result) => {
        let temp = {};
        temp['MUMBAI'] = result.data;
        this.setState({ rowData: result.data, secondaryData: result.data, cache: temp, isLoading: false });
      })
    })

  }

  makeRequest = () => {

    if (!this.state.cache.hasOwnProperty(this.state.city.toUpperCase())) {
      let endPoint = 'https://vast-shore-74260.herokuapp.com/banks?city=' + this.state.city.toUpperCase();
      this.setState({ isLoading: true }, () => {
        Axios.get(endPoint).then((result) => {
          let temp = this.state.cache;
          temp[this.state.city.toUpperCase()] = result.data;
          this.setState({ rowData: result.data, secondaryData: result.data, cache: temp, isLoading: false }, () => {
            if (this.state.category && this.state.searchTerm && this.state.category !== '' && this.state.searchTerm !== '')
              this.setState({ rowData: this.state.secondaryData.filter(element => element[this.translate[this.state.category]].toString().includes(this.state.searchTerm.toUpperCase())) });
          });
        })
      })
    } else {
      this.setState({ rowData: this.state.cache[this.state.city.toUpperCase()], secondaryData: this.state.cache[this.state.city.toUpperCase()] }, () => {
        if (this.state.category && this.state.searchTerm && this.state.category !== '' && this.state.searchTerm !== '')
          this.setState({ rowData: this.state.secondaryData.filter(element => element[this.translate[this.state.category]].toString().includes(this.state.searchTerm.toUpperCase())) });
      })
    }
  }

  toogle = (row, flag) => {
    if (flag) {
      this.state.favourites.push(row);
    } else {
      this.state.favourites.splice(this.state.favourites.indexOf(row), 1);
    }
  }

  render() {
    return (
      <div className="App">
        <NavBarHeader />
        <Switch>
          <Route exact path="/" render={() => <AllBanks 
          favourites={this.state.favourites} isLoading={this.state.isLoading} toogle={this.toogle} 
          rowData={this.state.rowData} changeCity={this.changeCity} changeCategory={this.changeCategory} 
          changeSearch={this.changeSearch} city={this.state.city} category={this.state.category} 
          searchTerm={this.state.searchTerm} />} />
          <Route path="/favourites" render={() => <Favourites favourites={this.state.favourites} />} />
          <Route path="/bank-details/:ifsc_code" render={() => <Modal rowData={this.state.rowData}/>} />
        </Switch>
      </div>
    );
  }
}
