import React, {useRef, useState} from "react";
import Contactimg from "../assets/images/Contactimage.png"
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

export default function Contact(props) {
    const formRef = useRef()
    const[messageSent,setMessageSent] = useState(false)
    const [data,setData] = useState({
        firstname : "",
        lastname : "",
        email : "",
        phonenumber :"",
        message : ""
    })
    function handleSubmit(e) {
        e.preventDefault();
        setMessageSent(true)
            emailjs.sendForm(
                'service_m7s7cl7',
                'template_ayjzuvf',
                formRef.current,
                '4E-37YWLLH6lxBdwg'
                )
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                })
                Swal.fire({
                    title: !props.language ? "Message Sent!" : "Message Envoyer!",
                    html: !props.language ? "Your message has been received" : "Merci pour votre Message",
                    icon: 'success'
                })
    }
    function handleChange(e) {
        const {value,name} = e.target
        setData(prevData => {
            return{
                ...prevData,
                [name] : value
            }
        })
    }
    return(
        <div className="Contact" id="Contact">
            <form ref={formRef} onSubmit={handleSubmit} data-aos="fade-right">
                <div className="Contact--Details">
                    <span>{!props.language ? "Get in " : "Contactez "}</span><span>{!props.language ? "Touch" : "Moi"}</span>
                    <div>
                        <input 
                            type="text"
                            id="name"
                            placeholder={!props.language ? "Enter First name" : "Entrer votre prénom"}
                            value={data.firstname}
                            onChange={handleChange}
                            name="firstname"
                            required
                        />
                        <input 
                            type="text"
                            id="lastname"
                            placeholder={!props.language ? "Enter Last name" : "Entrer votre nom"}
                            value={data.lastname}
                            onChange={handleChange}
                            name="lastname"
                            required
                        />
                    </div>
                    <div>
                        <input 
                            type="email"
                            id="email"
                            placeholder={!props.language ? "Enter email" : "Entrer votre email"}
                            value={data.email}
                            onChange={handleChange}
                            name="email"
                            required
                        />
                        <input 
                            id="Phone"
                            placeholder={!props.language ? "Enter Phone number" : "Entrer le numéro de téléphone"}
                            value={data.phonenumber}
                            onChange={handleChange}
                            name="phonenumber"
                        />
                    </div>
                    <textarea 
                        type="text"
                        placeholder="Message"
                        value={data.message}
                        onChange={handleChange}
                        name="message"
                        required
                    /><br/>
                    <br/>
                    <button>{!props.language? "Send" : "Envoyer"}</button>
                    {messageSent && <span style={{color:"white", marginLeft:"30px",fontWeight:"600"}}>{!props.language ?  "Thank you for your Message!" : "Merci pour votre Message!"}</span>}
                </div>
            </form>
            <div className="Contact--image">
                <img src={Contactimg} alt="Contactimage"/>
            </div>
        </div>
    )
}