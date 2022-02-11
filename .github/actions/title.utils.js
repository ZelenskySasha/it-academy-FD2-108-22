const USER_NAMES = [
  'd.astreyko',
  'i.ivanov',
  'a.dubovskaya',
  'a.konnov',
  'd.barukin',
  'd.grinevich',
  'r.shketik',
  's.zelensky',
  'v.undro',
  'a.halilov',
  'd.grabovsky',
  'e.bozhkova',
  's.rusetsky',
  'v.proshkina',
];

const titleRegexp = /(homework|lesson)[_ ]\d+/ig;

module.exports = {
  isValidUserName(name) {
    if (USER_NAMES.includes(name.toLowerCase())) {
      return true;
    }
    throw new Error(`User: ${name} does not exist in listeners: \n${USER_NAMES.join('\n')}`);
  },

  isValidPRName(title) {
    if (titleRegexp.test(title)) {
      return true;
    }
    throw new Error(`Second part of Pull Request Name: ${title} does not matched with regexp /(homework|lesson)[_ ]\d+/ig`);
  },

  isValidBranchName(title) {
    if (titleRegexp.test(title)) {
      return true;
    }
    throw new Error(`Second part of Branch Name: ${title} does not matched with regexp /(homework|lesson)[_ ]\d+/ig`);
  }
};


