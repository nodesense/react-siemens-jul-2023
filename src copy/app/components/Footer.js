
// app/components/Footer.js
// ES6 , single line function with multiple tags

import { ThemeContext } from "../contexts/ThemeContext"

// single line function , no need of return statement
export const Holidays = () => (
    <div>
      <p>Weekend Holidays, Every 4th sunday</p>
    </div>
  )

// ES6 function { means multi line function, needs return statement }
// EXPORT by NAME, while IMPORTing, we should use { Footer } with same name
// NOT A BEST PRACTICE FOR COMPONENTS to be NAMEd EXPORT
export const Footer = () => {
    return (
        <div>
        <hr />
        
        <ThemeContext.Consumer>
                { (theme) => (
                      <p style={ {color: theme} } >Copyrights @product-app, 2023</p>
                ) }
        </ThemeContext.Consumer>

        <Holidays />
        </div>
    )
}