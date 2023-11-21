import { Finaly } from "../game";

interface TextProps {
  isFinaly: Finaly
  attempt: number
  word: string 
}

export function Text({ isFinaly, word, attempt }: TextProps) {
  return isFinaly 
  ? <h1>{isFinaly} <br /> Palavra: {word}</h1>
  : <h1>Palavra em Portuguẽs  <br /> Tentativa {attempt + 1}</h1>
}