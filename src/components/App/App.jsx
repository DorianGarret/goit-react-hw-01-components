import { name, avatar, tag, location, stats } from 'data/user.json'

import Profile from 'components/Profile/Profile'

function App() {
  return (
    <>
      <Profile name={name} avatar={avatar} tag={tag} location={location} stats={stats} />
    </>
  )
}

export default App
