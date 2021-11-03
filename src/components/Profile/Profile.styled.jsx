import styled from '@emotion/styled'

export const Wrapper = styled.div`
  max-width: 350px;
  border-radius: 0.7rem;
  background-color: var(--bs-light);
  border: 1px solid var(--bs-gray-300);
  overflow: hidden;
  box-shadow: -1px 1px 13px 0px rgba(141, 60, 221, 0.5);
  margin: 2rem;
`

export const Description = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto 20px;
  background-color: var(--bs-gray-500);
`

export const Name = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 16px;
`

export const Tag = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 16px;
  color: var(--bs-gray-500);
`

export const Location = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0;
  color: var(--bs-gray-600);
`

export const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 16px;
  border-top: 1px solid var(--bs-gray-500);
  background-color: var(--bs-gray-200);
  &:not(:last-child) {
    border-right: 1px solid var(--bs-gray-500);
  }
`

export const Label = styled.span`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 8px;
  color: var(--bs-gray-600);
`

export const Quantity = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
`
