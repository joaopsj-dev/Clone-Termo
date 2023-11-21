import { Finaly } from '../game'
import * as S from './style'

interface ButtonProps {
  isFinaly: Finaly
  play: () => void
  restartGame: () => void
}

export function Button({isFinaly, play, restartGame}: ButtonProps) {
  return isFinaly 
  ? <S.Button onClick={() => restartGame()}>Reiniciar</S.Button>
  : <S.Button onClick={() => play()}>Enviar</S.Button>
}