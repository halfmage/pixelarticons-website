const fg = require("fast-glob");
const path = require("path");
const fs = require("fs");

module.exports = function () {
  return new Promise(async (resolve, reject) => {
    const iconFolder = path.resolve(__dirname, "../node_modules/pixelarticons/svg");
    const svgIcons = await fg("**/*.svg", { cwd: iconFolder });
    const iconData = await Promise.all(
      svgIcons.map(async (name) => {
        const nameWithoutExtension = path.parse(name).name;
        const source = fs.readFileSync(path.resolve(iconFolder, name), {
          encoding: "utf8",
        });
        const sourceWithClass = source.replace("<svg", '<svg class="w-6 lg:w-12 h-6 lg:h-12"');
        return { name, source, sourceWithClass, nameWithoutExtension };
      })
    );
    resolve(iconData);
  });
};
