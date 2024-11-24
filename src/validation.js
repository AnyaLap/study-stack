
// Регулярные выражения для полей таблицы
export const isLatinLowerCase = (str) => /^[a-z]+$/.test(str);
export const isCyrillicLowerCase = (str) => /^[а-яё]+$/.test(str);
export const isTranscriptionValid = (str) => /^\[[ˈˌa-zA-Zɪʊʌæəɛɪoʊɔɹʃʒθðŋʔːʲ˩˧˥˦˨ˤʊ̃ə̃ɨ̃ø̃ʊ̃ʌ̃ĩ̃ɑ̃ˈɹⱱɞəː]+\]$/.test(str);
// Проверка на наличие пустых полей
// export const hasEmptyFields = (obj) => Object.values(obj).some(field => !field);
export const hasEmptyFields = (obj) => {
    // Проверка, что obj - это объект, и проверка на пустые поля
    return obj && typeof obj === 'object' && Object.values(obj).some(field => !field);
  };