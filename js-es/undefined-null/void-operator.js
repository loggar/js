// void <expression> evaluates the expression and returns undefined no matter the result of the evaluation

void 1; // => undefined
void false; // => undefined
void { name: "John Smith" }; // => undefined
void Math.min(1, 3); // => undefined
