import React from 'react';
import Bounce from 'react-reveal/Bounce';
import style from './About.module.css'
import Pulse from 'react-reveal/Pulse';

export default function About() {
    return (
        <div id='About' className={style.main}>
            <Bounce top cascade>
                <h1 style={{fontSize:'40px'}}>About</h1>
            </Bounce>
            
            <div className={style.mainTwo}>
            <Pulse>
                <div>
                    <h3>I am Syed Areeb</h3>
                    <h3>
                        I am a Software Engineer, Web & Mobile Hybrid Application developer and a Graphics Desginer.
                    </h3>
                    <br />
                    <p>
                        An enthusiastic man who is always ready to fulfill the desire and requirements of client, a Software Engineer, Web & Mobile Hybrid Application Developer, WordPress developer and a Graphic Designer.
                    </p>
                    <p>
                        I have a Hardworking team having experties in multiple fields.
                    </p>
                </div>
            </Pulse>
            <Pulse>    
                <div>
                    <img style={{ maxWidth: '200px' }} src='https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png' />
                </div>
            </Pulse>
            </div>
            

        </div>
    )
}