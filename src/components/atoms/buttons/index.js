import styled from 'vue-styled-components'

const ResetButton = styled.button`
    padding: 10px 5px;
    border: 2px solid transparent;
    cursor: pointer;
    transition: all .2s ease;
`

export const Button = styled(ResetButton)`
    background: black;
    color: white;
`

export const ButtonOutlined = styled(Button)`
    background: transparent;
    color: black;
    border-color: black;
`

export default Button
