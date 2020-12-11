import React from 'react';
import { Component } from 'react';



const Toggle = ({ themeLabel, toggleTheme }) => {
    let label = ['Mudar para', themeLabel === 'light' ? 'Escuro' : 'Claro'].join(' ');
    return ( <
        DarkButton onClick = { toggleTheme } > { label } < /DarkButton>
    );
}

export default Toogle;