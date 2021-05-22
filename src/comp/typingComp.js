import Typewriter from 'typewriter-effect'
import '../App.css'

function TypingCom(){
    return(
        <div className='mainTyping'>
            <h4 style={{fontSize:'4em',marginRight:'10px'}}>I am </h4>
            <Typewriter
              options={{
                strings: ['<strong style="color: #ffff;Font-Size:4em;"> Syed Areeb</strong>','<strong style="color: yellow;Font-Size:4em;">a Developer</strong>','<strong style="color: yellow;Font-Size:4em;">a  Designer</strong>'],
                autoStart: true,
                loop: true,
              }}

            />
        </div>
    )
}

export default TypingCom;