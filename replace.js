const fs = require("fs");
const path = require("path");

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
    content = content.replace(/import \{ DESIGNERS \} from "@\/data\/designers";/g, "import DESIGNERS from \"@/data/content/designers.json\";");
    content = content.replace(/import \{ FAQ_ITEMS \} from "@\/data\/faqs";/g, "import FAQ_ITEMS from \"@/data/content/faqs.json\";");
    content = content.replace(/import \{ TESTIMONIALS \} from "@\/data\/testimonials";/g, "import TESTIMONIALS from \"@/data/content/testimonials.json\";");

    if (content !== initial) {
        fs.writeFileSync(filePath, content, "utf8");
        console.log("Updated: " + filePath);
    }
});

