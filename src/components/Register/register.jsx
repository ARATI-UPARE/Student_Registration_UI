import { Component } from 'react';
import {React} from 'react'
import { Form, Input, FormGroup, Button } from 'reactstrap'
import StuentDataLayer from '../studentdatalayer/StudentDataLayer';
 
var data = new StuentDataLayer();

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
                firstName:'',
                lastName:'',
                emailId:'',
                mobileNumber:'',
                formErrors: {}    
        };
        this.initialState = this.state;    
    }
    
    handleFormValidation() {    
        const { firstName, emailId, mobileNumber } = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
        //First name     
        if (!firstName) {    
            formIsValid = false;    
            formErrors["firstNameErr"] = " First Name is Required.";    
        }    
    
        //Email    
        if (!emailId) {    
            formIsValid = false;    
            formErrors["emailIdErr"] = "Email id is Required.";    
        }    
        else if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailId))) {    
    
            formIsValid = false;    
            formErrors["emailIdErr"] = "Invalid email id.";    
        }    
    
        //Phone number    
        if (!mobileNumber) {    
            formIsValid = false;    
            formErrors["mobileNumberErr"] = "Phone Number is required.";    
        }    
        else {    
            var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;    
            if (!mobPattern.test(mobileNumber)) {    
                formIsValid = false;    
                formErrors["mobileNumberErr"] = "Invalid phone number.";    
            }    
        }  
        this.setState({ formErrors: formErrors });    
        return formIsValid;    
    }    
    
    handleChange = async(e) => {    
        const { name, value } = e.target;    
        await this.setState({ [name]: value });    
    }    

    handleSubmit = async(e) => {
        await e.preventDefault();     
        if (this.handleFormValidation()) {    
            alert('You have been successfully registered.')  
            data.signUpData(this.state.firstName,this.state.lastName,this.state.emailId,this.state.mobileNumber);
            this.setState(this.initialState)
     
        }    
    }

    render(){
        const { firstNameErr, emailIdErr, mobileNumberErr } = this.state.formErrors;    

        return(
            <div style={{marginTop:"50px",alignSelf:"center",textAlign:"start"}}>
                <h1>Register Here...!</h1>
                <br/>
            <Form>
                <FormGroup>
                    <Input style={{ width:"500px",height:"50px"}} 
                    type="text" name="firstName"  
                    placeholder="Enter First Name" 
                    onChange={this.handleChange} 
                    value={this.state.firstName} 
                    className={firstNameErr ? ' showError' : ''}/>
                    {firstNameErr &&    
                    <div style={{ color: "red", paddingBottom: 10 }}>{firstNameErr}</div>    
                    }    
                </FormGroup>
                
                <FormGroup>
                    <Input style={{ width:"500px",height:"50px"}} 
                    type="text" name="lastName" 
                    placeholder="Enter Last Name" 
                    onChange={this.handleChange}
                    value={this.state.lastName}/>
                </FormGroup>

                <FormGroup>
                    <Input style={{ width:"500px",height:"50px"}} 
                    type="text" name="emailId" 
                    placeholder="Email Address"
                    onChange={this.handleChange} 
                    value={this.state.emailId}
                    className={emailIdErr ? ' showError' : ''}/>
                    {emailIdErr &&    
                    <div style={{ color: "red", paddingBottom: 10 }}>{emailIdErr}</div>    
                    }    
                </FormGroup>

                <FormGroup>
                    <Input style={{ width:"500px",height:"50px"}}
                    type="number" name="mobileNumber" 
                    placeholder="Mobile Number" 
                    onChange={this.handleChange} 
                    value={this.state.mobileNumber}
                    className={mobileNumberErr ? ' showError' : ''}/>
                    {mobileNumberErr &&    
                    <div style={{ color: "red", paddingBottom: 10 }}>{mobileNumberErr}</div>    
                    }    
                </FormGroup>   
                
                <Button color="danger" 
                className="btn btn-primary btn-block" 
                style={{ display:"flex",alignItems:"center",width:"150px",height:"50px",fontSize:"20px"}} 
                onClick={this.handleSubmit}>Register</Button>    
           </Form>   
           </div>
        );
    }
}

export default Register;