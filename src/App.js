import { ChakraProvider } from '@chakra-ui/react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';

import './App.css';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <Carousel />
      </div>
    </ChakraProvider>
  );
}

export default App;
