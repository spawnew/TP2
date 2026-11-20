// mac.js -> Lectura y escritura de archivos en modo ASINCRÓNICO con CALLBACKS

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rutaPackageJson = path.join(__dirname, '..', 'package.json');
const rutaInfoTxt = path.join(__dirname, '..', 'info.txt');

// 1) Lectura asincrónica del archivo package.json
fs.readFile(rutaPackageJson, 'utf-8', (errLectura, contenidoStr) => {
    if (errLectura) {
        // 4) Manejo de errores
        console.log(errLectura);
        return;
    }

    fs.stat(rutaPackageJson, (errStat, stats) => {
        if (errStat) {
            console.log(errStat);
            return;
        }

        try {
            const contenidoObj = JSON.parse(contenidoStr);

            const info = {
                contenidoStr,
                contenidoObj,
                size: stats.size
            };

            // 2) Muestra por consola el objeto info
            console.log('--- MODO ASINCRÓNICO CON CALLBACKS (mac.js) ---');
            console.log(info);

            // 3) Guarda el objeto info en info.txt
            fs.writeFile(rutaInfoTxt, JSON.stringify(info, null, '\t'), (errEscritura) => {
                if (errEscritura) {
                    console.log(errEscritura);
                    return;
                }
                console.log('Archivo info.txt generado correctamente.');
            });
        } catch (errParse) {
            console.log(errParse);
        }
    });
});