import PropTypes from 'prop-types'
import {
  Wrapper,
  List,
  ListItem,
  Status,
  Avatar,
  Name,
} from './FriendList.styled'

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

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
}

export default FriendList
