import { StorybookContent } from '@/stories';
import { StoryObj } from '@storybook/react';
import { addDays } from 'date-fns';
import * as React from 'react';
import { DateRange } from 'react-day-picker';

import { Calendar } from './calendar';

export default {
  title: 'Components/Calendar',
};

const CalendarStories = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <StorybookContent className="flex-col gap-4">
      <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
      <Calendar mode="range" selected={range} onSelect={setRange} className="rounded-md border" />
    </StorybookContent>
  );
};

export const Default: StoryObj = {
  render: CalendarStories,
};
