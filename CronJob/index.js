const cron = require("node-cron");
let shell=require("shelljs");

cron.schedule("* * * * * *", function(){
    console.log("Scheduler running...");
    if(shell.exec("node sayHello.js").code !== 0){
        console.log("Something went wrong");
    }
});

