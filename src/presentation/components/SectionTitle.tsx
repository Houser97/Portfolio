import '../styles/SectionTitle.css'

interface Props {
  title: string
}

const SectionTitle = ({title}: Props) => {
  return (
    <h1 className='app__section-title'>
        <span className='color-line-left color-line'></span>
        <div className='section-title-container'>{title}</div>
        <span className='color-line-right color-line'></span>
    </h1>
  )
}

export default SectionTitle