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
      <a href="https://www.linkedin.com/in/novak-dev/" className='social-icon w-8 h-8 block' target="_blank">
      <svg class="linkedin-icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="14.5" fill="white" stroke="#17252A"/>
        <mask id="path-2-inside-1_81_429" fill="white">
        <path class="first-path" d="M15 0C6.71563 0 0 6.71563 0 15C0 23.2844 6.71563 30 15 30C23.2844 30 30 23.2844 30 15C30 6.71563 23.2844 0 15 0ZM11.3281 21.2172H8.29062V11.4422H11.3281V21.2172ZM9.79062 10.2422C8.83125 10.2422 8.21094 9.5625 8.21094 8.72187C8.21094 7.86406 8.85 7.20469 9.82969 7.20469C10.8094 7.20469 11.4094 7.86406 11.4281 8.72187C11.4281 9.5625 10.8094 10.2422 9.79062 10.2422ZM22.4219 21.2172H19.3844V15.8C19.3844 14.5391 18.9437 13.6828 17.8453 13.6828C17.0062 13.6828 16.5078 14.2625 16.2875 14.8203C16.2062 15.0187 16.1859 15.3 16.1859 15.5797V21.2156H13.1469V14.5594C13.1469 13.3391 13.1078 12.3187 13.0672 11.4406H15.7062L15.8453 12.7984H15.9062C16.3062 12.1609 17.2859 11.2203 18.925 11.2203C20.9234 11.2203 22.4219 12.5594 22.4219 15.4375V21.2172Z"/>
        </mask>
        <path d="M15 0C6.71563 0 0 6.71563 0 15C0 23.2844 6.71563 30 15 30C23.2844 30 30 23.2844 30 15C30 6.71563 23.2844 0 15 0ZM11.3281 21.2172H8.29062V11.4422H11.3281V21.2172ZM9.79062 10.2422C8.83125 10.2422 8.21094 9.5625 8.21094 8.72187C8.21094 7.86406 8.85 7.20469 9.82969 7.20469C10.8094 7.20469 11.4094 7.86406 11.4281 8.72187C11.4281 9.5625 10.8094 10.2422 9.79062 10.2422ZM22.4219 21.2172H19.3844V15.8C19.3844 14.5391 18.9437 13.6828 17.8453 13.6828C17.0062 13.6828 16.5078 14.2625 16.2875 14.8203C16.2062 15.0187 16.1859 15.3 16.1859 15.5797V21.2156H13.1469V14.5594C13.1469 13.3391 13.1078 12.3187 13.0672 11.4406H15.7062L15.8453 12.7984H15.9062C16.3062 12.1609 17.2859 11.2203 18.925 11.2203C20.9234 11.2203 22.4219 12.5594 22.4219 15.4375V21.2172Z" fill="#17252A"/>
        <path d="M11.3281 21.2172V22.2172H12.3281V21.2172H11.3281ZM8.29062 21.2172H7.29062V22.2172H8.29062V21.2172ZM8.29062 11.4422V10.4422H7.29062V11.4422H8.29062ZM11.3281 11.4422H12.3281V10.4422H11.3281V11.4422ZM11.4281 8.72187H12.4281V8.71095L12.4279 8.70002L11.4281 8.72187ZM22.4219 21.2172V22.2172H23.4219V21.2172H22.4219ZM19.3844 21.2172H18.3844V22.2172H19.3844V21.2172ZM16.2875 14.8203L17.213 15.1993L17.2176 15.1877L16.2875 14.8203ZM16.1859 21.2156V22.2156H17.1859V21.2156H16.1859ZM13.1469 21.2156H12.1469V22.2156H13.1469V21.2156ZM13.0672 11.4406V10.4406H12.0199L12.0683 11.4868L13.0672 11.4406ZM15.7062 11.4406L16.701 11.3387L16.6091 10.4406H15.7062V11.4406ZM15.8453 12.7984L14.8505 12.9003L14.9425 13.7984H15.8453V12.7984ZM15.9062 12.7984V13.7984H16.4593L16.7533 13.3299L15.9062 12.7984ZM15 -1C6.16334 -1 -1 6.16334 -1 15H1C1 7.26791 7.26791 1 15 1V-1ZM-1 15C-1 23.8367 6.16334 31 15 31V29C7.26791 29 1 22.7321 1 15H-1ZM15 31C23.8367 31 31 23.8367 31 15H29C29 22.7321 22.7321 29 15 29V31ZM31 15C31 6.16334 23.8367 -1 15 -1V1C22.7321 1 29 7.26791 29 15H31ZM11.3281 20.2172H8.29062V22.2172H11.3281V20.2172ZM9.29062 21.2172V11.4422H7.29062V21.2172H9.29062ZM8.29062 12.4422H11.3281V10.4422H8.29062V12.4422ZM10.3281 11.4422V21.2172H12.3281V11.4422H10.3281ZM9.79062 9.24219C9.55583 9.24219 9.42169 9.16372 9.34812 9.09016C9.27117 9.01321 9.21094 8.89222 9.21094 8.72187H7.21094C7.21094 10.1148 8.27896 11.2422 9.79062 11.2422V9.24219ZM9.21094 8.72187C9.21094 8.54868 9.27138 8.4344 9.34696 8.36154C9.42268 8.28855 9.56933 8.20469 9.82969 8.20469V6.20469C9.11035 6.20469 8.44763 6.45051 7.95889 6.92166C7.47002 7.39294 7.21094 8.03725 7.21094 8.72187H9.21094ZM9.82969 8.20469C10.0869 8.20469 10.219 8.28616 10.2857 8.35223C10.3563 8.42219 10.424 8.54484 10.4284 8.74373L12.4279 8.70002C12.4135 8.04109 12.1718 7.40516 11.6928 6.93097C11.21 6.4529 10.5522 6.20469 9.82969 6.20469V8.20469ZM10.4281 8.72187C10.4281 8.89178 10.369 9.00748 10.2933 9.08129C10.2197 9.15304 10.0711 9.24219 9.79062 9.24219V11.2422C10.5289 11.2422 11.1991 10.9915 11.6895 10.5132C12.1779 10.037 12.4281 9.3926 12.4281 8.72187H10.4281ZM22.4219 20.2172H19.3844V22.2172H22.4219V20.2172ZM20.3844 21.2172V15.8H18.3844V21.2172H20.3844ZM20.3844 15.8C20.3844 15.0819 20.2639 14.3223 19.8591 13.7144C19.4102 13.04 18.699 12.6828 17.8453 12.6828V14.6828C17.9885 14.6828 18.0614 14.7101 18.0944 14.7269C18.1246 14.7423 18.1572 14.7669 18.1944 14.8227C18.2845 14.9581 18.3844 15.2572 18.3844 15.8H20.3844ZM17.8453 12.6828C16.4487 12.6828 15.6661 13.6715 15.3574 14.453L17.2176 15.1877C17.28 15.0297 17.3724 14.8959 17.4754 14.8099C17.5646 14.7354 17.6753 14.6828 17.8453 14.6828V12.6828ZM15.3621 14.4414C15.1995 14.8384 15.1859 15.2964 15.1859 15.5797H17.1859C17.1859 15.4607 17.1904 15.3628 17.1995 15.2859C17.2092 15.203 17.22 15.182 17.2129 15.1992L15.3621 14.4414ZM15.1859 15.5797V21.2156H17.1859V15.5797H15.1859ZM16.1859 20.2156H13.1469V22.2156H16.1859V20.2156ZM14.1469 21.2156V14.5594H12.1469V21.2156H14.1469ZM14.1469 14.5594C14.1469 13.3171 14.1071 12.2796 14.0661 11.3944L12.0683 11.4868C12.1086 12.3579 12.1469 13.361 12.1469 14.5594H14.1469ZM13.0672 12.4406H15.7062V10.4406H13.0672V12.4406ZM14.7115 11.5425L14.8505 12.9003L16.8401 12.6966L16.701 11.3387L14.7115 11.5425ZM15.8453 13.7984H15.9062V11.7984H15.8453V13.7984ZM16.7533 13.3299C17.0188 12.9068 17.7123 12.2203 18.925 12.2203V10.2203C16.8596 10.2203 15.5937 11.4151 15.0592 12.2669L16.7533 13.3299ZM18.925 12.2203C19.6934 12.2203 20.2771 12.471 20.6792 12.9182C21.0915 13.3768 21.4219 14.1644 21.4219 15.4375H23.4219C23.4219 13.8324 23.003 12.5115 22.1665 11.581C21.3197 10.6392 20.155 10.2203 18.925 10.2203V12.2203ZM21.4219 15.4375V21.2172H23.4219V15.4375H21.4219Z" fill="#17252A" mask="url(#path-2-inside-1_81_429)"/>
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
