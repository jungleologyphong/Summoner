export function toObject(str: any) {
  if (str === undefined || typeof str !== 'string') {
    return str;
  }
  try {
    return JSON.parse(str);
  } catch (error) {
    return str;
  }
}

export function toString(json: any): string {
  if (
    json === undefined ||
    typeof json === 'string' ||
    typeof json === 'number'
  ) {
    return json;
  }
  try {
    return JSON.stringify(json);
  } catch (error) {
    return json;
  }
}
