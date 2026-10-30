import type { WeeklyHours } from '../lib/hours.ts'

const at = (hour: number, minute = 0) => hour * 60 + minute

/** Weekly hours from Google Maps, Oct 30, 2026. Sunday first; `null` = closed. */
export const hours: WeeklyHours = [
  { opens: at(11), closes: at(22) }, // Sunday
  { opens: at(14), closes: at(23) }, // Monday
  null, // Tuesday
  { opens: at(14), closes: at(23, 30) }, // Wednesday
  { opens: at(14), closes: at(23, 30) }, // Thursday
  { opens: at(14), closes: at(24) }, // Friday
  { opens: at(11), closes: at(24) }, // Saturday
]
