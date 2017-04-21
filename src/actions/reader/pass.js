export const PASS = 'PASS';

export function passAction(length) {
  return {
    type: PASS,
    length
  };
}