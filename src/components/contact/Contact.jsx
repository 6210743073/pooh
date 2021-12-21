import { useContext } from 'react'
import "../contact/contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useRef, useState } from "react"
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../context';


const Contact = () => {
    const theme =  useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const formRef = useRef();
    const [done, setDone] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            "service_63yuvpg",
            "template_rj2zn16",
            formRef.current,
            "user_LmondpzlZeZFalO3jq5Yq"
          )
          .then(
            (result) => {
              console.log(result.text);
              setDone(true)
            },
            (error) => {
              console.log(error.text);
            }
          );
      };   
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title" >สนใจทำงานร่วมกัน </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img 
                                src={Phone} 
                                alt="" 
                                className="c-icon" 
                            />
                            +6697 343 0293
                        </div>
                        <div className="c-info-item" >
                            <img 
                                src={Email} 
                                alt="" 
                                className="c-icon" 
                            />
                            poohmiphan@outlook.com
                        </div>
                        <div className="c-info-item">
                            <img 
                                src={Address} 
                                alt="" 
                                className="c-icon" 
                            />
                            <a href="https://github.com/6210743073">https://github.com/6210743073</a>
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc" >
                        <b>ช่องทางในการติดต่อผม</b><br>
                        </br>หากมีข้อสงสัยหรือต้องกรพูดคุยกับผมสามารถพิมพ์ข้อความและกดส่งได้ทางด้านล่าง 👇
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text"  placeholder="Name" name="user_name" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text"  placeholder="Subject" name="user_subject"/>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text"  placeholder="Email" name="user_email"/>
                        <textarea style={{backgroundColor: darkMode && "#333"}} className="text" row="4" placeholder="message" name="message" />
                        <button className="btn-grad">ส่งข้อความ</button>
                        {done && "ขอบคุณน้ำใจของคุณ"}                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
