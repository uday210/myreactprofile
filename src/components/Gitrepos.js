import React from 'react';
import axios from 'axios';
import Dateformat from './Dateformat'
export default class  Gitrepos  extends React.Component {
    constructor(props) {
        super(props);

  
        this.state = {
           sessionid : '',
           gitrepos : []
        };

    }

  render (){
    const { gitrepos } = this.state;
      return(
          <div>
               { gitrepos.map(eachRepo => {
            
          return (
            <div key={eachRepo.name}>
                <img src={eachRepo.owner.avatar_url} Style="width:5%"></img>
              &nbsp;<b><a href={eachRepo.html_url}>{eachRepo.name}</a></b>
              <br/>
              <label>owner :{eachRepo.owner.login} </label>
              <br/>
                  <label><a href={eachRepo.clone_url}>clone</a></label>
                <br/>
          <label>Created Date : {eachRepo.created_at}</label>
              <hr />
            </div>
          );
              
        })
    }
          </div>
   );
}

getcoviddata(){
    var apiBaseUrl = "https://api.github.com/users/uday210/repos";
    var self = this;
   axios.get(apiBaseUrl)
    .then(function (response) {
    console.log('gitrepos  ',response.data);
    self.setState({
        gitrepos: response.data
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


