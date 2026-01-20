const fg = require("fast-glob");
const path = require("path");

module.exports = function () {
  return new Promise(async (resolve, reject) => {
    const iconFolder = path.resolve(__dirname, "../newicons");
    const pngIcons = await fg("**/*.png", { cwd: iconFolder });
    const iconData = pngIcons.map((name) => {
      const nameWithoutExtension = path.parse(name).name;
      const filename = name;
      
      // Extract style variant from filename (sharp, glyph, solid, or base)
      let style = 'base';
      if (nameWithoutExtension.endsWith('-sharp')) {
        style = 'sharp';
      } else if (nameWithoutExtension.endsWith('-glyph')) {
        style = 'glyph';
      } else if (nameWithoutExtension.endsWith('-solid')) {
        style = 'solid';
      }
      
      // Extract base name (without style suffix)
      let baseName = nameWithoutExtension;
      if (style !== 'base') {
        baseName = nameWithoutExtension.replace(`-${style}`, '');
      }
      
      return {
        name,
        nameWithoutExtension,
        baseName,
        style,
        filename,
        path: `/newicons/${filename}`
      };
    });
    
    // Sort by base name, then by style
    iconData.sort((a, b) => {
      if (a.baseName !== b.baseName) {
        return a.baseName.localeCompare(b.baseName);
      }
      const styleOrder = { base: 0, sharp: 1, glyph: 2, solid: 3 };
      return (styleOrder[a.style] || 99) - (styleOrder[b.style] || 99);
    });
    
    resolve(iconData);
  });
};
