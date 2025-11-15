import Weather from './components/Weather'
import LightRays from './components/LightRays'

function App() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="fixed inset-0 w-full h-full">
        <LightRays
          raysOrigin="top-center"
          raysColor="white"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <div className="relative z-10">
        <Weather />
      </div>
    </div>
  )
}

export default App
