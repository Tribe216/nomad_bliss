export const RECEIVE_TAGS = 'RECEIVE_TAGS';
import * as TagApiUtil from '../util/tag_api_util';

export const receiveTags = (tags) => {
  return {
    type: RECEIVE_TAGS,
    tags
  };
};

export function updateTags() {
  return (dispatch) => {
    return TagApiUtil.fetchTags().then(
      (tags) => {
        dispatch(receiveTags(tags));
      }
    );
  };
}
