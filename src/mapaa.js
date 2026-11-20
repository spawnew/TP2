// mapaa.js -> Lectura y escritura de archivos en modo ASINCRÓNICO con PROMISES (async/await)

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rutaPackageJson = path.join(__dirname, '..', 'package.json');
const rutaInfoTxt = path.join(__dirname, '..', 'info.txt');

async function main() {
    try {
        // 1) Lectura asincrónica del archivo package.json
        const contenidoStr = await fs.readFile(rutaPackageJson, 'utf-8');
        const contenidoObj = JSON.parse(contenidoStr);
        const stats = await fs.stat(rutaPackageJson);

        const info = {
            contenidoStr,
            contenidoObj,
            size: stats.size
        };

        // 2) Muestra por consola el objeto info
        console.log('--- MODO ASINCRÓNICO CON ASYNC/AWAIT (mapaa.js) ---');
        console.log(info);

        // 3) Guarda el objeto info en info.txt
        await fs.writeFile(rutaInfoTxt, JSON.stringify(info, null, '\t'));

        console.log('Archivo info.txt generado correctamente.');
    } catch (error) {
        // 4) Manejo de errores
        console.log(error);
    }
}

main();