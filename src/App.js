import './App.css';
import React from "react"
import Manifesto from "./components/Manifesto/Manifesto"
import Footer from "./components/Footer/Footer"
import { SnackbarProvider } from 'notistack';

const App = () => (
  <div>
    <Manifesto />
    <SnackbarProvider maxSnack={3} anchorOrigin={{horizontal: 'center', vertical: 'bottom'}} >
      <Footer />
    </SnackbarProvider>
  </div>
)

export default App;
