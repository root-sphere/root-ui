import { tv } from 'tailwind-variants';

export const avatarVariants = tv({
  slots: {
    root: 'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
    image: 'aspect-square h-full w-full',
    fallback: 'flex h-full w-full items-center justify-center rounded-full bg-muted',
  },
});
