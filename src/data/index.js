const { readFileSync } = require("fs");

exports.data = {
    menu: JSON.parse(readFileSync("./src/data/menu.json", "utf8")),
    phone: JSON.parse(readFileSync("./src/data/phone.json", "utf8")),
    social: JSON.parse(readFileSync("./src/data/social.json", "utf8")),
    schedule: JSON.parse(readFileSync("./src/data/schedule.json", "utf8")),
    utp: JSON.parse(readFileSync("./src/data/utp.json", "utf8")),
    products: JSON.parse(readFileSync("./src/data/products.json", "utf8")),
    comments: JSON.parse(readFileSync("./src/data/comments.json", "utf8")),
};
