import Typewriter from 'typewriter-effect'
import '../../App.css'

// ,'<strong style="color: yellow;Font-Size:4em;">a Developer</strong>','<strong style="color: yellow;Font-Size:4em;">a  Designer</strong>'

function TypingCom(){
    return(
        <div className='mainTyping'>
            <h4 className='txtTwo' style={{marginRight:'10px'}}>I am </h4>
            <Typewriter
              options={{
                strings: [`<strong class="txtTwo"> Syed Areeb</strong>`,`<strong class="txt"> a Developer</strong>`,`<strong class="txt"> a  Designer</strong>`],
                autoStart: true,
                loop: true,
              }}

            />
        </div>
    )
}

export default TypingCom;