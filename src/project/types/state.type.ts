import { store } from '../store/index';

type TState = ReturnType<typeof store.getState>;
type TAppDispatch = typeof store.dispatch;

export type { TState, TAppDispatch };
