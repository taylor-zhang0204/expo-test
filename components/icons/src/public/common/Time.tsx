import * as React from 'react';
import { Pressable } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import type { BaseProps } from '@/components/icons/types';

const Time = ({ color, size = 40, onPress }: BaseProps) => {
  return (
    <Pressable onPress={onPress}>
      <Svg fill="none" viewBox="0 0 12 13" width={size} height={size}>
        <Path
          fill="#6C788D"
          d="M6 1.249a5.252 5.252 0 1 0 0 10.503A5.252 5.252 0 0 0 6 1.249m2.543 6.044c0 .307-.25.557-.558.557H5.628a.557.557 0 0 1-.557-.557V4.11a.557.557 0 1 1 1.115 0v2.413c0 .116.094.211.211.211h1.588c.308 0 .558.25.558.558"
        />
      </Svg>
    </Pressable>
  );
};

export default Time;
