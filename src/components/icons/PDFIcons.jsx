import { Svg, Path, Rect } from '@react-pdf/renderer'

export function Mail({ color }) {
  return (
    <Svg width="15" height="15" viewBox="0 0 24 24">
      <Rect
        x="2"
        y="4"
        width="20"
        height="16"
        rx="2"
        stroke={color}
        strokeWidth={2}
        fill="none"
      />
      <Path
        d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  )
}

export function Phone({ color }) {
  return (
    <Svg width="15" height="15" viewBox="0 0 24 24">
      <Path
        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  )
}
