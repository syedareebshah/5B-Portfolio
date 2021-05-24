import style from './contact.module.css'
import RubberBand from 'react-reveal/RubberBand';

export default function Contact(){
    return(
        <div id='Contact' className={style.main}>
            <RubberBand right>
            <h1>Contact</h1>
            <br />
            <div className={style.socialMedia}>
            <a href=''>
            <img width='40px' src='https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png' alt='facebook' />
            </a>
            <a href=''>
            <img width='40px' src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png' alt='Twitter' />
            </a>
            <a href=''>
            <img width='40px' src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png' alt='Instagram' />
            </a>
            <a href=''>
            <img width='40px' src='https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-16.png' alt='Gmail' />
            </a>
            <a href=''>
            <img width='40px' src='https://image.flaticon.com/icons/png/512/174/174857.png' alt='LinkedIn' />
            </a>
            <a href=''>
            <img width='40px' src='https://image.flaticon.com/icons/png/512/25/25231.png' alt='Github' />
            </a>
            </div>
            <h3>Fiverr: @areeb_zaidi</h3>
            </RubberBand>
        </div>
    )
}