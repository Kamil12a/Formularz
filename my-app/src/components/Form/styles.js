import styled, { css } from "styled-components";
import { device } from "../../styles/variables";
import { variables } from "../../styles/variables";
export const MainContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
`;
export const SForm = styled.div`
  background: white;
  width: 60vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 2 px solid black;
  background-color: #f9f9f9;
  border: 5px solid black;
  padding-top: 20px;
  padding-bottom: 20px;
  @media ${device.mobileL} {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;
export const WelcomeText = styled.h2`
  font-size: ${variables.fontBg};
  text-align: center;
`;

export const SLabel = styled.label`
  visibility: hidden;
`;
const baseInputStyles = css`
  width: 80%;
  height: 60px;
  padding: 10px;
  margin-bottom: 10px;
  font-size: ${variables.fontMd};
  background-color: white;
  border: 1px solid ${variables.grayColor};
  color: ${variables.grayColor};
  border-radius: 5px;
  outline: none;
  @media ${device.laptop} {
    width: 90%;
    padding: 5px;
    height: 50px;
    font-size: ${variables.fontMdMobile};
    margin-bottom: 0px;
  }
`;
export const SInput = styled.input`
  ${baseInputStyles}
`;

export const TextArea = styled.textarea`
  ${baseInputStyles}
  max-width: 80%;
  min-width: 80%;
  min-height: 6em;
  max-height: 6em;
  margin-bottom: 20px;
  @media ${device.laptop} {
    max-width: 90%;
    min-width: 90%;
    margin-bottom: 10px;
  }
`;
export const SCheckboxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 80%;
  margin-bottom: 20px;
  @media ${device.laptop} {
    width: 90%;
    margin-bottom: 10px;
  }
`;
export const SLabelCheckBox = styled.label`
  padding-left: 10px;
  font-size: ${variables.fontSm};
  color: ${variables.grayColor};
  letter-spacing: 1.2px;
  line-height: 1.4em;
`;
export const ScheckBox = styled.input`
  border-color: ${variables.grayColor};
`;
export const SButton = styled.button`
  background-color: #ffb434;
  border: none;
  border-radius: 60px;
  width: 60%;
  height: 70px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  @media ${device.laptop} {
    height: 60px;
  }
`;
