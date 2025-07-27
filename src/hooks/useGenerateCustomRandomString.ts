type CharacterSet = {
  uppercase?: boolean;
  lowercase?: boolean;
  numbers?: boolean;
  specialChars?: boolean;
  /**
   * Optionally provide a custom string of characters to include.
   * This will be added to any other selected character sets.
   */
  customChars?: string;
};

export default function useGenerateCustomRandomString(
  length: number,
  options: CharacterSet = {
    uppercase: true,
    lowercase: true,
    numbers: true,
    specialChars: true,
  }
): string {
  let characters = "";
  if (options.uppercase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (options.lowercase) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (options.numbers) {
    characters += "0123456789";
  }
  if (options.specialChars) {
    characters += "!@#$%^&*()_+-=[]{}|;:,.<>?";
  }
  if (options.customChars) {
    characters += options.customChars;
  }

  // Handle case where no character type is selected
  if (characters.length === 0) {
    console.warn(
      "No character types selected. Falling back to all default characters."
    );
    characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
  }

  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
