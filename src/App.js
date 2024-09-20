import { ChakraProvider } from '@chakra-ui/react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Main from './components/Main';

import './App.css';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <Main />
        <Carousel />
      </div>
    </ChakraProvider>
  );
}

export default App;
