#! /usr/bin/env node

import * as fs from 'fs';

export const toCamelCase = (str: string) => {
    let arr = str.split('-');
    let capital = arr.map((item, index) => index ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() : item.toLowerCase());
    return capital.join("");
}

export const toPascalCase = (str: string) => {
    let arr = str.split('-');
    let capital = arr.map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());
    return capital.join("");
}


export const readFile = async <T = string>(path: fs.PathLike, json?: boolean) => {
    return new Promise<T>((resolve, reject) => {
        fs.readFile(path, 'utf8', (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(json ? JSON.parse(data) : data);
            }
        })
    })
}

export const writeFile = async (path: fs.PathLike, data: any, json?: boolean) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, json ? JSON.stringify(data, null, '\t') : data, {}, (error) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        })
    })
}

export const readJson = async (path: fs.PathLike) => {
    return readFile<Record<string, any>>(path, true);
}

export const writeJson = async (path: fs.PathLike, data: Record<string, any>) => {
    return writeFile(path, data, true);
}

export const createFolder = async (path: fs.PathLike) => {
    return new Promise((resolve, reject) => {
        fs.mkdir(path, { recursive: true }, (error) => {
            if (error) {
                reject(error);
            } else {
                resolve(path);
            }
        })
    });
}

export const copyFile = async (src: fs.PathLike, dest: fs.PathLike) => {
    return new Promise((resolve, reject) => {
        fs.copyFile(src, dest, (error) => {
            if (error) {
                reject(error);
            } else {
                resolve('done');
            }
        })
    })
}