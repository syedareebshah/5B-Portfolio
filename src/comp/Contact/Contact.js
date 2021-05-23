import style from './contact.module.css'
import RubberBand from 'react-reveal/RubberBand';

export default function Contact(){
    return(
        <div className={style.main}>
            <RubberBand right>
            <h1>Contact</h1>
            <br />
            <div className={style.socialMedia}>
            <a href=''>
            <img width='40px' src='https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png' />
            </a>
            <a href=''>
            <img width='40px' src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png' />
            </a>
            <a href=''>
            <img width='40px' src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png' />
            </a>
            <a href=''>
            <img width='40px' src='https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-16.png' />
            </a>
            </div>
            <h3>Fiverr: @areeb_zaidi</h3>
            </RubberBand>
        </div>
    )
}