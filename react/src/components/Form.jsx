import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { gsap } from 'gsap';
import FormMessage from './FormMessage';

const ContactForm = () => {
  const [messageStatus, setMessageStatus] = useState(null);
  const form = useRef();
  const messageRef = useRef(null);

  useEffect(() => {
    if (messageStatus !== null) {
      gsap.to(messageRef.current, { autoAlpha: 1, duration: 0.5 });
      const timeout = setTimeout(() => {
        gsap.to(messageRef.current, { autoAlpha: 0, duration: 0.5, onComplete: () => setMessageStatus(null) });
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [messageStatus]);

  const sendEmail = (e) => {
    e.preventDefault();
    const name = form.current['name'].value.trim();
    const email = form.current['email'].value.trim();
    const subject = form.current['subject'].value.trim();
    const message = form.current['message'].value.trim();
    if (!name || !email || !subject || !message) {
      setMessageStatus(false);
      return;
    } else {
      emailjs
        .sendForm('service_ytrx4a7', 'template_2oo1cno', form.current, {
          publicKey: 'y7s3YQZdaDsNZF0Ge',
        })
        .then(
          () => {
            form.current.reset();
            setMessageStatus(true);
          },
          (error) => {
            setMessageStatus(false);
          }
        );
    }
  };
  return (
    <div className='md:w-3/4 m-auto'>
    <p className='mb-8 text-x-large xxl:text-[1.5rem] leading-14'><span className='text-dark-green font-medium'>Ready to turn ideas into reality?</span> Let's collaborate and bring your vision to life. Contact me today to discuss your project and take the first step towards success.</p>
    <form ref={form} onSubmit={sendEmail} className="grid grid-cols-2 gap-4">
      <div className="col-span-2 md:col-span-1">
        <input type="text" placeholder='Name' id="name" name="name" className="w-full px-3 py-2 rounded-md outline outline-light-green focus:outline-dark-green outline-2" />
      </div>
      <div className="col-span-2 md:col-span-1">
        <input placeholder='E-mail' type="email" id="email" name="email" className="w-full px-3 py-2 rounded-md outline outline-light-green focus:outline-dark-green outline-2" />
      </div>
      <div className="col-span-2">
        <input placeholder='Subject' type="text" id="subject" name="subject" className="w-full px-3 py-2 rounded-md outline outline-light-green focus:outline-dark-green outline-2" />
      </div>
      <div className="col-span-2">
        <textarea placeholder="Message" id="message" name="message" rows="6" className="w-full px-3 py-2 rounded-md outline outline-light-green focus:outline-dark-green outline-2"></textarea>
      </div>
      <div className="col-span-2 flex justify-between items-center">
      <button type="submit" className="bg-almost-black text-white text-center py-2 px-8 rounded-full leading-4 w-full block tracking-wider border-almost-black border hover:bg-almost-white hover:text-almost-black cursor-pointer w-max text-[0.85rem] mt-2">Submit</button>
      <div className='social-bar flex gap-2'>
      <a href="" className='social-icon w-8 h-8 block'>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_81_4)">
        <path d="M22.9688 0H7.03125C3.148 0 0 3.148 0 7.03125V22.9688C0 26.852 3.148 30 7.03125 30H22.9688C26.852 30 30 26.852 30 22.9688V7.03125C30 3.148 26.852 0 22.9688 0Z" fill="white"/>
        <path d="M22.9688 0H7.03125C3.148 0 0 3.148 0 7.03125V22.9688C0 26.852 3.148 30 7.03125 30H22.9688C26.852 30 30 26.852 30 22.9688V7.03125C30 3.148 26.852 0 22.9688 0Z" fill="#17252A"/>
        <path d="M21.6463 25.51H25.0764C25.2007 25.51 25.3199 25.4606 25.4078 25.3727C25.4957 25.2848 25.5451 25.1656 25.5451 25.0413L25.5469 17.7942C25.5469 14.0064 24.7307 11.0948 20.3041 11.0948C18.6214 11.0323 17.0346 11.8997 16.1783 13.3481C16.1741 13.3552 16.1678 13.3606 16.1602 13.3637C16.1526 13.3668 16.1442 13.3673 16.1363 13.3651C16.1284 13.363 16.1214 13.3583 16.1164 13.3519C16.1114 13.3454 16.1087 13.3374 16.1086 13.3293V11.9133C16.1086 11.789 16.0592 11.6697 15.9713 11.5818C15.8834 11.4939 15.7642 11.4445 15.6398 11.4445H12.3847C12.2604 11.4445 12.1412 11.4939 12.0533 11.5818C11.9654 11.6697 11.916 11.789 11.916 11.9133V25.0406C11.916 25.1649 11.9654 25.2842 12.0533 25.3721C12.1412 25.46 12.2604 25.5094 12.3847 25.5094H15.8146C15.9389 25.5094 16.0581 25.46 16.146 25.3721C16.2339 25.2842 16.2833 25.1649 16.2833 25.0406V18.5516C16.2833 16.7168 16.6314 14.9399 18.9061 14.9399C21.1485 14.9399 21.1775 17.0394 21.1775 18.6704V25.0412C21.1775 25.1655 21.2269 25.2848 21.3148 25.3727C21.4027 25.4606 21.522 25.51 21.6463 25.51ZM4.45312 6.98766C4.45312 8.37797 5.5977 9.52195 6.98813 9.52195C8.3782 9.52184 9.52207 8.37715 9.52207 6.98707C9.52184 5.59699 8.37785 4.45312 6.98766 4.45312C5.59711 4.45312 4.45312 5.59734 4.45312 6.98766ZM5.26863 25.51H8.70305C8.82737 25.51 8.9466 25.4606 9.0345 25.3727C9.12241 25.2848 9.1718 25.1655 9.1718 25.0412V11.9133C9.1718 11.789 9.12241 11.6697 9.0345 11.5818C8.9466 11.4939 8.82737 11.4445 8.70305 11.4445H5.26863C5.14431 11.4445 5.02508 11.4939 4.93718 11.5818C4.84927 11.6697 4.79988 11.789 4.79988 11.9133V25.0412C4.79988 25.1655 4.84927 25.2848 4.93718 25.3727C5.02508 25.4606 5.14431 25.51 5.26863 25.51Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_81_4">
        <rect width="30" height="30" fill="white"/>
        </clipPath>
        </defs>
      </svg>
      </a>
      <a href="" className='social-icon w-8 h-8 block'>
      <svg className='w-full h-full border border-black rounded-full group' fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="-143 145 512 512" xml:space="preserve">
      <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M169.5,357.6l-2.9,38.3h-39.3
        v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3,0.3-28.8,8.5-39.7c8.7-11.5,20.6-19.3,41.1-19.3c33.4,0,47.4,4.8,47.4,4.8l-6.6,39.2
        c0,0-11-3.2-21.3-3.2c-10.3,0-19.5,3.7-19.5,14v29.9H169.5z"/>
      </svg>
      </a>
      <a href="" className='social-icon w-8 h-8 block'>
      <svg className='w-full h-full border border-black rounded-full group' fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="-143 145 512 512" xml:space="preserve">
        <g>
          <path d="M113,446c24.8,0,45.1-20.2,45.1-45.1c0-9.8-3.2-18.9-8.5-26.3c-8.2-11.3-21.5-18.8-36.5-18.8s-28.3,7.4-36.5,18.8
            c-5.3,7.4-8.5,16.5-8.5,26.3C68,425.8,88.2,446,113,446z"/>
          <polygon points="211.4,345.9 211.4,308.1 211.4,302.5 205.8,302.5 168,302.6 168.2,346 	"/>
          <path d="M183,401c0,38.6-31.4,70-70,70c-38.6,0-70-31.4-70-70c0-9.3,1.9-18.2,5.2-26.3H10v104.8C10,493,21,504,34.5,504h157
            c13.5,0,24.5-11,24.5-24.5V374.7h-38.2C181.2,382.8,183,391.7,183,401z"/>
          <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,374.7v104.8
            c0,27.3-22.2,49.5-49.5,49.5h-157C7.2,529-15,506.8-15,479.5V374.7v-52.3c0-27.3,22.2-49.5,49.5-49.5h157
            c27.3,0,49.5,22.2,49.5,49.5V374.7z"/>
        </g>
        </svg>
      </a>
    </div>
      </div>
    </form>
    <div ref={messageRef} className='opacity-0'>
    {(messageStatus === true) && <FormMessage headline="Success!" message="Thank you for your message! We will get back to you within 24 hours. 🚀" />}
    {(messageStatus === false) && <FormMessage headline="Something went wrong... 😔" message="Please check your entered data. All fields must be filled." />}
    </div>
    </div>
  );
};

export default ContactForm;
