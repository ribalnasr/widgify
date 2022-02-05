#! /usr/bin/env node

import * as yargs from 'yargs';
// import * as shell from 'shelljs';
import * as path from 'path';
// import * as child_process from 'child_process';
import { toPascalCase, readFile, writeFile, createFolder, copyFile } from './utils';

class WidgifyCli {

    public argv = yargs
        .usage('Usage: $0 <command> [options]')
        // Generate
        .command(['g [name] [prefix]'], 'Generates a new widget template inside the current folder.', {}, argv => this.generateWidget(argv))
        // Defaults
        .help('h')
        .alias('h', 'help')
        .alias('v', 'version')
        .argv

    public async generateWidget(argv: yargs.Arguments) {
        const widgetName = argv.name as string;
        if (!widgetName) {
            console.error('You should specify a name for your widget.');
            return;
        }

        let kebabCase = widgetName.toLowerCase();
        const filename = kebabCase;

        await createFolder(filename);

        if (argv.prefix) {
            kebabCase = argv.prefix + '-' + kebabCase;
        }

        const PascalCase = toPascalCase(kebabCase);

        for (const suffix of ['.class.ts', '.component.html', '.component.ts', '.interface.ts', '.module.ts']) {
            const filePath = `${filename}/${filename}${suffix}`;
            await copyFile(path.resolve(__dirname, `../templates/widget/widget${suffix}`), filePath);
            const file = (await readFile(filePath)).replace(/Widget/g, PascalCase).replace(/widget/g, kebabCase);
            await writeFile(filePath, file);
        }

    }

}

new WidgifyCli();