function run() {
    console.clear();
    var inputText = document.getElementById("file").value;
    lexemes = lex(inputText);
    console.log(lexemes);
    ast = parse(lexemes);
    console.log(ast);
    output = interpret(ast);
    console.log(output);
    document.getElementById("terminal").value = JSON.stringify(output);
}
