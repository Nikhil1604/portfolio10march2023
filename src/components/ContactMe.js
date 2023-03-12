
const ContactMe = () => {
  return (
    <div className='ContactMe'>
        <h2>Send Me Message</h2>
        <div>
        <input type="text" placeholder="Your Name..." />
        <input type="mail" placeholder="Your email..." />
        </div>
        <textarea placeholder="Message" />

    </div>
  )
}

export default ContactMe