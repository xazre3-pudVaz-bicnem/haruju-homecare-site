import type { SVGProps } from 'react'

/** シンプルな線画アイコン集（1.5px ストローク・角丸） */
export type IconName =
  | 'home'
  | 'heart'
  | 'hand'
  | 'clock'
  | 'users'
  | 'shield'
  | 'meal'
  | 'bath'
  | 'walk'
  | 'broom'
  | 'cart'
  | 'phone'
  | 'mail'
  | 'map'
  | 'check'
  | 'arrow'
  | 'chat'
  | 'leaf'
  | 'calendar'
  | 'star'

const PATHS: Record<IconName, string> = {
  home: 'M4 11.5 12 4l8 7.5M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9M10 20v-6h4v6',
  heart:
    'M12 20s-7-4.35-9.2-8.4C1.3 9 2.4 5.5 5.7 5.5c2 0 3.1 1.3 3.8 2.4.7-1.1 1.8-2.4 3.8-2.4 3.3 0 4.4 3.5 2.9 6.1C19 15.65 12 20 12 20Z',
  hand: 'M7 11V6.5a1.5 1.5 0 0 1 3 0V11m0-1.5V5a1.5 1.5 0 0 1 3 0v4.5m0-.5V6a1.5 1.5 0 0 1 3 0v7c0 3.5-2.2 6-5.5 6-2 0-3.3-.7-4.5-2.2L4.5 14c-.8-1-.2-2.4 1-2.6.7-.1 1.3.2 1.7.8L8 13',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7.5V12l3 2',
  users:
    'M16 19v-1.5a3.5 3.5 0 0 0-3.5-3.5h-4A3.5 3.5 0 0 0 5 17.5V19m5.5-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 9v-1.5a3.5 3.5 0 0 0-2.6-3.4M15.5 4.2a3 3 0 0 1 0 5.6',
  shield: 'M12 3.5 5 6v5.5c0 4 2.9 7 7 9 4.1-2 7-5 7-9V6l-7-2.5ZM9 12l2 2 4-4',
  meal: 'M4 4v6a2 2 0 0 0 2 2h0v8M6 4v6M8 4v6M18 4c-1.5 0-2.5 2-2.5 4.5S16.5 13 18 13v7M4 4v0',
  bath: 'M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3ZM6 12V6.5A2.5 2.5 0 0 1 8.5 4 2.5 2.5 0 0 1 11 6.2M6 19l-1 2M18 19l1 2',
  walk: 'M13 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-1 2-2.5 3 3 2 .5 7m-1-9 3 1.5 2.5-1M9.5 10 8 22',
  broom: 'M14 4 9.5 8.5m5-1L18 11 8 21H4v-4L14 7.5m-3 6 3 3',
  cart: 'M4 5h2l1.5 10.5a1 1 0 0 0 1 .9h8.5a1 1 0 0 0 1-.8L20 8H6.5M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
  phone:
    'M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z',
  mail: 'M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm0 1.5 8 5.5 8-5.5',
  map: 'M9 4 3 6.5v13L9 17l6 2.5 6-2.5v-13L15 6.5 9 4Zm0 0v13m6-10.5v13',
  check: 'M5 12.5 10 17.5 19.5 7',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  chat: 'M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 3.5V16H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z',
  leaf: 'M5 19c0-8 5-13 14-14 1 9-4 15-11 15-1.5 0-3-.4-3-.4M6 18C9 14 12 12 16 10',
  calendar:
    'M4 6h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm4-3v4m8-4v4M3 10h18',
  star: 'M12 3.5l2.6 5.3 5.9.9-4.25 4.15 1 5.85L12 17l-5.25 2.75 1-5.85L3.5 9.7l5.9-.9L12 3.5Z',
}

type Props = SVGProps<SVGSVGElement> & {
  name: IconName
  size?: number
}

export default function Icon({ name, size = 24, className, ...rest }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      <path d={PATHS[name]} />
    </svg>
  )
}
