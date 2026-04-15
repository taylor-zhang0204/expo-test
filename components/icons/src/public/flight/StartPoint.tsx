import * as React from 'react';
import { Pressable } from 'react-native';
import Svg, { G, Path, Ellipse, Defs, LinearGradient, Stop } from 'react-native-svg';

import type { BaseProps } from '@/components/icons/types';

const StartPoint = ({ color, size = 40, onPress }: BaseProps) => {
  return (
    <Pressable onPress={onPress}>
      <Svg fill="none" viewBox="0 0 60 60" width={size} height={size}>
        <G filter="url(#start-point_svg__a)">
          <Path
            fill="url(#start-point_svg__b)"
            d="M43.995 23.639C43.804 16.074 37.611 10 30 10c-7.732 0-14 6.268-14 14 0 11.525 11.002 13.619 13.499 23.004.501 1.496 1.001 0 1.001 0C32.997 37.619 44 35.525 44 24q0-.18-.005-.361"
          />
        </G>
        <Path
          fill="#fff"
          d="M24.84 20h4.92v1.248h-4.92zm6.228 2.376h3.276v1.248h-3.276zm-6.564-.012h5.556v1.272h-5.556zm3.132 2.568h2.316v1.236h-2.316zm-1.008-6.096h1.344v4.212h-1.344zm.3 4.344h1.32v5.34h-1.32zm3.48-3.912h4.548v4.656h-1.38v-3.396h-3.168zm.096 3.108h1.392v3.708q0 .312.096.396t.456.084h1.38q.216 0 .324-.108.12-.108.156-.444.048-.336.072-.996.156.108.372.216.228.096.468.18t.42.144q-.072.9-.252 1.404-.168.492-.516.696-.336.192-.924.192h-1.704q-.66 0-1.044-.144a1 1 0 0 1-.54-.54q-.156-.384-.156-1.08zm-4.476 3.12q.252.948.624 1.524.384.576.936.876.552.288 1.284.396.744.096 1.692.096.228 0 .624.012h.888a42 42 0 0 1 1.02-.012h1.044q.516 0 .936-.012.42-.024.696-.024-.108.156-.228.408a5.7 5.7 0 0 0-.324 1.008h-4.656a12.6 12.6 0 0 1-2.1-.156 4.2 4.2 0 0 1-1.572-.564q-.66-.42-1.116-1.2t-.78-2.04zm-1.104-1.164 1.32.096a47 47 0 0 1-.12 2.208 16 16 0 0 1-.252 1.992 7.5 7.5 0 0 1-.492 1.608 2.3 2.3 0 0 0-.348-.216l-.456-.228a8 8 0 0 0-.396-.168q.3-.612.444-1.452.156-.84.216-1.824.072-.984.084-2.016"
        />
        <G filter="url(#start-point_svg__c)">
          <Ellipse cx={30} cy={52} fill="#000" fillOpacity={0.2} rx={10} ry={2} />
        </G>
        <Defs>
          <LinearGradient
            id="start-point_svg__b"
            x1={30}
            x2={30}
            y1={10}
            y2={47.669}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#42B300" />
            <Stop offset={1} stopColor="#004B15" />
          </LinearGradient>
        </Defs>
      </Svg>
    </Pressable>
  );
};

export default StartPoint;
