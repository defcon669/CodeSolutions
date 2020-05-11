function pigLatin(str) {
    if (/^[aeiou]/i.test(str)) {
        return str + 'way';
    } else {
        return str.replace(/^(.[^aeiou]+)([aeiou].*)$/i, '$2$1ay');
    }
    return 'Completed';
}

console.log(pigLatin('glove'));
