export const LIST_WORDS = 'LIST_WORDS';

export function listWordAction(words) {
  return {
    type: LIST_WORDS,
    words
  };
}