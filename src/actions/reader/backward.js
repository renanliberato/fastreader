export const BACKWARD = 'BACKWARD';

export function backwardAction(length, current) {
  return {
    type: BACKWARD,
    length,
    current
  };
}