import style from './service.module.css'
import webPic from '../../assets/web-development.gif'
import MObPic from '../../assets/mobile_development2.gif'
import Prec from '../Prec'

export default function Service() {
       
    return (
        <div id='Service' className={style.main}>
            <h1 className={style.heading}>Services</h1>
            <Prec />
            {/* <div className={style.main1}>

            <div className={style.subMain}>
                <div className={style.leftDiv}>
                    <h1>
                        Web Development
                </h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                </div>
                <div className={style.rightDiv}>
                    <img style={{ maxWidth: '100%', float: 'right' }} src={webPic} />
                </div>
            </div>

            <div className={style.subMain}>
                <div className={style.leftDiv}>
                    <h1>
                        Mobile Application Development
                </h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                </div>
                <div className={style.rightDiv}>
                    <img style={{ maxWidth: '100%', float: 'right' }} src={MObPic} />
                </div>
            </div>
            
        </div> */}
        </div>

    )
}