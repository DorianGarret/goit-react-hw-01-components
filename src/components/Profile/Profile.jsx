import PropTypes from 'prop-types'

import { MdOutlineAlternateEmail } from 'react-icons/md'

import {
  Wrapper,
  Description,
  Image,
  Paragraph,
  List,
  ListItem,
  Label,
  Quantity,
} from './Profile.styled'

const Profile = ({ name, avatar, tag, location, stats: { followers, views, likes } }) => {
  return (
    <Wrapper>
      <Description>
        <Image src={avatar} alt={name} />
        <Paragraph>{name}</Paragraph>
        <Paragraph>
          <MdOutlineAlternateEmail />
          {tag}
        </Paragraph>
        <Paragraph>{location}</Paragraph>
      </Description>
      <List>
        <ListItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </ListItem>
        <ListItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </ListItem>
        <ListItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </ListItem>
      </List>
    </Wrapper>
  )
}

Profile.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
}

export default Profile
