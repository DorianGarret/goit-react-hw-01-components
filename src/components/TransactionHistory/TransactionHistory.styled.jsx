import styled from '@emotion/styled'

export const Table = styled.table`
  width: 50vw;
  margin: 0 auto;
  box-shadow: 0px 5px 4px -1px rgba(0, 0, 0, 0.88);
  margin-bottom: 5rem;

  th {
    text-align: center;
    padding: 1rem 0;
  }
`

export const Thead = styled.thead`
  th {
    text-transform: uppercase;
    color: var(--bs-white);
    background-color: var(--bs-info);
    :not(:last-of-type) {
      border-right: 1px solid var(--bs-white);
    }
  }
`

export const Tbody = styled.tbody`
  color: var(--bs-gray-600);
  tr {
    :nth-of-type(even) {
      background-color: var(--bs-gray-200);
    }
  }
  th {
    :not(:last-of-type) {
      border-right: 1px solid var(--bs-gray-500);
    }
  }
`
