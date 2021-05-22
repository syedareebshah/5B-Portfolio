import style from './home.module.css'
import mainImg from '../../assets/mainOne.gif'
import TypingCom from '../typingComp';

export default function Home(){
    
    return(
        <div className={style.main}>
            <div className={style.rightDiv}>
                <TypingCom />
            </div>
            <div className={style.leftDiv}>
                <img style={{maxWidth:'70%'}} src={mainImg} />
            </div>
        </div>
    )
}