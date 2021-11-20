import styled from '@emotion/styled'

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

  margin: 0.5rem;
  border-radius: 0.3rem;
  border: 1px solid var(--bs-gray-300);
  box-shadow: 0px 5px 4px -1px rgba(0, 0, 0, 0.88);
`

export const Status = styled.span`
  width: 1rem;
  display: inline-block;
  margin-left: 10px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
`

export const Avatar = styled.img`
  margin: 0.5rem;
  width: 5rem;

  background-color: var(--bs-gray-500);
`

export const Name = styled.p`
  font-weight: 700;
  font-size: x-large;
  margin: 0;
`
