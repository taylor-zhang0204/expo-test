import { Link, Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import DateRangePicker from '@/components/DateRangePicker';

export default function Index() {
  const { t } = useTranslation();

  return (
    <>
      <Stack.Screen options={{ title: t('index.tabsTitle') }} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Link href="/component">{t('index.openComponents')}</Link>
        <Link href="/component1">{t('index.openComponentsAlt')}</Link>

        <DateRangePicker initialRange={{ startDate: '2026-03-27', endDate: '2026-04-05' }} />
      </View>
    </>
  );
}
