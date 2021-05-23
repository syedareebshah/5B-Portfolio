import { useEffect } from "react"
import Aos from 'aos';
import 'aos/dist/aos.css';
import Home from "./home/home";
import About from "./About/About";

const Anim=()=>{
    useEffect(()=>{
        Aos.init({ duration:1000});
    },[])
    return(
        <div>
            
            <div>
                <h2 style={{textAlign:'center'}}>About</h2>
                <div data-aos="fade-down" >
                </div>
                

            </div>

            
            
            

        </div>
    )
}

export default Anim