import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import background from './assets/wallpaper.jpg'
import song from './assets/music.mp3'
import heart from './assets/many-little-heart-make-big-heart-gif.gif'
import TypingComponent from './components/Typing.component'
import PlayerComponent from './components/Player.component';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {
  const [isDisableBtn, setIsDisableBtn] = useState(false);
  const [isDisableMsg, setIsDisableMsg] = useState(true);
  const [isWelcomeMsg, setIsWelcomeMsg] = useState(true);
  const [removeAll, setRemoveAll] = useState(false);
  const [disableVideo, setDisableVideo] = useState(false);

  const handleChangeBtnMsg = (isChanged) => {
    isChanged && setIsWelcomeMsg(false)
    isChanged && setIsDisableBtn(false)
  }

  const handleEndedVideo = () => {
    setDisableVideo(!disableVideo)
    const audio = new Audio(song);
    audio.volume = 0.1
    audio.play()
  }

  return (
    <>
      <div style={{
        background: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain', height: '100vh',
        backgroundPosition: 'center'
      }} id='App'>
        <div style={{ display: removeAll && 'none' }}>
          {!isDisableMsg && <div style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.3)', padding: '0.5rem', 
            position: 'absolute', top: '28%', left: '0%',
          }}>
            <TypingComponent onComplectedType={handleChangeBtnMsg}></TypingComponent>
          </div>}
          {/** Transaction Text */}
          <Button variant="contained" onClick={() => { setIsDisableBtn(!isDisableBtn); setIsDisableMsg(!isDisableMsg); if (!isWelcomeMsg) { setRemoveAll(true) } }}
            style={{
              visibility: isDisableBtn ? 'hidden' : 'visible',
              opacity: isDisableBtn ? '0' : '1',
              transition: "all .3s",
            }}>
            {isWelcomeMsg ? 'Hello! Click me' : 'Click thêm 1 lần nữa nha'}
            <FavoriteIcon style={{ color: 'pink', margin: '0px 3px', }}></FavoriteIcon>
          </Button>
        </div>
        <div style={{ display: removeAll ? 'inline-block' : 'none', width: '93%', height: '33%', visibility: disableVideo ? 'hidden' : 'visible', maxWidth: '430px'}}>
          <PlayerComponent handleEndedVideo={handleEndedVideo} />
        </div>
        {disableVideo && <img style={{display: 'inline-block', position: 'absolute', top: '53%'}} src={heart} alt="loading..." />}
      </div>
    </>
  )
}

export default App
