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

export const SForm = styled.form`
  background: white;
  width: 60vh;
  min-height: 80vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 5px solid black;
  padding-top: 7vh;
  padding-bottom: 7vh;
  @media ${device.mobileL} {
    padding-top: 0;
    padding-bottom: 0;
  }
`;
export const WelcomeText = styled.h2`
  font-size: ${variables.fontBg};
  @media ${device.mobileL} {
    position: relative;
    top: 10px;
  }
`;
export const InputSection = styled.div`
  width: 80%;
  @media ${device.laptop} {
    width: 90%;
  }
`;
export const InputContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;
export const SLabel = styled.label`
  visibility: hidden;
`;
const baseInputStyles = css`
  width: 100%;
  height: 60px;
  padding: 10px;
  font-size: ${variables.fontMd};
  background-color: white;
  border: 1px solid ${variables.grayColor};
  color: ${variables.grayColor};
  border-radius: 5px;
  margin-bottom: 5px;
  outline: none;
  @media ${device.laptop} {
    padding: 5px;
    height: 50px;
    font-size: ${variables.fontMdMobile};
    margin-bottom: 0px;
  }
`;
export const SInput = styled.input`
  ${baseInputStyles};
`;

export const TextArea = styled.textarea`
  ${baseInputStyles};
  max-width: 80%;
  min-width: 80%;
  min-height: 6em;
  max-height: 6em;
  @media ${device.laptop} {
    max-width: 90%;
    min-width: 90%;
  }
`;
export const SCheckboxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 80%;
  margin-top: 20px;
  @media ${device.laptop} {
    width: 90%;
    margin-top: 10px;
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
  margin-top: 20px;
  cursor: pointer;
  @media ${device.laptop} {
    height: 60px;
  }
  @media ${device.mobileL} {
    position: relative;
    top: -10px;
  }
`;
export const SErrorContainer = styled.div`
  width: 80%;
  text-align: start;
  color: red;
  @media ${device.laptop} {
    width: 90%;
  }
`;
export const ErrorMessage = styled.span`
  padding: 3px;
  font-size: ${variables.fontSmErrorInfo};
`;
