// Create ES6 functional Component App with default export 
// Move the import statement of Header, Footer, Cart into here from index.js
// Move  <Header /> <Cart /> <Footer /> into App component  

// in index.js import App, use the App inside  <React.StrictMode>

import React, {useState} from 'react';
// HEADER is exported with NAMEd
import {Header} from './components/Header'; 
import { Footer, Holidays, Holidays as XDays } from './components/Footer';
import Cart from './cart/Cart';
import { ThemeContext } from './contexts/ThemeContext';
import Counter from './components/Counter';
 
import {BrowserRouter as Router,
        Switch,
        Route
} from 'react-router-dom';
import ProductList from './cart/ProductList';

// implement  a useState feature that toggle (show/hide) the Counter component

const App = () => {
    console.log('App called')

    const [showCounter, setShowHide] = useState(true)

    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <h2>Home page</h2>
                    </Route>

                    <Route path="/products">
                        <ProductList />
                    </Route>

                    <Route path="/cart">
                            {/* ThemeContext.Consumer within Cart shall get "green value instead blue" */}
                            <ThemeContext.Provider value="red">
                                <Cart />
                            </ThemeContext.Provider>
                    </Route>

                    <Route path="*">
                        <h2>Page not found!!</h2>
                    </Route>

                </Switch>

                <Footer />                
            </div>
        </Router>
    )
}

export default App;