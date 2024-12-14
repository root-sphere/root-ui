import * as React from 'react';

export type ElementOrRef<E extends HTMLElement> = E | React.RefObject<E>;
