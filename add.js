/**
 * node c componentName
 * @componentName {String} 组件名
 */

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

console.log("欢迎使用创立移动端app-Cli");
console.log("################################@@@@");
// 设置问题
inquirer.prompt([{
    type: 'input', // 问题类型
    name: 'name', // 数据属性名
    message: '请输入新增模块名称:', // 提示信息
}]).then(answers => {
    // 处理结果

    // 获取到组件名
    const componentName = answers.name;
    const root = './src/views/';
    console.log('prepare to1 creat a ' + componentName + ' component');
    console.log(__dirname, componentName);
    // 读取模板文件，并修改内容
    createFolder();
    createJs();
    createVue();

    function createFolder() {
        // mkdirSync
        let targetDirPath = path.join(__dirname, root, componentName);
        if (!fs.existsSync(targetDirPath)) {
            fs.mkdirSync(targetDirPath);
            console.log('The ' + targetDirPath + ' folder has been created!');
        }
    }

    function createVue() {
        let template = fs.readFileSync(path.join(__dirname, './template/template.vue'), 'utf8');
        let content = template.replace(/componentName/g, componentName); // target file content

        // 目标文件夹和目标文件的路径
        let targetFilePath = path.join(__dirname, root, componentName, componentName + '.vue');

        // writeFile async
        if (!fs.existsSync(targetFilePath)) {
            fs.writeFile(targetFilePath, content, (err) => {
                if (err) throw err;
                console.log('The ' + targetFilePath + ' has been created!');
            });
        } else {
            console.error('error!\n' + targetFilePath + ' has already been existed!');
        }
    }

    function createJs() {
        let template = fs.readFileSync(path.join(__dirname, './template/template.js'), 'utf8');
        let content = template.replace(/componentName/g, componentName); // target file content

        // 目标文件夹和目标文件的路径
        let targetFilePath = path.join(__dirname, root, componentName, 'index.js');

        // writeFile async
        if (!fs.existsSync(targetFilePath)) {
            fs.writeFile(targetFilePath, content, (err) => {
                if (err) throw err;
                console.log('The ' + targetFilePath + ' has been created!');
            });
        } else {
            console.error('error!\n' + targetFilePath + ' has already been existed!');
        }
    }
});