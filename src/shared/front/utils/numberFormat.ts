export function localeNumberFormat(
  number: number,
  locale = "en-IE",
  currencySymbol = "€"
) {
  if (isNaN(number)) {
    return 0;
  }
  return `${currencySymbol}${Number(number).toLocaleString(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}
