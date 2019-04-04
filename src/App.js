import React from 'react';
import Header from "./Header"
import Footer from "./Footer"

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
            <div class="card text-center">
              <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">Active</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                  </li>
                </ul>
              </div>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <input type="text" name="nama"></input><br></br>
                <a href="#" class="btn btn-primary" name="input">Go somewhere</a>
              </div>
            </div>
            <Footer/>
      </div>
    );
  }
}

export default App;
