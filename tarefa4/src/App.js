import SignupForm from './Signup';
import Toggle from './Toggle';
import React, { Component } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalLayout } from './Signup';



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            theme: "light",
        }
    };

    toggleTheme = () => {
        if (this.state.theme === 'light') {
            this.setState({
                theme: 'dark',
            });
        } else {
            this.setState({
                theme: 'light',
            });
        }
    }


    render() {

        return ( <
            ThemeProvider theme = { this.state.theme == 'light' ? lightTheme : darkTheme } >
            <
            GlobalLayout / >
            <
            div className = "App" >
            <
            Toggle themeLabel = { this.state.theme }
            toggleTheme = { this.toggleTheme }
            /> <
            p > < SignupForm / > < /p>

            <
            /div> < /
            ThemeProvider >
        );
    }
}



export default App;