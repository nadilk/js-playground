// Заменяем группы повторяющихся символов заданной длины на один символ.
//
// Например, при длине 3 строка "aaabbbccc" будет преобразована в "abc", а строка "aabbcc" останется без изменений.
// Строка "aaabbcccc" при длине 3 будет преобразована в "abbcccc".
//
// Пояснение: В этом коде мы используем буфер для хранения текущей группы повторяющихся символов. Когда мы встречаем новый символ, мы проверяем длину буфера.
// Если она равна заданной длине, мы добавляем первый символ из буфера в результат, иначе добавляем весь буфер.
// Затем мы очищаем буфер и начинаем новую группу с текущего символа. В конце мы также проверяем оставшийся буфер и добавляем его к результату.
export default (str, repeatReplaceLength) => {

    let buffer = '';
    let resultStr = '';

    for (let i = 0; i < str.length; i++) {
        if(buffer.length === 0 || buffer[0] === str[i]) {
            buffer += str[i];
        } else {
            if(buffer.length === repeatReplaceLength) {
                resultStr += buffer[0];
            } else {
                resultStr += buffer;
            }
            buffer = str[i];
        }
    }

    if(buffer.length === repeatReplaceLength) {
        resultStr += buffer[0];
    } else {
        resultStr += buffer;
    }

    return resultStr;
}