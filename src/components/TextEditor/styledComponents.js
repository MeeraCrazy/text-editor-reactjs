import styled from 'styled-components'

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  fobnt-size: 20px;
  text-align: center;
  font-weight: bold;
  padding: 10px;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.color};
`

export const UnderlineButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.color};
`

export const ItalicButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.color};
`

export const ImageElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const Image = styled.img`
  height: 350px;
  width: 350px;
`

export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #25262c;
  border: 1px solid #cbd5e1;
  min-height: 120vh;
  min-width: 30vw;
  margin-left: 30px;
  border-radius: 9px;
`

export const HrElement = styled.hr`
  border: 1px solid #cbd5e1;
  width: 100%;
`

export const ButtonContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  padding-left: 0;
  margin: 10px;
`

export const TextAreaElement = styled.textarea`
  background-color: transparent;
  border: none;
  outline: none;
  margin: 20px;
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 20px;
  font-style: ${props => props.fontStyle};
  font-weight: ${props => props.fontWeight};
  text-decoration: ${props => props.textDecoration};
`

export default Heading
