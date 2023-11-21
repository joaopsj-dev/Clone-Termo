import styled from 'styled-components';
import { colorVariables } from '../../style/colorVariables';

export const Cell = styled.input<{ $background: string }>`
  width: 70px;
  height: 70px;

  text-align: center;
  color: ${colorVariables.textColor};
  font-size: 4em;
  font-weight: 800;

  border-radius: 5px;
  border: ${(props) => (props.$background ? 'none' : `4px solid ${colorVariables.border}`)};
  background-color: ${(props) => props.$background || 'transparent'};

  cursor: pointer;
  caret-color: transparent;

  &:focus {
    outline: none;
    border-bottom: 7px solid ${colorVariables.border};
  }
`;