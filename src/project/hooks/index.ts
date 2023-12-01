import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'; //  что эти хуки делают
import type { Tstate, TAppDispatch } from '../types/state.type';

const useAppDispatch = () => useDispatch<TAppDispatch>();
const useAppSelector:TypedUseSelectorHook<Tstate> = useSelector;

export { useAppDispatch, useAppSelector};
