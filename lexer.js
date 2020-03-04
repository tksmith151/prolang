function lex(inputText){
    output = [];
    index = 0;
    line = 1;

    function nextCharacter() {
        var character = inputText[index]
        index++;
        return character;
    }

    function notSpecial() {
        switch (inputText[index]) {
            case " ": return false;
            case "\n": return false;
            case "(": return false;
            case ")": return false;
            default: return true;
        }
    }

    function newLexeme(value) {
        lexeme = {};
        lexeme.value = value;
        lexeme.line = line;
        output.push(lexeme);
    }

    function handleAtom(character) {
        value = character
        while (index < inputText.length && notSpecial()) {
            value += nextCharacter();
        }
        newLexeme(value);
    }

    function handleCharacter() {
        character = nextCharacter();
        switch (character) {
            case " ": break;
            case "\n": line++; break;
            case "(": newLexeme("("); break;
            case ")": newLexeme(")"); break;
            default: handleAtom(character);
        }
    }


    while (index < inputText.length) {
        handleCharacter();
    }

    return output;
}
