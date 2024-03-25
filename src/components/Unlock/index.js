import {useState} from 'react'

import {
  UnlockContainer,
  Image,
  Describe,
  ButtonElement,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, setLockStatus] = useState(false)
  const textValue = isLocked
    ? 'Your Device is Locked'
    : 'Your Device is Unlocked'
  const btnValue = isLocked ? 'Unlock' : 'Lock'
  const ImageUrl = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const altText = isLocked ? 'lock' : 'unlock'
  const onChangeLockStatus = () => {
    setLockStatus(prevState => !prevState)
  }
  return (
    <UnlockContainer>
      <Image src={ImageUrl} alt={altText} />
      <Describe>{textValue}</Describe>
      <ButtonElement type="button" onClick={onChangeLockStatus}>
        {btnValue}
      </ButtonElement>
    </UnlockContainer>
  )
}

export default Unlock
