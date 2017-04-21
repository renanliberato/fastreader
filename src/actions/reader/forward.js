export const FORWARD = 'FORWARD';

export function forwardAction(length, current) {
  return {
    type: FORWARD,
    length,
    current
  };
}