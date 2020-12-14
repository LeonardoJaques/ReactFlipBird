import React from 'react';
import { View } from 'react-native';

const Bird = ({ birdBottom, birdLeft }) => {
  const birdWidth = 50;
  const birdheight = 60;

  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: 'blue',
        width: birdWidth,
        height: birdheight,
        left: birdLeft - (birdWidth / 2),
        bottom: birdBottom - (birdheight / 2),
      }}
    />
  );
};

export default Bird;
