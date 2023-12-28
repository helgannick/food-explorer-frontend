import Icon from '../../assets/logo.svg'

import { Container } from './styles'

export function Logo( ) {

  return (
    <Container>
      <img src={Icon} alt="Logo Food Explorer" width={27} height={27} />
      <div>
        <h2>food explorer</h2>
        
      </div>
    </Container>
  )
}



