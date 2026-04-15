import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { Text, XStack } from 'tamagui';

import DateRangePicker from '@/components/DateRangePicker';
import { Chart } from '@/components/icons/src/public/common';
import { NormalPoint, StartPoint } from '@/components/icons/src/public/flight';
import Header from '@/components/ui/Header';

export default function Index() {
  const { t } = useTranslation();

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerShown: false,
        }}
      />
      <Header />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>{t('index.openComponents')}</Text>
        {/* <Link href="/component">{t('index.openComponents')}</Link> */}
        <DateRangePicker initialRange={{ startDate: '2026-03-27', endDate: '2026-04-05' }} />
        <XStack>
          <Chart color="red" size={50} onPress={() => console.log('Chart pressed')} />
          <NormalPoint size={40} onPress={() => console.log('NormalPoint pressed')} />
          <StartPoint size={40} onPress={() => console.log('StartPoint pressed')} />
        </XStack>
      </View>
    </>
  );
}
