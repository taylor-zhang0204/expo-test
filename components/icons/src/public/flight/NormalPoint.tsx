import * as React from 'react';
import { Pressable } from 'react-native';
import Svg, { G, Path, Ellipse, Defs, LinearGradient, Stop } from 'react-native-svg';

import type { BaseProps } from '@/components/icons/types';

const NormalPoint = ({ color, size = 40, onPress }: BaseProps) => {
  return (
    <Pressable onPress={onPress}>
      <Svg fill="none" viewBox="0 0 60 60" width={size} height={size}>
        <G filter="url(#normal-point_svg__a)">
          <Path
            fill="url(#normal-point_svg__b)"
            d="M43.995 23.639C43.804 16.074 37.611 10 30 10c-7.732 0-14 6.268-14 14 0 11.525 11.002 13.619 13.499 23.004.501 1.496 1.001 0 1.001 0C32.997 37.619 44 35.525 44 24q0-.18-.005-.361"
          />
        </G>
        <G filter="url(#normal-point_svg__c)">
          <Ellipse cx={30} cy={52} fill="#000" fillOpacity={0.2} rx={10} ry={2} />
        </G>
        <Defs>
          <LinearGradient
            id="normal-point_svg__b"
            x1={30}
            x2={30}
            y1={10}
            y2={47.004}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#3586FF" />
            <Stop offset={1} stopColor="#0E57C3" />
          </LinearGradient>
        </Defs>
      </Svg>
    </Pressable>
  );
};

export default NormalPoint;
