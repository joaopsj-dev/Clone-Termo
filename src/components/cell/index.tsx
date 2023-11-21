import React from 'react'
import * as S from './styled'
import { GameContext, GameContextValue, RowValue } from '../game'

interface CellProps {
  rowIndex: number
  cellIndex: number
  background: string
}

function changeCellValue(rows: RowValue[], rowIndex: number, cellIndex: number, value: string) {
  return {
    ...rows,
    [rowIndex]: {...rows[rowIndex], [cellIndex]: value}
  }
}

export function Cell(props: CellProps) {
  const [ value, setValue ] = React.useState("")
  const inputRef = React.useRef<HTMLInputElement>(null);

  const { attempt, resetGame, inputToFocus, setRowsValue, setInputToFocus }: GameContextValue = React.useContext(GameContext) as GameContextValue

  React.useEffect(() => {
    if (resetGame) {
      setValue("");
    }
  }, [resetGame]);

  React.useEffect(() => {
    if (inputToFocus === props.cellIndex && inputRef.current)
      inputRef.current.focus();
  }, [inputToFocus]);

  function changeFocusInput (value: number) {
    console.log(inputToFocus);
    
    if (inputToFocus >= 0 && inputToFocus <= 4) {
      if (!(inputToFocus === 0 && value === -1) && !(inputToFocus === 4 && value === 1)) {
        setInputToFocus(target => target + value);
      }
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.code === 'Backspace') {
      setValue("")
      setRowsValue(rows => changeCellValue(rows, props.rowIndex, props.cellIndex, ""))
    } else if (event.code === 'ArrowLeft') {
      changeFocusInput(-1)
    } else if (event.code === 'ArrowRight') {
      changeFocusInput(+1)
    }

    const regex = /[A-Za-z]/;
    if (regex.test(event.key) && event.code.includes('Key')) {
      const targetValue = event.key.slice(-1).toUpperCase();
      setValue(targetValue)
      setRowsValue(rows => changeCellValue(rows, props.rowIndex, props.cellIndex, targetValue))
      changeFocusInput(+1)
    }
  }

  return (
    <S.Cell
    value={value}
    ref={inputRef}
    disabled={props.rowIndex !== attempt}
    $background={props.background}
    onKeyDown={handleKeyDown}
    onClick={() => setInputToFocus(props.cellIndex)}
    onChange={() => {}}
    />
  )
}