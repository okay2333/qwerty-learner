import { useNavigate } from 'react-router-dom'
import IconBook from '~icons/bxs/book'

const FeaturesButton = () => {
  const navigate = useNavigate()

  const toNewFeatures = () => {
    navigate('/features')
    console.log('toNewFeatures')
  }
  return (
    <button type="button" onClick={toNewFeatures}>
      <IconBook className="icon" />
    </button>
  )
}

export default FeaturesButton
