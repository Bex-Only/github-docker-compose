// Example list of banned words
export const bannedWords = ["fan", "satan", "fuck", "sex", "rape", "damn"];

// Helper to check if text contains banned words
export const containsBannedWord = (text: string): boolean => {
  return bannedWords.some(word => text.toLowerCase().includes(word));
};
