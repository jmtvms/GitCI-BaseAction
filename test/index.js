'use strict';
const baseActionModule = require("../lib/index.js");

var testAction = { "nothing": "nothing" };

console.log("Starting action testing.");
try {
    var action = new baseActionModule.BaseAction(testAction);

    action.on("actionSuccess", function () {
        console.assert(true, "Action tested successfuly");
        console.log("Action tested successfuly");
        process.exit(0);
    });

    action.on("actionError", function () {
      console.assert(false, "Erro testing action: %s", error);
      process.abort();
    });

    action.execute();
} catch (error) {
    console.assert(false, "Erro testing action: %s", error);
    process.abort();
}