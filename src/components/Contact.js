import React from 'react';
import axios from 'axios';

export default class  Contact extends React.Component {
    constructor(props) {
        super(props);

  
        this.state = {
           sessionid : ''
        };

    }

  render (){
      return(
          <div>

<div class="container">
	<div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div class="well well-sm" Style="">
          <form class="form-horizontal" action="" method="post">
          <fieldset>
            <legend class="text-center">Contact Me</legend>
    
            <div class="form-group">
              <label class="col-md-3 control-label" for="name">Name</label>
              <div class="col-md-9">
                <input id="name" name="name" type="text" placeholder="Your name" class="form-control"/>
              </div>
            </div>
			<div class="form-group">
              <label class="col-md-3 control-label" for="email">Your E-mail</label>
              <div class="col-md-9">
                <input id="email" name="email" type="text" placeholder="Your email" class="form-control"/>
              </div>
            </div>
    
            <div class="form-group">
              <label class="col-md-3 control-label" for="message">Your message</label>
              <div class="col-md-9">
                <textarea class="form-control" id="message" name="message" placeholder="Please enter your message here..." rows="5"></textarea>
              </div>
            </div>
    
            <div class="form-group">
              <div class="col-md-12 text-right">
                <button type="submit" class="btn btn-primary btn-lg">Submit</button>
              </div>
            </div>
          </fieldset>
          </form>
        </div>
      </div>
	</div>
</div>
          </div>
   );
}
}


