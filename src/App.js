import React from 'react';
import './App.css';
import Container from "@material-ui/core/Container";
import FooterComponent from "./components/footer/footer.component";

function App() {
    return (
        <Container className="full-width" fixed>
            <FooterComponent/>
        </Container>
    );
}

export default App;
