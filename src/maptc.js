// maptc.js -> Lectura y escritura de archivos en modo ASINCRÓNICO con PROMISES (then/catch)

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rutaPackageJson = path.join(__dirname, '..', 'package.json');
const rutaInfoTxt = path.join(__dirname, '..', 'info.txt');

let contenidoStr;

// 1) Lectura asincrónica del archivo package.json
fs.readFile(rutaPackageJson, 'utf-8')
    .then((data) => {
        contenidoStr = data;
        return fs.stat(rutaPackageJson);
    })
    .then((stats) => {
        const contenidoObj = JSON.parse(contenidoStr);

        const info = {
            contenidoStr,
            contenidoObj,
            size: stats.size
        };

        // 2) Muestra por consola el objeto info
        console.log('--- MODO ASINCRÓNICO CON PROMISES then/catch (maptc.js) ---');
        console.log(info);

        // 3) Guarda el objeto info en info.txt
        return fs.writeFile(rutaInfoTxt, JSON.stringify(info, null, '\t'));
    })
    .then(() => {
        console.log('Archivo info.txt generado correctamente.');
    })
    .catch((error) => {
        // 4) Manejo de errores
        console.log(error);
    });