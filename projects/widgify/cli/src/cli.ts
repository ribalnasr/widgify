#! /usr/bin/env node

import * as yargs from 'yargs';
// import * as shell from 'shelljs';
import * as path from 'path';
// import * as child_process from 'child_process';
import { toPascalCase, readFile, writeFile, createFolder, copyFile, toCamelCase } from './utils';

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

        const names = {
            'kebab-case': widgetName.toLowerCase(),
            'prefix-kebab-case': '',
            'PascalCase': '',
            'PrefixPascalCase': '',
            'prefixCamelCase': '',
        };

        names['prefix-kebab-case'] = argv.prefix + '-' + names['kebab-case'];
        names['PascalCase'] = toPascalCase(names['kebab-case']);
        names['PrefixPascalCase'] = toPascalCase(names['prefix-kebab-case']);
        names['prefixCamelCase'] = toCamelCase(names['prefix-kebab-case']);

        await createFolder(names['kebab-case']);

        for (const suffix of ['.class.ts', '.component.html', '.component.ts', '.interface.ts', '.module.ts']) {
            const filePath = `${names['kebab-case']}/${names['kebab-case']}${suffix}`;
            await copyFile(path.resolve(__dirname, `../templates/widget/widget${suffix}`), filePath);
            const fileContent = (await readFile(filePath))
                // Convert template names to safe strings to prevent bugs if name will contain string 'widget'.
                .replace(/prefix-widget/g, '{{prefix-kebab-case}}')
                .replace(/PrefixWidget/g, '{{PrefixPascalCase}}')
                .replace(/prefixWidget/g, '{{prefixCamelCase}}')
                .replace(/Widget/g, '{{PascalCase}}')
                .replace(/widget/g, '{{kebab-case}}')
                // Replace with final name values
                .replace(/{{prefix-kebab-case}}/g, names['prefix-kebab-case'])
                .replace(/{{PrefixPascalCase}}/g, names['PrefixPascalCase'])
                .replace(/{{prefixCamelCase}}/g, names['prefixCamelCase'])
                .replace(/{{PascalCase}}/g, names['PascalCase'])
                .replace(/{{kebab-case}}/g, names['kebab-case'])

            await writeFile(filePath, fileContent);
        }

    }

}

new WidgifyCli();