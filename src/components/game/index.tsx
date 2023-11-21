import React, { useState } from 'react'
import * as S from './styled'
import { Button } from '../button'
import words from '../../utils/word'
import { Row } from '../row'
import { Text } from '../text'

export interface RowValue {
  0: string
  1: string
  2: string
  3: string
  4: string
}

export interface GameContextValue {
  randomWord: string
  attempt: number
  rowsValue: RowValue[]
  resetGame: boolean
  inputToFocus: number
  setIsFinaly: React.Dispatch<React.SetStateAction<Finaly>>
  setInputToFocus: React.Dispatch<React.SetStateAction<number>>
  setRowsValue: React.Dispatch<React.SetStateAction<RowValue[]>>
  setResetGame: React.Dispatch<React.SetStateAction<boolean>>
}

export const GameContext = React.createContext({});

export type Finaly = 'Win' | 'Lose' | null

export function Game() {

  const [randomWord, setRandomWord] = useState("");

  React.useEffect(() => {
    generateWord();
  }, []);

  const [ rowsValue, setRowsValue ] = React.useState<RowValue[]>([
    {0: '', 1: '', 2: '', 3: '', 4: ''},
    {0: '', 1: '', 2: '', 3: '', 4: ''},
    {0: '', 1: '', 2: '', 3: '', 4: ''},
    {0: '', 1: '', 2: '', 3: '', 4: ''},
    {0: '', 1: '', 2: '', 3: '', 4: ''}
  ])

  const [ attempt, setAttempt ] = useState(0)
  const [ inputToFocus, setInputToFocus ] = useState(0)
  const [ isFinaly, setIsFinaly ] = useState<Finaly>(null)
  const [ resetGame, setResetGame ] = useState(false)

  const valueContextFactory: GameContextValue = {
    randomWord,
    attempt,
    rowsValue,
    resetGame,
    inputToFocus,
    setIsFinaly,
    setRowsValue,
    setInputToFocus,
    setResetGame
  }

  function generateWord() {
    const randomWord = words[Math.floor(Math.random() * words.length)];

    const regex = /^[a-zA-Z]{5}$/;
    if (!regex.test(randomWord)) {
      return generateWord();
    }     
    setRandomWord(randomWord.toUpperCase());
  }

  function play() {
    const currentRowValue = Object.values(rowsValue[attempt]).map(String)
    if (currentRowValue.includes('')) {
      return alert("Erro, Todas as Celulas Precisam Ser Preenchidas");
    }
    setAttempt(attempt => attempt + 1)
    setInputToFocus(0)
  }

  function restartGame() {
    setResetGame(true)
    setAttempt(0);
    setIsFinaly(null)
    generateWord();
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.code === "Enter") {
      play();
    }
  }

  return (
  <S.Game>
   <GameContext.Provider value={valueContextFactory}>
    <Text attempt={attempt} isFinaly={isFinaly} word={randomWord} key={10}/>
    <ul onKeyDown={handleKeyDown}>
      <Row rowIndex={0} key={0}/>
      <Row rowIndex={1} key={1}/>
      <Row rowIndex={2} key={2}/>
      <Row rowIndex={3} key={3}/>
      <Row rowIndex={4} key={4}/>
    </ul>
    <Button isFinaly={isFinaly} play={play} restartGame={restartGame} key={20}/>
   </GameContext.Provider>
  </S.Game>
  )
}
