import { writable, type Writable } from "svelte/store";

export const theme: Writable<'dark' | 'light' | null> = writable(null);

export const lang: Writable<'es' | 'en'> = writable('en');