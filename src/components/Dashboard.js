import React from 'react';
import axios from 'axios';

export default class  Dashboard extends React.Component {
    constructor(props) {
        super(props);

  
        this.state = {
           sessionid : ''
        };

    }

  render (){
      return(
          <div>
              Dashboard !
          </div>
   );
}
}


