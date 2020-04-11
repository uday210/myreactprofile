import React from 'react';
import axios from 'axios';

export default class  Dateformat extends React.Component {
    constructor(props) {
        super(props);

    
        this.state = {
           tt : this.props.timeis
        };

    }

  render (){
    const { tt } =   this.state
    return(
          <div>
             
      <span>   {new Date(tt).toString()}</span>
          </div>
   );
}
}


