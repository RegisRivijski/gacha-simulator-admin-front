import axios from 'axios';

import {
  DEFAULT_LANG_CODE,
  AVAILABLE_ITEMS_LANG_CODES,

  DEFAULT_ITEMS_TYPE,
  AVAILABLE_ITEMS_TYPE,
} from '../constants';

export function getItemsData(type, langCode) {
  const validLangCode = AVAILABLE_ITEMS_LANG_CODES.includes(langCode)
    ? langCode
    : DEFAULT_LANG_CODE;

  const validType = AVAILABLE_ITEMS_TYPE.includes(type)
    ? type
    : DEFAULT_ITEMS_TYPE;

  return axios
    .get(`/public/gacha-simulator-static-data/data/items/${validLangCode}/${validType}.json`)
    .then(({ data }) => data);
}
