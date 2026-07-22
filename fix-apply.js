const fs = require('fs');

const files = ['app/globals.scss', 'styles/components/_buttons.scss', 'styles/components/_cards.scss'];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let lines = content.split('\n');
  let newLines = [];
  
  for (let line of lines) {
    let applyMatch = line.match(/^(\s*)@apply\s+(.+?);$/);
    if (applyMatch) {
      let indent = applyMatch[1];
      let classes = applyMatch[2].split(/\s+/);
      let baseClasses = [];
      let variantClasses = {}; 
      
      for (let cls of classes) {
        let insideBracket = false;
        let lastVariantColonIndex = -1;
        for (let i = 0; i < cls.length; i++) {
          if (cls[i] === '[') insideBracket = true;
          else if (cls[i] === ']') insideBracket = false;
          else if (cls[i] === ':' && !insideBracket) {
            lastVariantColonIndex = i;
          }
        }
        
        if (lastVariantColonIndex !== -1) {
          let variantPart = cls.substring(0, lastVariantColonIndex);
          let utilityPart = cls.substring(lastVariantColonIndex + 1);
          if (!variantClasses[variantPart]) variantClasses[variantPart] = [];
          variantClasses[variantPart].push(utilityPart);
        } else {
          baseClasses.push(cls);
        }
      }
      
      if (baseClasses.length > 0) {
        newLines.push(`${indent}@apply ${baseClasses.join(' ')};`);
      }
      for (let variant in variantClasses) {
        newLines.push(`${indent}@variant ${variant} {`);
        newLines.push(`${indent}  @apply ${variantClasses[variant].join(' ')};`);
        newLines.push(`${indent}}`);
      }
    } else {
      newLines.push(line);
    }
  }
  fs.writeFileSync(file, newLines.join('\n'));
}
