import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';
import { DayPicker } from 'react-day-picker';
import { tv, type VariantProps } from 'tailwind-variants';

const calendarVariants = tv({
  slots: {
    caption: cn('flex justify-center pt-1 relative items-center'),
    caption_label: cn('text-sm font-medium text-foreground'),
    cell: cn(
      'relative p-0 text-center text-sm focus-within:relative focus-within:z-20',
      'h-9 w-9 [&:has([aria-selected])]:bg-accent rounded-md',
      'first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md',
    ),
    day: cn(
      'h-9 w-9 p-0 font-normal',
      'inline-flex items-center justify-center rounded-md',
      'transition-colors duration-200',
      'hover:bg-accent hover:text-accent-foreground',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      'aria-selected:bg-primary aria-selected:text-primary-foreground aria-selected:hover:bg-primary/90',
    ),
    day_disabled: cn('text-muted-foreground opacity-50'),
    day_hidden: cn('invisible'),
    day_outside: cn('text-muted-foreground opacity-50'),
    day_range_middle: cn('aria-selected:bg-accent aria-selected:text-accent-foreground'),
    day_selected: cn(
      'bg-primary text-primary-foreground hover:bg-primary/90',
      'focus-visible:bg-primary focus-visible:text-primary-foreground',
    ),
    day_today: cn('bg-accent text-accent-foreground'),
    head_cell: cn('text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]'),
    head_row: cn('flex'),
    month: cn('space-y-4'),
    months: cn('flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0'),
    nav: cn('space-x-1 flex items-center'),
    nav_button: cn(
      'h-7 w-7 bg-transparent p-0',
      'inline-flex items-center justify-center rounded-md',
      'text-sm font-medium text-foreground ring-offset-background',
      'transition-colors duration-200',
      'hover:bg-accent hover:text-accent-foreground',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
    ),
    nav_button_next: cn('absolute right-1'),
    nav_button_previous: cn('absolute left-1'),
    root: cn('p-3'),
    row: cn('flex w-full mt-2'),
    table: cn('w-full border-collapse space-y-1'),
  },
});

export type CalendarVariants = VariantProps<typeof calendarVariants>;

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  const {
    caption,
    caption_label,
    cell,
    day,
    day_disabled,
    day_hidden,
    day_outside,
    day_range_middle,
    day_selected,
    day_today,
    head_cell,
    head_row,
    month,
    months,
    nav,
    nav_button,
    nav_button_next,
    nav_button_previous,
    root,
    row,
    table,
  } = calendarVariants();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(root(), className)}
      classNames={{
        caption: cn(caption()),
        caption_label: cn(caption_label()),
        cell: cn(cell()),
        day: cn(day()),
        day_disabled: cn(day_disabled()),
        day_hidden: cn(day_hidden()),
        day_outside: cn(day_outside()),
        day_range_middle: cn(day_range_middle()),
        day_selected: cn(day_selected()),
        day_today: cn(day_today()),
        head_cell: cn(head_cell()),
        head_row: cn(head_row()),
        month: cn(month()),
        months: cn(months()),
        nav: nav(),
        nav_button: nav_button(),
        nav_button_next: cn(nav_button_next()),
        nav_button_previous: cn(nav_button_previous()),
        row: cn(row()),
        table: cn(table()),
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar, calendarVariants };
