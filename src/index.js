import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './footer';
import Home from './home';

const App = () => {
    return (
        <div>
            <Home />
            <Footer />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));
