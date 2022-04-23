import './App.css';
import Navbar from "./components/navbar/Navbar"
import Header from './components/header/Header';
import SectionOne from './components/sectionOne/SectionOne';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <SectionOne/>
     <Footer/>
    </div>
  );
}

export default App;
