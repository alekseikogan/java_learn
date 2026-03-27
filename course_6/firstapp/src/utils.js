// utils.js

// функция для проверки email
export const validateEmail = (email) => {
  // простой regex для проверки формата email
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const validatePassword = (password) => password.length >= 8;