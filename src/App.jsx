import Button from "@mui/material/Button"
import AssistantIcon from "@mui/icons-material/Assistant"
import Typography from "@mui/material/Typography"
import { Box, useColorScheme, useMediaQuery } from "@mui/material"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest"

function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
    // setAge(event.target.value)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <LightModeIcon fontSize="small"></LightModeIcon>
            Light
          </div>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <DarkModeIcon></DarkModeIcon>Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <SettingsSuggestIcon></SettingsSuggestIcon>System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

function ModeToggle() {
  const { mode, setMode } = useColorScheme() // Lấy được setting là Light hay Dark từ chế độ của máy người dùng
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const prefersLightMode = useMediaQuery("(prefers-color-scheme: light)")

  return (
    <Button
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light")
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  )
}

function App() {
  return (
    <>
      <ModeSelect></ModeSelect>
      <hr></hr>
      <ModeToggle></ModeToggle>
      <div>Be Tan</div>

      <Typography variant="body2" color="text.secondary">
        test Typo
      </Typography>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>

      <AssistantIcon></AssistantIcon>
    </>
  )
}

export default App
