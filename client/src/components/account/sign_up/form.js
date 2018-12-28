import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from '../../general/form/input';


let SignUpForm = props => {
    return (
            <div>
                <form>
                    <div className="row">
                    <Field name = "firstName" size= "s6" label= "First Name" component={Input}/>
                    <Field name = "lastName" size="s6" label= "Last Name" component = {Input}   />
                    </div>


                </form>
            </div>
        


    )
}

SignUpForm = reduxForm({
    form: 'sign_up'
})(SignUpForm)


export default SignUpForm;