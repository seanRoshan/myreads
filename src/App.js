import React from 'react';
import './App.css';
import Container from "@material-ui/core/Container";
import FooterComponent from "./components/footer/footer.component";
import DashboardComponent from "./components/dashboard/dashboard.component";
import HeaderComponent from "./components/header/header.component";

function App() {

    const title = "MyReads";

    return (
        <Container className="full-width" fixed>
            <HeaderComponent title={title}/>
            <DashboardComponent/>
            <FooterComponent/>
        </Container>
    );
}

export default App;
