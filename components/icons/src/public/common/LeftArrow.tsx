import * as React from 'react';
import { Pressable } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import type { BaseProps } from '@/components/icons/types';

const LeftArrow = ({ color, size = 40, onPress }: BaseProps) => {
  return (
    <Pressable onPress={onPress}>
      <Svg className="left-arrow_svg__icon" viewBox="0 0 1024 1024" width={size} height={size}>
        <Path
          fill="#272636"
          d="m740.352 174.081-57.225-59.008-399.479 396.929 399.476 396.924 57.228-59.004-335.872-337.92Z"
        />
      </Svg>
    </Pressable>
  );
};

export default LeftArrow;
