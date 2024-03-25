export const calculateAge = (birthday) => {
  const userBirthdayReplace = birthday.replace(/-/g, '/');
  const today = new Date();
  const birthDate = new Date(userBirthdayReplace);
  const currentAge = today.getFullYear() - birthDate.getFullYear();

  return currentAge;
};
