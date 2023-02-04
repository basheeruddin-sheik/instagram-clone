export const VALIDATION_PATTERNS = {
    pincode: /^[1-9][0-9]{5}$/,
    phone: /^[6-9][0-9]{9}$/,
    password: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,15}$/
  }