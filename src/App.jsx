import Button from '@mui/material/Button'
import AssistantIcon from '@mui/icons-material/Assistant'
import Typography from '@mui/material/Typography'
import { useColorScheme } from '@mui/material'

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {

  return (
    <>
      <ModeToggle></ModeToggle>
      <div>Be Tan</div>

      <Typography variant="body2" color="text.secondary">test Typo</Typography>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>

      <AssistantIcon></AssistantIcon>
    </>
  )
}

export default App
