import React from 'react';
import './App.css';
import Container from "@material-ui/core/Container";
import FooterComponent from "./components/footer/footer.component";
import DashboardComponent from "./components/dashboard/dashboard.component";

function App() {
    return (
        <Container className="full-width" fixed>
            <DashboardComponent/>
            <FooterComponent/>
        </Container>
    );
}

export default App;
