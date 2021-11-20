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

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
`
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  :not(:last-of-type) {
    margin: 1rem 1rem 0 1rem;
  }
  :last-of-type {
    margin: 1rem;
  }
  border-radius: 0.3rem;
  border: 1px solid var(--bs-gray-300);
  box-shadow: 0px 5px 4px -1px rgba(0, 0, 0, 0.88);
`
const statuses = {
  online: css`
    background-color: var(--bs-success);
  `,
  offline: css`
    background-color: var(--bs-danger);
  `,
}
export const Status = styled.span`
  display: inline-block;
  margin-left: 10px;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  ${(props) => (props.isOnline ? statuses.online : statuses.offline)}
`

export const Avatar = styled.img`
  margin: 0.7rem;
  width: 5rem;
  border-radius: 0.3rem;
  background-color: var(--bs-gray-500);
`

export const Name = styled.p`
  font-weight: 500;
  font-size: 2.2em;
  margin: 0;
  margin-left: 1rem;
`
