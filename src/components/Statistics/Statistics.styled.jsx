import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Wrapper = styled.article`
  max-width: 500px;
  text-align: center;

  border: 1px solid var(--bs-gray-300);
  box-shadow: var(--bs-shadow);
  overflow: hidden;
  margin: 2rem;
  border-radius: 0.5rem;
`

export const Title = styled.h2`
  padding: 1.5rem 0;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--bs-gray-600);
`

export const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`
// Вот это я додумался
const themes = {
  '.docx': css`
    background-color: var(--bs-cyan);
  `,
  '.pdf': css`
    background-color: var(--bs-purple);
  `,
  '.mp3': css`
    background-color: var(--bs-red);
  `,
  '.psd': css`
    background-color: var(--bs-info);
  `,
}
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 1.2rem;
  color: var(--bs-white);
  ${(props) => themes[props.type]};
  /* composes в emotion нет =) */
`

export const Label = styled.span`
  font-size: 1rem;
`

export const Percentage = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
`
