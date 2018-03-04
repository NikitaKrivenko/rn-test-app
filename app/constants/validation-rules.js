export const LoginValidationRules = {
  userName: {
    minlength: 6,
    maxlength: 42,
    required: true
  },
  password: {
    required: true
  }
};