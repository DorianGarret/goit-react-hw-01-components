import user from 'data/user.json'
import statisticalData from 'data/statistical-data.json'
import friends from 'data/friends.json'

import Profile from 'components/Profile/Profile'
import Statistics from 'components/Statistics/Statistics'
import FriendList from 'components/FriendList/FriendList'

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
    </>
  )
}

export default App
