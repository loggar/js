if(someComplexValidation(value) && value.length !== 9) return;

if(value.length !== 9 && someComplexValidation(value)) return;

// second way better.