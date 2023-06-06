import logo from './logo.svg';
import './App.css';
import { HomeComponent } from './components/HomeComponent';
import HomeContainer from './containers/HomeContainer';


function App() {
  return (
    // <div>
    //   <header>
    //   <div class="navbar">
    //     {/* <img src="" alt="Heena's pickle logo"> */}
    //     <h1>Navbar</h1>
    // </div>

    <div class="product">
        <h1>Our Products</h1>
        <HomeContainer/>
    </div>

    // <div class="product">
    //     <h1>How to Choose Flavours?</h1>
    // </div>
    
    // <div class="choose">
    //     <h2>Why Choose Us</h2>
    // </div>
    
    // <div class="about">
    //     <h1>About Us</h1>
    // </div>

    // <div class="text-center">
    //     <h2>Customer Favourites</h2>
    // </div>

    // <div class="text-color">
    //     <h1>Types of Indian Pickles You Must Try</h1>
    // </div>

    // <div class="navbar footer">
    //     {/* <img src="" alt="Heena's pickle logo"> */}
    //     <h4>About Us</h4>
    // </div>

    // <footer class="footer">
    //      © Copyright 2023. All Rights Reserved.
    // </footer>
    //   </header>
    // </div>
  );
}

export default App;
