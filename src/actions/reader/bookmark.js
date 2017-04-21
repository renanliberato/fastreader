export const GO_TO_BOOKMARK = 'GO_TO_BOOKMARK';
export const BOOKMARK = 'BOOKMARK';

export function bookmarkAction(bookmark) {
  return {
    type: BOOKMARK,
    bookmark
  };
}

export function goToBookmarkAction(bookmark) {
  return {
    type: GO_TO_BOOKMARK,
    bookmark
  };
}