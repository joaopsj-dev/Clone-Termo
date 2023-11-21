import React, { useState } from 'react'
import * as S from './styled'

export interface RowValue {
  0: string
  1: string
  2: string
  3: string
  4: string
  5: string
}

export const GameContext = React.createContext({});

export function Game() {

  const [ rowsValue, setRowsValue ] = React.useState<RowValue[]>([
    {0: '', 1: '', 2: '', 3: '', 4: '', 5: ''},
    {0: '', 1: '', 2: '', 3: '', 4: '', 5: ''},
    {0: '', 1: '', 2: '', 3: '', 4: '', 5: ''},
    {0: '', 1: '', 2: '', 3: '', 4: '', 5: ''},
    {0: '', 1: '', 2: '', 3: '', 4: '', 5: ''}
  ])

  const [ inputToFocus, setInputToFocus ] = useState(0)
  const [ resetGame, setResetGame ] = useState(false)

  const valueContextFactory = {
    rowsValue,
    setRowsValue,
    resetGame,
    inputToFocus,
    setInputToFocus
  }

  return (
  <S.Game>
   <GameContext.Provider value={valueContextFactory}>

   </GameContext.Provider>
  </S.Game>
  )
}
