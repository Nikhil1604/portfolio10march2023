import ContactMe from "./ContactMe"
import SocialMedia from "./SocialMedia"
import "./contact.css"

const Contact = () => {
  return (
    <div className='Contact'>
        <h2>Contact</h2>
        <div className="ContactSub">
            <ContactMe />
            <SocialMedia />
        </div>
    </div>
  )
}

export default Contact