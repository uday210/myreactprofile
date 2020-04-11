import React from 'react';
import axios from 'axios';
import Dateformat from './Dateformat'
export default class  Covid  extends React.Component {
    constructor(props) {
        super(props);

  
        this.state = {
           sessionid : '',
           data : []
        };

    }

  render (){
    const { data } = this.state;
      return(
          <div>
               { data.map(eachCountry => {
                    const { country } = eachCountry;
        
          return (
            <div key={country}>
              <p>{country}</p>
              <img src={eachCountry.countryInfo.flag} Style="width:5%"></img>
              <br/>
              <span>
               <label>Last updated :
                   <Dateformat timeis={eachCountry.updated}></Dateformat>
                   </label>   
              </span>
              <br/>
              <span class="badge badge-info">Today's cases :{eachCountry.todayCases} </span> &nbsp;
              <span class="badge badge-danger">Today's Deaths :{eachCountry.todayDeaths} </span>&nbsp;
              <span class="badge badge-info">Total cases :{eachCountry.cases} </span> &nbsp;
              <span class="badge badge-danger">Total Deaths : {eachCountry.deaths}</span>&nbsp;
              <span class="badge badge-success">Recovered : {eachCountry.recovered}</span>&nbsp;
              <span class="badge badge-warning">Active : {eachCountry.active}</span>&nbsp;
              
              <hr />
            </div>
          );
              
        })
    }
          </div>
   );
}

getcoviddata(){
    var apiBaseUrl = "https://corona.lmao.ninja/countries";
    var self = this;
   axios.get(apiBaseUrl)
    .then(function (response) {
    console.log('COVID ',response.data);
    self.setState({
        data: response.data
      })
    
    })
    .catch(function (error) {
    console.log(error);
    });

}

componentDidMount() {
    console.log('getcoviddata');
    this.getcoviddata();
  }
}


