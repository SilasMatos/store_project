// import React from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

export const CustomDrawer = ({ open, onClose, user }) => {
  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={onClose}
      onKeyDown={onClose}
    >
      <List>
        <ListItem>
          <div className="flex justify-center w-full">
            <ListItemAvatar>
              <Avatar alt={user} />
            </ListItemAvatar>
          </div>
        </ListItem>
      </List>
      <Divider />
      <div className="w-full flex p-2 justify-center gap-2">
        <div>
          <div className="w-full text-sm font-medium">
            Nome: <p className="inline ">Silas</p>
          </div>
          <div className="text-sm font-medium">
            Login: <p className="inline">Silas</p>
          </div>
        </div>
        <div>
          <div className=" text-sm font-medium">
            Moedas: <p className="inline">Silas</p>
          </div>
          <div className="text-sm font-medium">
            Matricula: <p className="inline">Silas</p>
          </div>
        </div>
      </div>
      {/* Adicione outras informações do perfil conforme necessário */}
    </Box>
  )

  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={onClose}
      onOpen={() => {}}
    >
      {list}
    </SwipeableDrawer>
  )
}
export default CustomDrawer
