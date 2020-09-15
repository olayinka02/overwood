import React from 'react';

class App extends React.Component {
 
  render() {
   
          return (
          <div  className="Container-fluid" >
              <nav>
                 <center>
                  <ul className="nav">
                      <li>Our product</li>
                      <li>FAQs</li>
                      <li>Contacts</li>
                      <li>Blogs</li>
                      <li style={{textDecorationLine:"underline;"}}> 6 Things about us </li>
                
                      <button>LOGIN</button>
                      <button>CREATE ACCOUNT</button>
                  </ul>
                </center>
                </nav>
           
          </div>
      );
  }
}

export default App;