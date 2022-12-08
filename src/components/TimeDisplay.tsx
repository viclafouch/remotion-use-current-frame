
import type {PlayerRef} from '@remotion/player'
import React from 'react';
import { useCurrentPlayerFrame } from '../hooks/useCurrentPlayerFrame';
 
export const TimeDisplay: React.FC<{
  playerRef: React.RefObject<PlayerRef>;
}> = ({ playerRef }) => {
  const frame = useCurrentPlayerFrame(playerRef);

  console.log(frame)
 
  return <div>current frame: {frame}</div>;
};