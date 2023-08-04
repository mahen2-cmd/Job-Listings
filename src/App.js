// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Job from "./Job";
import Header from "./Header";




function App() {
    return (
        <div>
            <Header />

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "50vh",
                    flexDirection: "column",
                }}
            >
                <Job
                    prop1="Frontend"
                    prop2="Senior"
                    prop3="HTML"
                    prop4="CSS"
                    prop5="JavaScript"
                />
                <Job prop1="Fullstack" prop2="Midweight" prop3="Python" prop4="React" />
                <Job prop1="Frontend" prop2="Junior" prop3="React" prop4="Sass" prop5="JavaScript"/>
            </div>
        </div>
    );
}

export default App;
