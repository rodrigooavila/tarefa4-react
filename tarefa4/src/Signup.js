import React from 'react';
import { Component } from 'react';
import { createGlobalStyle } from "styled-components";
import Toggle from './Toggle';



export const GlobalLayout = createGlobalStyle `
	body{
				background: ${({ theme }) => theme.body};
				color: ${({ theme }) => theme.text};
	}
`;
export const lightTheme = {
    body: '#2196F3',
    text: '#363537',
}

export const darkTheme = {
    body: '#363537',
    text: '#FAFAFA',
}


class SignupForm extends Component {



    render() {

        return ( <
            div className = "form" >
            <
            h2 > Sign up to my newsletter < /h2> <
            input type = "email"
            placeholder = "example@email.com" / >
            <
            button type = "submit" > Sign up < /button> 


            <
            /div>
        );

    }
}


export default SignupForm;