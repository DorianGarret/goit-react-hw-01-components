import PropTypes from 'prop-types'
import { Wrapper, Title, List, ListItem, Label, Percentage } from './Statistics.styled'
import getRandomHexColor from 'utils/getRandomHexColor'

const Statistics = ({ title, stats }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <ListItem key={id} style={{ backgroundColor: `${getRandomHexColor()}` }}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </ListItem>
          )
        })}
      </List>
    </Wrapper>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
}

export default Statistics
