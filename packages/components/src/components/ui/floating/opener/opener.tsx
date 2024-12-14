import { OpenerContent } from './opener.content';
import { OpenerRoot } from './opener.root';
import { OpenerTrigger } from './opener.trigger';

export const Opener = Object.assign(OpenerRoot, {
  Content: OpenerContent,
  Trigger: OpenerTrigger,
});
