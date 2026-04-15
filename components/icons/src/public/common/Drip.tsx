import * as React from 'react';
import { Pressable } from 'react-native';
import Svg, { Path, Ellipse } from 'react-native-svg';

import type { BaseProps } from '@/components/icons/types';

const Drip = ({ color, size = 40, onPress }: BaseProps) => {
  return (
    <Pressable onPress={onPress}>
      <Svg fill="none" viewBox="0 0 9 10" width={size} height={size}>
        <Path
          fill="#FFDA20"
          d="M7 5.808C7 7.295 5.88 8.5 4.5 8.5S2 7.295 2 5.808 4.5 1.5 4.5 1.5 7 4.32 7 5.808"
        />
        <Ellipse cx={3.5} cy={6} fill="#fff" rx={0.5} ry={1} />
      </Svg>
    </Pressable>
  );
};

export default Drip;
