// Create ES6 functional Component App with default export 
// Move the import statement of Header, Footer, Cart into here from index.js
// Move  <Header /> <Cart /> <Footer /> into App component  

// in index.js import App, use the App inside  <React.StrictMode>

import React, {useState, Suspense} from 'react';
// HEADER is exported with NAMEd
import {Header} from './components/Header'; 
import { Footer, Holidays, Holidays as XDays } from './components/Footer';
// import Cart from './cart/Cart';
import { ThemeContext } from './contexts/ThemeContext';
import Counter from './components/Counter';
 
import {BrowserRouter as Router,
        Switch,
        Route
} from 'react-router-dom';
import ProductList from './cart/ProductList';

// default import is alias name
// import ReduxCart from './redux-cart/containers/Cart';

import ToolkitCounter from './redux-cart/components/ToolkitCounter';
import ProductTable from './redux-cart/components/ProductTable';


// 258 KB before split- main bundle size
// after lazy 251 KB..

// you should never import cart in source  import Cart from './cart/Cart'
const Cart = React.lazy(() => import('./cart/Cart')); // create a separate bundle
const ReduxCart = React.lazy(() => import('./redux-cart/containers/Cart')); // create a separate bundle

const Loading = () => (<div><h2>Loading code..</h2></div>)

 

// implement  a useState feature that toggle (show/hide) the Counter component

const App = () => {
    console.log('App called')

    const [showCounter, setShowHide] = useState(true)

    return (
        <Suspense fallback={<Loading />}>
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

                        <Route path="/redux-cart">
                            <ReduxCart />
                        </Route>

                        <Route path="/toolkit-counter">
                            <ToolkitCounter />
                        </Route>

                        
                        <Route path="/redux-products">
                            <ProductTable />
                        </Route>

                        <Route path="*">
                            <h2>Page not found!!</h2>
                        </Route>

                    </Switch>

                    <Footer />                
                </div>
            </Router>
        </Suspense>
    )
}

export default App;