// Проверка, что строка является палиндромом
//
// Палиндром - это строка, которая читается одинаково в обоих направлениях. Например, "level" и "radar" являются палиндромами, тогда как "hello" не является палиндромом.
//
// Пояснение: Проверка на палиндром может быть выполнена путем сравнения символов с начала и конца строки, двигаясь к центру.
// Если все соответствующие символы совпадают, то строка является палиндромом. Если хотя бы одна пара символов не совпадает, то строка не является палиндромом.
export default (str) => {

    const halfLength = Math.floor(str.length / 2);
    let isPalindrome = true;

    for (let i = 0; i < halfLength; i++) {
        const startLetter = str[i];
        const endLetter = str[str.length - 1 - i];
        if(startLetter !== endLetter) {
            isPalindrome = false;
            break;
        }
    }

    return isPalindrome;
}