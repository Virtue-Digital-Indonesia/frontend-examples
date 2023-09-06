// CONSTANTS
import menu from './menu'

// MUI
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

const Home = () => {
  return (
    <List>
      {menu.map((item, index) => (
        <ListItemButton 
          key={index}
          href={item.path}
        >
          <ListItemText primary={item.label}/>
        </ListItemButton>
      ))}
    </List>
  )
}

export default Home