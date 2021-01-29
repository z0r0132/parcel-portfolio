const req = require("require-yml");
const data = req("./src/data/data.yaml");
console.log(data);
module.exports = {
  locals: {
    d: data,
    title: "world",
  },
};
