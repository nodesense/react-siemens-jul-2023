import React, {createContext} from 'react';

// "blue" is default value, used as placeholder if the Parent component
//  doesn't Provide the value for the theme context
export const ThemeContext = createContext("blue")
