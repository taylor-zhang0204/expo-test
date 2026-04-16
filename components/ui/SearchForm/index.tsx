import dayjs from 'dayjs';
import { useState } from 'react';
import { YStack } from 'tamagui';

import { SCREEN_WIDTH } from '@/utils/screen';

import DateRangeSection from './DateRangeSection';
import DestinationInput from './DestinationInput';
import RoomsGuestsInput from './RoomsGuestsInput';
import SearchButton from './SearchButton';

type SearchParams = {
  destination: string;
  checkIn: string;
  checkOut: string;
  rooms: number;
  guests: number;
};

type Props = {
  onSearch?: (params: SearchParams) => void;
  onDateRangePress?: () => void;
};

export default function SearchForm({ onSearch, onDateRangePress }: Props) {
  const [params, setParams] = useState<SearchParams>({
    destination: '',
    checkIn: dayjs().format('YYYY-MM-DD'),
    checkOut: dayjs().add(7, 'day').format('YYYY-MM-DD'),
    rooms: 1,
    guests: 1,
  });

  const onRoomsChange = (rooms: number) =>
    setParams((p) => ({ ...p, guests: Math.max(p.guests, rooms), rooms }));

  const onGuestsChange = (guests: number) => setParams((p) => ({ ...p, guests }));

  const onDateRangeChange = (range: { startDate: string; endDate: string }) => {
    setParams((p) => ({ ...p, checkIn: range.startDate, checkOut: range.endDate }));
  };

  const handleSearch = () => {
    onSearch?.(params);
  };

  return (
    <YStack
      style={{
        width: SCREEN_WIDTH - 50,
        paddingHorizontal: 14,
        paddingVertical: 20,
        backgroundColor: '#fff',
        borderRadius: 13,
        gap: 16,
        shadowColor: 'rgba(16,49,96,0.1)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10,
      }}
    >
      <DestinationInput
        value={params.destination}
        onChangeText={(destination) => setParams((p) => ({ ...p, destination }))}
      />

      <DateRangeSection
        checkIn={params.checkIn}
        checkOut={params.checkOut}
        onDateRangeChange={onDateRangeChange}
      />

      <RoomsGuestsInput
        rooms={params.rooms}
        guests={params.guests}
        onRoomsChange={(rooms) => onRoomsChange(rooms)}
        onGuestsChange={(guests) => onGuestsChange(guests)}
      />

      <SearchButton onPress={handleSearch} />
    </YStack>
  );
}

export type { SearchParams };
