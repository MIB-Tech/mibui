import {useState} from 'react';

export const useBooleanState = (initialState?: boolean | (() => boolean)) => useState<boolean | undefined>(initialState);