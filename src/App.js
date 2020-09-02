import React, { Component } from 'react';
import Projects from "./components/projects";
import SocialAccs from "./components/socialAccs";
import profile from "./assets/profile.jpg";
import Title from "./components/titles"

class App extends Component {
  state= {
      diplyBio: false,
  }

  toggledisBio () {
    this.setState({diplyBio: !this.state.diplyBio});
  }
  
  render = () =>{  
  return (
    <div>
      <img src= {profile} alt="profile" className="profile"/>
      <h1>Hello!</h1>
      <p>My name is toleen.</p>
      <Title/>
      <p>I am always seeking for more Knowledge.</p> 
      {this.state.diplyBio ? ( <div>
                  <p>I live in jordan, and code every day.</p>
                  <p>My favorite language is javascript.</p>
                  <p>Besides coding, I also love coking, and anime.</p>
                  <button onClick={this.toggledisBio.bind(this)}>Show Less</button>
               </div>) :(
                 <div>
                   <button onClick={this.toggledisBio.bind(this)}>Read More</button>
                 </div>
               )}
      <hr />   
      <Projects/> 
      <hr/>
      <SocialAccs/>    
    </div> 
    
  )
}
}

export default App;
