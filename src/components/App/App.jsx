import user from 'data/user.json'
import statisticalData from 'data/statistical-data.json'

import Profile from 'components/Profile/Profile'
import Statistics from 'components/Statistics/Statistics'

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
    </>
  )
}

export default App
