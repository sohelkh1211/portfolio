import React from "react";
import { contact } from "../constants";
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {

    return (
        <div className="relative flex flex-col rounded-[25px] mx-auto bg-gradient-to-tr from-[#d49af4] to-[#7EE8FA] sm:w-[60%] sm:h-[300px] xs:w-[70%] xs:h-[250px] md:h-[300px] top-[1100px]">
            <div className="flex flex-row lg:w-[50%] md:w-[60%] md:h-[60px] xs:h-[40px] xs:ml-6 mt-7 md:ml-10 justify-start">
                <h1 className="lg:text-[40px] md:text-[35px] sm:text-[30px] xs:text-[30px] bg-gradient-to-tr from-[#6366f1] to-[#3c366b] bg-clip-text text-transparent">Get In Touch</h1>
            </div>
            <div className="relative flex pl-1 pt-4 mt-7 md:ml-10 xs:ml-6 lg:w-[50%] lg:h-[50%] md:w-[70%] md:h-[50%] sm:w-[80%] sm:h-[50%] xs:w-[80%] xs:h-[50%]">
                <ul className="list-none grid grid-rows-2 grid-cols-2 gap-y-0.2 gap-x-5">
                    {contact.map((contact) => (
                        <li
                            key={contact.id}
                            className="flex items-center justify-between gap-x-1"
                        >
                            {/* <img src={`${contact.name === "sohelkh1211" ? 'GitHubIcon' : ''}`} /> */}
                            {contact.name === "sohelkh1211" ? <GitHubIcon sx={{ fontSize: { sm: '24px', xs: '20px' } }}/> : contact.name === 'Sohel Khan' ? <MailIcon sx={{ fontSize: { sm: '24px', xs: '20px' } }}/> : contact.name === 'khan_sohel29' ? <InstagramIcon sx={{ fontSize: { sm: '24px', xs: '20px' } }}/> : contact.name === 'Khan Sohel' ? <LinkedInIcon  sx={{ fontSize: { sm: '24px', xs: '20px' } }}/> : ''}
                            <div>
                                <p className={`${contact.name === "Sohel Khan" || contact.name === "sohelkh1211" ? 'text-[#bf1598] sm:text-[22px] xs:text-[15px]' : ''} ${contact.name === "Khan Sohel" ? 'text-[#bf1598] sm:text-[22px] xs:text-[15px]' : ''} ${contact.name === "khan_sohel29" ? 'text-[#bf1598] sm:text-[20px] xs:text-[15px]' : ''}`}>
                                    <a href={`${contact.link}`}>{contact.name}</a>
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Contact;