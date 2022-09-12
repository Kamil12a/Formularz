import styled, { css } from "styled-components";
import { device } from "../../styles/variables";
import { variables } from "../../styles/variables";
export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: black;
`;
export const SForm = styled.div`
  background: white;
  width: 60vh;
  height: 80vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 2 px solid black;
  background-color: #f9f9f9;
  padding-top: 30px;
  padding-bottom: 30px;
`;
export const WelcomeText = styled.h2`
  font-size: 1.6em;
  text-align: center;
`;

export const SLabel = styled.label`
  visibility: hidden;
`;
const baseInputStyles = css`
  width: 80%;
  height: 60px;
  padding: 10px;
  font-size: ${variables.fontParagraph};
  background-color: white;
  border: 1px solid ${variables.grayColor};
  color: ${variables.grayColor};
  border-radius: 5px;
  outline: none;
`;
export const SInput = styled.input`
  ${baseInputStyles}
`;

export const TextArea = styled.textarea`
  ${baseInputStyles}
  max-width: 80%;
  min-width: 80%;
  min-height: 10em;
  max-height: 10em;
`;
