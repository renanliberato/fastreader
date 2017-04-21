export const SPEED = 'SPEED';

export function speedAction(speed) {
  return {
    type: SPEED,
    speed
  };
}