import Icon from '../../assets/logo.svg'

import { Container } from './styles'

export function Logo( ) {

  return (
    <Container>
      <img src={Icon} alt="Logo Food Explorer" width={43.31} height={43.31} />
      <div>
        <h2>food explorer</h2>
        
      </div>
    </Container>
  )
}



