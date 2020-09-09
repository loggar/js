"2345-678r9".match(/[a-z A-Z]/); // returns ["r", index: 8, input: "2345-678r9"]
"2345-678r9".replace(/[a-z A-Z]/, ""); // returns 2345-6789