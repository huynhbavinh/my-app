
import ReactPlayer from 'react-player'

// eslint-disable-next-line react/prop-types
const PlayerComponent = ({handleEndedVideo}) => {
    // Render a YouTube video player
    return (
        <ReactPlayer url='https://youtu.be/MRRyx88sSt0' width={'100%'} height={'100%'} onEnded={()=> {
            handleEndedVideo()
        }} />
    )
}

export default PlayerComponent;


