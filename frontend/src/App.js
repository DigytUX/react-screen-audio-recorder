import logo from './logo.svg'
import './App.css'
import { ReactMediaRecorder, useReactMediaRecorder } from 'react-media-recorder'

// const {
//   status,
//   startRecording: startRecord,
//   stopRecording: stopRecord,
//   mediaBlobUrl
// } = useReactMediaRecorder({ screen, audio, video })

const Recorder = () => (
  <div>
    <ReactMediaRecorder
      video
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div>
          <p>{status}</p>
          <button onClick={startRecording}>Start Recording</button>
          <button onClick={stopRecording}>Stop Recording</button>
          <video src={mediaBlobUrl} loop />
        </div>
      )}
    />
  </div>
)

function App() {
  return (
    <div className='App'>
      <Recorder />
    </div>
  )
}

export default App
