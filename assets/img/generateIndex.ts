import * as fs from 'fs';
import * as path from 'path';

const dirPath = __dirname;

// Função para percorrer recursivamente subpastas
const walkSync = (dir: string, fileList: string[] = []) => {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkSync(filePath, fileList);
    } else {
      fileList.push(path.relative(dirPath, filePath));
    }
  });
  return fileList;
};

// Converte para snake_case
const toSnakeCase = (str: string) =>
  str
    .replace(/\.[^/.]+$/, '') // remove extensão
    .replace(/([a-z])([A-Z])/g, '$1_$2') // separa camelCase
    .replace(/[\s\-]+/g, '_') // espaços e hífens viram _
    .replace(/[^\w]/g, '') // remove símbolos
    .toLowerCase();

const allFiles = walkSync(dirPath);

const imageFiles = allFiles.filter(file =>
  /\.(png|jpe?g|gif|webp|svg)$/i.test(file)
);

const entries = imageFiles.map(file => {
  const key = toSnakeCase(path.basename(file));
  const filePath = file.replace(/\\/g, '/'); // compatibilidade Windows
  return `  ${key}: require('./${filePath}'),`;
});

const content = `const images = {\n${entries.join('\n')}\n} as const;

type Images = keyof typeof images;

export { images };
export type { Images };
`;

fs.writeFileSync(path.join(dirPath, 'index.ts'), content);
console.log('✅ index.ts gerado com sucesso!');
