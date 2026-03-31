const fs = require("fs");
const path = require("path");

function wrapJson(file) {
    let p = path.join("src/data/content", file);
    let data = JSON.parse(fs.readFileSync(p, "utf8"));
    if (Array.isArray(data)) {
        fs.writeFileSync(p, JSON.stringify({ items: data }, null, 2));
        console.log("Wrapped " + file);
    }
}
wrapJson("designers.json");
wrapJson("faqs.json");
wrapJson("testimonials.json");

function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile() && filePath.endsWith(".tsx")) {
            callback(filePath, stat);
        } else if (stat.isDirectory()) {
            walkSync(filePath, callback);
        }
    });
}

walkSync("src", function(filePath) {
    let content = fs.readFileSync(filePath, "utf8");
    let initial = content;
    
    // Replace imports
    content = content.replace(/import DESIGNERS from "@\/data\/content\/designers\.json";/g, "import DESIGNERS_DATA from \"@/data/content/designers.json\";\nconst DESIGNERS = Array.isArray(DESIGNERS_DATA) ? DESIGNERS_DATA : DESIGNERS_DATA.items;");
    content = content.replace(/import FAQ_ITEMS from "@\/data\/content\/faqs\.json";/g, "import FAQ_ITEMS_DATA from \"@/data/content/faqs.json\";\nconst FAQ_ITEMS = Array.isArray(FAQ_ITEMS_DATA) ? FAQ_ITEMS_DATA : FAQ_ITEMS_DATA.items;");
    content = content.replace(/import TESTIMONIALS from "@\/data\/content\/testimonials\.json";/g, "import TESTIMONIALS_DATA from \"@/data/content/testimonials.json\";\nconst TESTIMONIALS = Array.isArray(TESTIMONIALS_DATA) ? TESTIMONIALS_DATA : TESTIMONIALS_DATA.items;");

    if (content !== initial) {
        fs.writeFileSync(filePath, content, "utf8");
        console.log("Updated: " + filePath);
    }
});

