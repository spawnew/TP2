// ms.js -> Lectura y escritura de archivos en modo SINCRÓNICO

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// package.json e info.txt viven en la raíz del proyecto (un nivel arriba de src/)
const rutaPackageJson = path.join(__dirname, '..', 'package.json');
const rutaInfoTxt = path.join(__dirname, '..', 'info.txt');

try {
    // 1) Lectura sincrónica del archivo package.json
    const contenidoStr = fs.readFileSync(rutaPackageJson, 'utf-8');
    const contenidoObj = JSON.parse(contenidoStr);
    const { size } = fs.statSync(rutaPackageJson);

    const info = {
        contenidoStr,
        contenidoObj,
        size
    };

    // 2) Muestra por consola el objeto info
    console.log('--- MODO SINCRÓNICO (ms.js) ---');
    console.log(info);

    // 3) Guarda el objeto info en info.txt
    fs.writeFileSync(rutaInfoTxt, JSON.stringify(info, null, '\t'));

    console.log('Archivo info.txt generado correctamente.');
} catch (error) {
    // 4) Manejo de errores
    console.log(error);
}