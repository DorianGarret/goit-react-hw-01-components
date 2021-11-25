import PropTypes from 'prop-types'

import { Table, Thead, Tbody } from './transactionHistory.styled'

const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>
      <Tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <th>{type}</th>
              <th>{amount}</th>
              <th>{currency}</th>
            </tr>
          )
        })}
      </Tbody>
    </Table>
  )
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
}

export default TransactionHistory
