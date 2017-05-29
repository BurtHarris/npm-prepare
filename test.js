var e = require("@expo/spawn-async")

e("npm i").then((s,e) => {
    console.log( "stdout:\n" + s)
})