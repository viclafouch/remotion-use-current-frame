import { Composition } from "remotion";
import { MyComp } from "./MyComp";
 
export const MyVideo = () => {
  return (
    <>
      <Composition
        component={MyComp}
        durationInFrames={120}
        width={1920}
        height={1080}
        fps={30}
        id="my-comp"
        defaultProps={{ text: "World" }}
      />
    </>
  );
};