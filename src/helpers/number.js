/**
 * 在球场
 * zaiqiuchang.com
 */

export function numberText (number) {
  if (number < 10000) {
    return number.toString()
  } else {
    return Math.round(number / 10000) + '万'
  }
}
