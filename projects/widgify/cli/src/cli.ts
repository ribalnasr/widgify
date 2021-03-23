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

        const kebabCase = widgetName.toLowerCase();
        let PascalCase = toPascalCase(kebabCase);
        await createFolder(kebabCase);

        if (argv.prefix) {
            PascalCase = toPascalCase(argv.prefix + '-' + kebabCase);
        }

        for (const suffix of ['.class.ts', '.component.html', '.component.ts', '.interface.ts', '.module.ts']) {
            const filePath = `${kebabCase}/${kebabCase}${suffix}`;
            await copyFile(path.resolve(__dirname, `../templates/widget/widget${suffix}`), filePath);
            const file = (await readFile(filePath)).replace(/Widget/g, PascalCase).replace(/widget/g, kebabCase);
            await writeFile(filePath, file);
        }

    }

    // private async updateFunctionsNodeVersion() {
    //     const filePath = 'functions/package.json';
    //     const functionsPackage = await readJson(filePath);
    //     functionsPackage.engines.node = '10';
    //     return writeJson(filePath, functionsPackage);
    // }

    // private async updateAppsFolder() {
    //     const filePath = 'angular.json';
    //     const angularSettings = await readJson(filePath);
    //     angularSettings.newProjectRoot = 'apps';
    //     return writeJson(filePath, angularSettings);
    // }

    // private async updateServerTs(app: string) {
    //     const filePath = `apps/${app}/server.ts`;
    //     let serverCode = await readFile(filePath);
    //     serverCode = serverCode.replace(
    //         `join(process.cwd(), 'dist/${app}/browser')`,
    //         `join(process.cwd(), 'lib/ssr/${app}/browser')`
    //     )
    //     return writeFile(filePath, serverCode);

    // }

    // private async updatePackageScripts(app: string) {
    //     const filePath = 'package.json';
    //     const packageJson = await readJson(filePath);
    //     let scripts = packageJson.scripts;
    //     delete scripts['dev:ssr'];
    //     delete scripts['serve:ssr'];
    //     delete scripts['build:ssr'];
    //     delete scripts['prerender'];

    //     const newScripts = `{
    //         "build:${app}": "ng build ${app} --prod && ng run ${app}:server:production",
    //         "prerender:${app}": "ng run ${app}:prerender",
    //         "deploy:${app}": "firebase deploy --only hosting:${app},functions:${app}SSR"
    //     }`;

    //     scripts = {
    //         ...scripts,
    //         ...JSON.parse(newScripts)
    //     };

    //     return writeJson(filePath, { ...packageJson, scripts });
    // }

    // private async updateOutputPaths(app: string) {
    //     const filePath = 'angular.json';
    //     const angularSettings = await readJson(filePath);
    //     angularSettings.projects[app].architect.build.options.outputPath = `functions/lib/ssr/${app}/browser`;
    //     angularSettings.projects[app].architect.server.options.outputPath = `functions/lib/ssr/${app}/server`;
    //     return writeJson(filePath, angularSettings);
    // }

    // private async updateFirebaseSettings(app: string) {
    //     const filePath = 'firebase.json';
    //     const firebaseSettings = await readJson(filePath);
    //     firebaseSettings.functions.source = 'functions';
    //     let hosting: [any] = firebaseSettings.hosting;

    //     if (!Array.isArray(hosting)) {
    //         hosting = [hosting];
    //     }

    //     const existingAppIndex = hosting.findIndex(hostingApp => hostingApp.target === app);
    //     if (existingAppIndex >= 0) {
    //         hosting.splice(existingAppIndex, 1);
    //     }

    //     hosting.push({
    //         "target": app,
    //         "public": `public/${app}`,
    //         "ignore": [
    //             "firebase.json",
    //             "**/.*",
    //             "**/node_modules/**"
    //         ],
    //         "rewrites": [
    //             {
    //                 "source": "**",
    //                 "function": `${app}SSR`
    //             }
    //         ]
    //     })

    //     // Create public folder.
    //     await createFolder('public/' + app);

    //     return writeJson(filePath, { ...firebaseSettings, hosting });

    // }

    // private async copySSRClass() {
    //     return copyFile(path.resolve(__dirname, '../assets/ssr.class.ts'), 'functions/src/ssr.class.ts');
    // }

    // private async createSSRfunction(app: string) {
    //     const filePath = `functions/src/index.ts`;
    //     let indexCode = await readFile(filePath);

    //     const indexCodeMin = indexCode.replace(/ /g, '').replace(/\"/g, '\'');

    //     if (indexCodeMin.indexOf(`import{ssr}from'./ssr.class'`) < 0) {
    //         indexCode = `import { ssr } from "./ssr.class";\n` + indexCode;
    //     }

    //     if (indexCodeMin.indexOf(`exportconst${app}SSR=newssr('${app}').httpsFunction`) < 0) {
    //         indexCode = indexCode
    //             + `\n\nexport const ${app}SSR = new ssr('${app}').httpsFunction;`;
    //     }

    //     return writeFile(filePath, indexCode);

    // }

    // private async addBuildFunctionsScript() {
    //     const filePath = 'package.json';
    //     const packageJson = await readJson(filePath);

    //     const scripts = {
    //         ...packageJson.scripts,
    //         "build:functions": "npm run build --prefix=functions"
    //     };

    //     return writeJson(filePath, { ...packageJson, scripts });

    // }

    // public async new(argv: yargs.Arguments) {
    //     const projectName = argv.project_name as string;
    //     if (projectName) {

    //         // Create Angular Project.
    //         child_process.execSync(`ng new ${projectName} --createApplication="false"`, { stdio: 'inherit' });
    //         shell.cd(projectName);

    //         // Init Firebase.
    //         child_process.execSync('firebase init', { stdio: 'inherit' })

    //         // Update JSONs.
    //         await this.updateFunctionsNodeVersion();
    //         await this.updateAppsFolder();

    //         console.log(``);
    //         console.log(`-----------------------------------`);
    //         console.log(`Project ${projectName} was created!`);
    //         console.log(`Next steps:`);
    //         console.log(`Navigate to the project's directory: cd ./${projectName}`);
    //         console.log(`To create your first app, run: 'fireplace app [app_name]'.`);
    //         console.log(`-----------------------------------`);
    //         console.log(``);
    //     }
    // }

    // public async app(argv: yargs.Arguments) {

    //     const appName = argv.app_name as string;

    //     // Create App.
    //     console.log('Creating app ' + appName + '.');
    //     child_process.execSync(`ng generate application ${appName}`, { stdio: 'inherit' });

    //     // Add Universal.
    //     console.log('Adding universal.');
    //     child_process.execSync(`ng add @nguniversal/express-engine --clientProject=${appName}`, { stdio: 'inherit' });

    //     // Update dist folder in the server.ts.
    //     console.log('Updating server.ts.');
    //     await this.updateServerTs(appName);

    //     // Add app-specific scripts.
    //     console.log('Updating package scripts.');
    //     await this.updatePackageScripts(appName);

    //     // Update Output paths.
    //     console.log('Updating build paths.');
    //     await this.updateOutputPaths(appName);

    //     // Add @angular/fire.
    //     console.log('Adding Angularfire.');
    //     child_process.execSync(`ng add @angular/fire --clientProject=${appName}`, { stdio: 'inherit' });
    //     child_process.execSync(`npm i -s firebase`, { stdio: 'inherit' });

    //     // Add firebase to functions' package
    //     child_process.execSync(`npm i firebase @angular/fire --prefix functions`, { stdio: 'inherit' });

    //     // Update firebase.json.
    //     console.log('Updating Firebase settings.');
    //     await this.updateFirebaseSettings(appName);

    //     // Copy SSR class file.
    //     console.log('Creating SSR function.');
    //     this.copySSRClass();

    //     // Create SSR function.
    //     this.createSSRfunction(appName);

    //     // Add Build functions script.
    //     this.addBuildFunctionsScript();
    //     child_process.execSync(`npm i --save-dev parse5`, { stdio: 'inherit' });

    //     console.log(``);
    //     console.log(`-----------------------------------`);
    //     console.log(`App ${appName} successfully created!`);
    //     console.log(`Next steps:`);
    //     console.log(`Use 'ng serve ${appName}' to serve non-SSR live dev version.`);
    //     console.log(`Or`);
    //     console.log(`Run 'npm run build:functions' to build your functions.`);
    //     console.log(`Run 'npm run build:${appName}' to build your app.`);
    //     console.log(`Use 'firebase serve' to serve SSR prod version.`);
    //     console.log(`-----------------------------------`);
    //     console.log(``);

    // }



}

new WidgifyCli();