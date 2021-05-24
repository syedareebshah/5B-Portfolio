import { useEffect } from 'react';
import style from './Portfolio.module.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Jump from 'react-reveal/Jump';


export default function Porfolio() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <div id='Portfolio'>
            <Jump>
                <h3 style={{ textAlign: 'center', fontSize: '35px', marginTop: '30px' }}>Portfolio</h3>
            </Jump>
            <div className={style.main}>
                <div data-aos="fade-up" className={style.card}>
                    <h2>Expence Tracker</h2>
                    <p>React JS || Contaxt API</p>
                    <div className={style.innerDiv}>
                        <a href='' >Click Here</a>
                    </div>
                </div>
                <div data-aos="fade-down" className={style.card}>
                    <h2>Covid Tracker</h2>
                    <p>React JS || Material UI || Charts JS</p>
                    <div className={style.innerDiv}>
                        <a href='' >Click Here</a>
                    </div>
                </div>
                <div data-aos="fade-up" className={style.card}>
                    <h2>Olx Replica</h2>
                    <p>React JS || Redux</p>
                    <div className={style.innerDiv}>
                        <a href='' >Click Here</a>
                    </div>
                </div>
            </div>
            <div style={{ marginBottom: '30px' }} className={style.main}>
                <div data-aos="fade-up" className={style.card}>
                    <h2>Red Queen Animation</h2>
                    <p>React JS</p>
                    <div className={style.innerDiv}>
                        <a href='' >Click Here</a>
                    </div>
                </div>
                <div data-aos="fade-down" className={style.card}>
                    <h2>Quiz App</h2>
                    <p>React || PWA </p>
                    <div className={style.innerDiv}>
                        <a href='' >Click Here</a>
                    </div>
                </div>
                <div data-aos="fade-up" className={style.card}>
                    <h2>Bus Schedule</h2>
                    <p>React JS</p>
                    <div className={style.innerDiv}>
                        <a href='' >Click Here</a>
                    </div>
                </div>
            </div>
            </div>
    )
}