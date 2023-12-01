import { store } from '../store/index';

type Tstate = ReturnType<typeof store.getState>;
type TAppDispatch = typeof store.dispatch;

export type { Tstate, TAppDispatch };
