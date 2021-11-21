import user from 'data/user.json'
import statisticalData from 'data/statistical-data.json'
import friends from 'data/friends.json'
import transactions from 'data/transactions.json'

import Profile from 'components/Profile'
import Statistics from 'components/Statistics'
import FriendList from 'components/FriendList'
import TransactionHistory from 'components/TransactionHistory'

function App() {
  return (
    <>
      <Profile
        name={user.name}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  )
}

export default App
