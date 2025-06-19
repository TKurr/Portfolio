import { CONTACT } from '../constants'
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className='my-12 flex flex-col items-start'>
      <h2 className='text-center text-3xl mb-8'>Contact
        <span className='text-purple-800'> Information</span>
      </h2>
      <div className='tracking-tighter'>
        <div className='flex items-center gap-2'>
          <div><FaWhatsapp/></div>
          <p>{CONTACT.phoneNo}</p>
        </div>
        <div className='flex items-center gap-2 mt-2'>
          <div><MdOutlineEmail /></div>
          <a className='border-b hover:border-purple-700 hover:text-purple-700' href="https://mail.google.com/mail/?view=cm&fs=1&to=theokurniady12@gmail.com&su=SUBJECT&body=BODY">{CONTACT.email}</a>
        </div>
      </div>
    </div>
  );
};

export default Contacts
