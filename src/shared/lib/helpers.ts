function FnToUpperCase(text: string) {
  return text.toUpperCase();
}

function FnSliceText(text: string, maxLength: number) {
  if (text.length > maxLength) {
    return `${text.slice(0, maxLength)} ...`;
  }
  return text;
}

export default { FnToUpperCase, FnSliceText };
