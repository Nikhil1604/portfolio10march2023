import "./card.css"
function CardBox(props) {
    return(
        <div className="Box">
            <img src={props.im} alt="just"/>
            <h3>{props.heading}</h3>
            <p>{props.details}</p>
         </div>
    )
    
  }
const Card = () => {
  
return (
    <div className='Card'>
        <CardBox  im="https://www.shutterstock.com/image-vector/vector-desktop-computer-icon-600w-210054382.jpg" heading="Web Development" details="Excepteur et nostrud deserunt reprehenderit duis cillum amet enim laborum ut dolor." />
        <CardBox  im="https://www.shutterstock.com/image-vector/vector-desktop-computer-icon-600w-210054382.jpg" heading="Web Design" details="Excepteur et nostrud deserunt reprehenderit duis cillum amet enim laborum ut dolor." />
        <CardBox  im="https://www.shutterstock.com/image-vector/vector-desktop-computer-icon-600w-210054382.jpg" heading="App Design" details="Excepteur et nostrud deserunt reprehenderit duis cillum amet enim laborum ut dolor." />
    </div>
  )
}

export default Card