import { Player, PlayerRef } from "@remotion/player";
import { useRef } from "react";
import { TimeDisplay } from "../src/components/TimeDisplay";
import { MyComp } from "../src/remotion/MyComp";
 
export const App: React.FC = () => {
  const playerRef = useRef<PlayerRef>(null);

  return (
    <>
      <Player
        component={MyComp}
        inputProps={{ text: "World" }}
        durationInFrames={120}
        compositionWidth={1920}
        ref={playerRef}
        compositionHeight={1080}
        fps={30}
        autoPlay
        style={{
          width: 1280,
          height: 720,
        }}
        controls
      />
      <TimeDisplay playerRef={playerRef} />
    </>

  );
};

export default App