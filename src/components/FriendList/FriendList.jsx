import { Wrapper, List, ListItem, Status, Avatar, Name } from './FriendList.styled'

const FriendList = ({ friends }) => {
  return (
    <Wrapper>
      <List>
        {friends.map(({ id, isOnline, avatar, name }) => {
          return (
            <ListItem key={id}>
              <Status isOnline={isOnline}></Status>
              <Avatar src={avatar} alt={name} />
              <Name>{name}</Name>
            </ListItem>
          )
        })}
      </List>
    </Wrapper>
  )
}

export default FriendList
