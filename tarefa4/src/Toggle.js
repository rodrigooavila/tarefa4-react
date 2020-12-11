import React from 'react';
import { Component } from 'react';
import styled from "styled-components"

const DarkButton = styled.button `
    color: ${({ theme }) => theme.text};
`;

const Toggle = ({ themeLabel, toggleTheme }) => {
    let label = ['Mudar para', themeLabel === 'light' ? 'Escuro' : 'Claro'].join(' ');
    return ( <
        DarkButton onClick = { toggleTheme } > { label } < /DarkButton>
    );
}

export default Toggle;