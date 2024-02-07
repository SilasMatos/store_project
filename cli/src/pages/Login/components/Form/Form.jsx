import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Input from '@mui/material/Input'
import FilledInput from '@mui/material/FilledInput'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import { useState } from 'react'
function Form() {
  const [showPassword, setShowPassword] = useState(false)
  const [age, setAge] = useState('')
  const handleChange = event => {
    setAge(event.target.value)
  }

  const handleClickShowPassword = () => setShowPassword(show => !show)

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  return (
    <>
      <form>
        <div className="mb-6">
          <FormControl variant="standard" sx={{ m: 0, width: '100%' }}>
            <InputLabel id="demo-simple-select-standard-label">Site</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value="FSABA">FSABA</MenuItem>
              <MenuItem value="ITABUNA">ITABUNA</MenuItem>
              <MenuItem value="BARUERI">BARUERI</MenuItem>
              <MenuItem value="MATRIZ">MATRIZ</MenuItem>
              <MenuItem value="IMSSACM">IMSSACM</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="mb-6">
          <TextField
            id="standard-basic"
            label="Login"
            variant="standard"
            className="w-full"
          />
        </div>
        <div className="mb-6">
          <FormControl
            className="w-full"
            sx={{ m: 0, width: '100%' }}
            variant="standard"
          >
            <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <button
          type="submit"
          className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-xl mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6"
        >
          Entrar
        </button>
      </form>
    </>
  )
}

export default Form
