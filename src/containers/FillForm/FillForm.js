import React, {Component} from 'react';
import classes from './FillForm.css';

class FillForm extends Component{
  state ={
    personinfo:{
      firstname:'',
      lastname:'',
      address:'',
      age:0
    }
  }
render(){
  return(

    <div className={classes.FillForm}>
    <div  className={classes.FillFormField}>FirstName:<input type='text'>{this.state.firstname}</input></div>
    <div className={classes.FillFormField}>Last name:<input type='text'>{this.state.lastname}</input></div>
    <div className={classes.FillFormField}>Address:<input type='text'>{this.state.address}</input></div>
    </div>
  )
}

}

export default FillForm;
