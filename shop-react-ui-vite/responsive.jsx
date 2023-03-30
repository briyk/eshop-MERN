import {css} from 'styled-components'

export const tablet = (props) =>{
     return css`
          @media screen and (max-width: 700px) {
               ${props}
          }
     `
}
export const mobile = (props) =>{
     return css`
          @media screen and (max-width: 500px) {
               ${props}
          }
     `
}