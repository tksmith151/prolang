function fastParse(inputText) {
    let stack = [];
    let index = 0;
    let line = 1;
    let textLength = inputText.length;
    let lexeme = ""
    let level = []
    let tmp = []
    while(index < textLength) {
        // Get next charcter
        let character = inputText[index];
        index++;
        // Handle Character Cases
        if (character === " ") {
            if (lexeme !== "") {
                level.push(lexeme); // Add Lexeme to Current Level
                lexeme = ""; // Reset Lexeme
            }
        } else if (character === "\n") {
            if (lexeme !== "") {
                level.push(lexeme); // Add Lexeme to Current Level
                lexeme = ""; // Reset Lexeme
            }
            line++;
        } else if (character === "(") {
            if (lexeme !== "") {
                level.push(lexeme); // Add Lexeme to Current Level
                lexeme = ""; // Reset Lexeme
            }
            stack.push(level.slice()); // Store Current Level
            level = []; // Reset Level
        } else if (character === ")") {
            if (lexeme !== "") {
                level.push(lexeme); // Add Lexeme to Current Level
                lexeme = ""; // Reset Lexeme
            }
            tmp = stack.pop();
            tmp.push(level.slice());
            level = tmp.slice();
        } else {
            lexeme += character; // Add character to current lexeme
        }
    }
    if (lexeme !== "") {
        level.push(lexeme); // Add Lexeme to Current Level
        lexeme = ""; // Reset Lexeme
    }
    return level;
}
