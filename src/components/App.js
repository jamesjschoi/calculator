import Display from "./Display";
import Calculator from "./Calculator";
import Header from "./Header";
import Footer from './Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <main className="calculator-wrapper">
        {/* <Display /> */}
        <Calculator />
      </main>
      <Footer />
    </div>
  );
  
}

export default App;
