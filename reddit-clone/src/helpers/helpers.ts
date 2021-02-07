export function abbreviateNumber(number?: number): string {
  if (number) {
    const SI_POSTFIXES = ["", "k", "M", "G", "T", "P", "E"];
    const tier = (Math.log10(Math.abs(number)) / 3) | 0;

    if (tier === 0) return number.toString();

    const postfix = SI_POSTFIXES[tier];
    const scale = Math.pow(10, tier * 3);
    const scaled = number / scale;
    let formatted = scaled.toFixed(1) + "";

    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2);

    return formatted + postfix;
  }
  return "";
}

export function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * max) + min;
}
