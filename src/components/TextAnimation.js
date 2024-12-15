import '../styles/TextAnimation.css'

const TextAnimation = () => {
  return (
    <div className='textAnimation__container'>
        <div className="textAnimation__box">

            <div className="textAnimation__title">
                <span className="textAnimation__block"></span>
                <h1>Arturo Rivera<span className='textAnimation__ball'></span></h1>
            </div>

            <div className="textAnimation__role">
                <div className="textAnimation__block"></div>
                <p>Full Stack Developer</p>
            </div>
        </div>
    </div>
  )
}

export default TextAnimation