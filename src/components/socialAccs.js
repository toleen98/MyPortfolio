import React, { Component} from "react";
import { AiTwotoneMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import {SiHackerrank, SiCodewars} from "react-icons/si";
import {IconContext} from "react-icons"


class SocialAccs extends Component {
    render() {
        return (
            <div>
            <h3>Connect with me!</h3>
            <IconContext.Provider value={{ style: {fontSize: '35px', margin: "10",color:"hsl(205, 72%, 37%)"}}}>
            <div>
              <a href="mailto:toleenballool98@gmail.com">
                <AiTwotoneMail />
              </a>
              <a href="https://github.com/toleen98">
                <AiFillGithub />
              </a>
              <a href="https://www.linkedin.com/in/toleen-ballool-864948167/">
                <AiFillLinkedin />
              </a>
              <a href="https://www.hackerrank.com/toleenballool98">
                <SiHackerrank />
              </a>
              <a href="https://www.codewars.com/users/toleenballool98">
                <SiCodewars />
              </a>
            </div>
            
         </IconContext.Provider>
         </div>
        )
    }
}

export default SocialAccs;