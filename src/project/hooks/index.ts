import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'; //  что эти хуки делают
import type { TState, TAppDispatch } from '../types/state.type';

const useAppDispatch = () => useDispatch<TAppDispatch>();
const useAppSelector:TypedUseSelectorHook<TState> = useSelector;

export { useAppDispatch, useAppSelector};
