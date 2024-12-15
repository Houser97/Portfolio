import '../styles/TechCard.css'

interface Props {
  classIcon: string;
  text: string;
  isDevicon: boolean
}

const TechCard = ({classIcon, text, isDevicon}: Props) => {
  return (
    <div className='app__TechCard'>
        {isDevicon ? 
          (<i className={classIcon}></i>)
          :
          (<img alt='tech' src={classIcon} className = 'img-tech'></img>
        )}
        <div className='app__TechCard-text'>{text}</div>
    </div>
  )
}

export default TechCard