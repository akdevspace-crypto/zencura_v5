const fs = require('fs');
const path = require('path');

const files = [
    'src/components/home/WhatWeAreBuilding.tsx',
    'src/components/home/MissingFoundation.tsx',
    'src/app/institutions/page.tsx',
    'src/app/research/page.tsx',
    'src/app/programs/page.tsx',
    'src/app/products/page.tsx',
    'src/app/impact/page.tsx',
    'src/app/founder/page.tsx',
    'src/app/about/page.tsx'
];

files.forEach(file => {
    const fullPath = path.join(process.cwd(), file);
    if (!fs.existsSync(fullPath)) return;

    let content = fs.readFileSync(fullPath, 'utf8');
    content = content.replace(/\{\/\*\s*HeritageDoubleBorder removed\s*\*\/\}/g, '<HeritageDoubleBorder />');
    content = content.replace(/\{\/\*\s*HeritageSectionBorder removed\s*\*\/\}/g, '<HeritageSectionBorder />');

    const needsDoubleImport = content.includes('<HeritageDoubleBorder />') &&
        !content.match(/\bHeritageDoubleBorder\b/g)?.length > 1; // Assuming it matches `<Heritage...` once means no import

    if (content.includes('<HeritageDoubleBorder />')) {
        // Check if it's already in the import from HeritageUI
        if (!content.includes('HeritageDoubleBorder') || content.match(/HeritageDoubleBorder/g).length === 1) {
            content = content.replace(/\} from ['"]@\/components\/ui\/HeritageUI['"];?/, ', HeritageDoubleBorder } from "@/components/ui/HeritageUI";');
        }
    }

    if (content.includes('<HeritageSectionBorder />')) {
        if (!content.includes('HeritageSectionBorder') || content.match(/HeritageSectionBorder/g).length === 1) {
            content = content.replace(/\} from ['"]@\/components\/ui\/HeritageUI['"];?/, ', HeritageSectionBorder } from "@/components/ui/HeritageUI";');
        }
    }

    fs.writeFileSync(fullPath, content);
});
