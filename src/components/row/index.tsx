import React from 'react'
import * as S from './styled'
import { GameContext, GameContextValue } from '../game'
import { colorVariables } from '../../style/colorVariables'
import { Cell } from '../cell'

interface RowProps {
  rowIndex: number
}

export function Row(props: RowProps) {
  const [ cellsBackgroud, setCellsBackgroud ] = React.useState(["","","","",""])

  const { attempt, randomWord, rowsValue, setIsFinaly }: GameContextValue = React.useContext(GameContext) as GameContextValue

  function checkedWin() {
    let newBackgroundCells = ["","","","",""]
    const rowValue = Object.values(rowsValue[props.rowIndex]).map(String).join("")

    for (let i = 0; i < cellsBackgroud.length; i++) {
      if (randomWord.includes(rowValue[i])) {
        newBackgroundCells[i] = colorVariables.almost;
      } else {
        newBackgroundCells[i] = colorVariables.incorrect;
      }
      if (randomWord[i] === rowValue[i]) {
        newBackgroundCells[i] = colorVariables.correct;
      }
    }

    setCellsBackgroud(newBackgroundCells)

    if (randomWord === rowValue) {
      setIsFinaly('Win');
    } else if (randomWord !== rowValue && attempt >= 5) {
      setIsFinaly('Lose');
    }
  }

  React.useEffect(() => {
    if (attempt === props.rowIndex + 1) {
      checkedWin();
    }
  }, [attempt]);

  return (
    <S.Row>
      <Cell 
      cellIndex={0}
      rowIndex={props.rowIndex}
      background={cellsBackgroud[0]}
      />
      <Cell 
      cellIndex={1}
      rowIndex={props.rowIndex}
      background={cellsBackgroud[1]}
      />
      <Cell 
      cellIndex={2}
      rowIndex={props.rowIndex}
      background={cellsBackgroud[2]}
      />
      <Cell 
      cellIndex={3}
      rowIndex={props.rowIndex}
      background={cellsBackgroud[3]}
      />
      <Cell 
      cellIndex={4}
      rowIndex={props.rowIndex}
      background={cellsBackgroud[4]}
      />
    </S.Row>
  )
}