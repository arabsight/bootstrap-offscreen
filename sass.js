const fs = require("fs");
const sass = require("sass");

sass.render(
  { file: "./src/bootstrap-offscreen.scss", outputStyle: "compressed" },
  function(err, result) {
    if (!err) {
      fs.writeFile("./dist/bootstrap-offscreen.css", result.css, function(err) {
        if (!err) {
          console.log("file written to disk");
        }
      });
    }
  }
);
