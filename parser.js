function parse(lexemes){
    var output = [];
    var index = 0;

    function assert(value) {
        if(lexemes[index].value !== value) {
            console.log("Parse Error")
        }
        index++;
    }

    function atom() {
        var output = lexemes[index];
        index++;
        return output;
    }

    function parentheses() {
        var output = [];
        assert("(");
        while (index < lexemes.length && lexemes[index].value !== ")") {
            output.push(handleLexeme());
        }
        assert(")");
        return output;
    }

    function handleLexeme() {
        switch (lexemes[index].value) {
            case "(": return parentheses();
            case ")": assert("(");
            default: return atom();
        }
    }

    while (index < lexemes.length) {
        output.push(handleLexeme());
    }

    return output;
}
