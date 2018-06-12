import removeMarkdown from 'remove-markdown';
import { utcFormat } from 'd3-time-format';

const formatterCache = new Map();
const defaultFTDateFormat = '%A, %-e %B %Y';

export function isotime(date) {
  if (!date) {
    return '';
  } else if (!(date instanceof Date)) {
    return date;
  }

  return date.toISOString();
}

// strftime format docs: https://github.com/d3/d3-time-format
export function strftime(format = defaultFTDateFormat) {
  if (formatterCache.has(format)) {
    return formatterCache.get(format);
  }

  const fm = utcFormat(format);
  formatterCache.set(format, fm);
  return fm;
}

export function ftdate(d) {
  return strftime()(d);
}

export function plain(str, stripListLeaders = true) {
  return removeMarkdown(str, { stripListLeaders, gfm: true });
}

export function encodedJSON(str) {
  try {
    return encodeURIComponent(JSON.stringify(JSON.parse(str || ''), null, ''));
  } catch (e) {
    return '';
  }
}

export function spoorTrackingPixel(str) {
  const jsonString = encodedJSON(str.trim());
  const img = `<img src="https://spoor-api.ft.com/px.gif?data=${jsonString}" height="1" width="1" />`;
  return `<!--[if lt IE 9]>
  ${img}
  <![endif]-->
  <noscript data-o-component="o-tracking">${img}</noscript>`;
}

export function imageUUID(uuid) {
  return `https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A${uuid}?source=ig`;
}

export function getMainImage(img) {
  if (Object.prototype.hasOwnProperty.call(img, 'uuid')) return imageUUID(img.uuid);
  else if (Object.prototype.hasOwnProperty.call(img, 'url')) return img.url;
  return '';
}
