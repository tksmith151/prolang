function interpret(ast) {
    function evaluateZero(ast) {
        output = evaluate([ast[1]]);
        output.unshift(0);
        return output;
    }

    function evaluateOne(ast) {
        output = evaluate([ast[1]]);
        output.unshift(1);
        return output;
    }

    function evaluateRest(ast) {
        output = evaluate([ast[1]]);
        output.shift();
        return output;
    }

    function evaluateTest(ast) {
        result = evaluate([ast[1]]);
        if (result.length < 1) {
            return evaluate([ast[2]]);
        } else if (result[0] === 0) {
            return evaluate([ast[3]]);
        } else {
            return evaluate([ast[4]]);
        }
    }

    function evaluate(ast) {
        if (ast.length < 1) {
            return [];
        } else if (ast[0].value === "zero") {
            return evaluateZero(ast);
        } else if (ast[0].value === "one") {
            return evaluateOne(ast);
        } else if (ast[0].value === "rest") {
            return evaluateRest(ast);
        } else if (ast[0].value === "test") {
            return evaluateTest(ast);
        } else {
            return evaluate(ast[0]);
        }
    }

    return evaluate(ast);
}
