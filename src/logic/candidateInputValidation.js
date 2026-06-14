export const candidateInputValidation = {
 FullName: {
  required: 'Name is required',
  maxLength: {
   value: 25,
   message: 'Name should be between 3 and 30 characters',
  },
  minLength: {
   value: 3,
   message: 'Name should be between 3 and 30 characters',
  },
  pattern: {
   value: /^[a-zA-Z\s]+$/,
   message: 'Name should contain only letters and spaces',
  },
  validate: (value) => (value && value.trim() !== '') || 'Name is required',
 },
 Email: {
  required: 'Email is required',
  pattern: {
   value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
   message: 'Invalid email format',
  },
  validate: (value) => (value && value.trim() !== '') || 'Email is required',
 },

 PhoneNumber: {
  required: 'Phone Number is required',
  pattern: {
   value: /^\d{10}$/,
   message: 'Invalid phone number format',
  },
  validate: (value) =>
   (value && value.trim() !== '') || 'Phone Number is required',
  maxLength: {
   value: 10,
   message: 'Phone number is max-10 digit',
  },
 },

 otp: {
  minLength: {
   value: 6,
   message: 'OTP must be 6 digits',
  },
  maxLength: {
   value: 6,
   message: 'OTP must be 6 digits',
  },
  pattern: {
   value: /^[0-9]+$/,
   message: 'Only numbers allowed',
  },
 },

 password: {
  required: 'Password is required',
  validate: (value) => (value && value.trim() !== '') || 'Password is required',
  maxLength: {
   value: 5,
   message: 'Password must be 5 Digit',
  },
  minLength: {
   value: 5,
   message: 'Password must be 5 Digit',
  },
  pattern: {
   value: /^[0-9]+$/,
   message: 'Only numbers allowed',
  },
 },
 ConfirmPassword(watch) {
  return {
   required: 'Enter your password',
   validate: (value) =>
    value.trim() !== '' && watch('password') === value
     ? true
     : 'password is not match',
  };
   },
 
 async sand(trigger, getValues, role, sandOtp, setResponse) {
  const isValid = await trigger(['FullName', 'Email', 'PhoneNumber']);
  if (!isValid) {
   return;
  }
  const values = getValues(['FullName', 'Email', 'PhoneNumber']);
  values.unshift(role);
  sandOtp(event, values, setResponse);
 },
};

// 196