export const feetToInch = (feet: number) => {
  const feetReminder = feet % 1; //get the decimal reminder
  const result = (feetReminder * 12).toFixed(1);
  return result;
};

export const convertToFeets = (num: number) => {
  const result = num / 30.48;
  return result;
};

export const decimeterstToMeters = (num: number) => {
  const result = (num / 10).toFixed(2);
  return result;
};

export const hectogramsToKilograms = (num: number) => {
  return num / 10;
};

export const kilogramsToPounds = (num: number) => {
  return (num * 2.205).toFixed(1);
};
