export function removeAccents(str: string) {
  const AccentsMap = [
    'aàảãáạăằẳẵắặâầẩẫấậ',
    'AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ',
    'dđ',
    'DĐ',
    'eèẻẽéẹêềểễếệ',
    'EÈẺẼÉẸÊỀỂỄẾỆ',
    'iìỉĩíị',
    'IÌỈĨÍỊ',
    'oòỏõóọôồổỗốộơờởỡớợ',
    'OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ',
    'uùủũúụưừửữứự',
    'UÙỦŨÚỤƯỪỬỮỨỰ',
    'yỳỷỹýỵ',
    'YỲỶỸÝỴ',
  ];
  for (let i = 0; i < AccentsMap.length; i++) {
    const re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
    const char = AccentsMap[i][0];
    str = str.replace(re, char);
  }
  return str;
}

export function isUpper(char: string) {
  const AccentsMap = [
    'AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ',
    'DĐ',
    'EÈẺẼÉẸÊỀỂỄẾỆ',
    'IÌỈĨÍỊ',
    'OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ',
    'UÙỦŨÚỤƯỪỬỮỨỰ',
    'YỲỶỸÝỴ',
  ];
  return AccentsMap.some(text => text.indexOf(char) >= 0);
}
