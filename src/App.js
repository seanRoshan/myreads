import React from 'react';
import './styles/App.scss';
import Container from "@material-ui/core/Container";
import {HeaderComponent, DashboardComponent, FooterComponent} from "./components";


function App() {

    const title = "MyReads";

    return (
        <Container className="app" fixed>
            <HeaderComponent title={title}/>
            <DashboardComponent/>
            <FooterComponent/>
        </Container>
    );
}

export default App;
