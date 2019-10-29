#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

// 复制文件
function copyTemplate(from, to) {
    from = path.join(__dirname, 'views', from);
    console.log(from);
    write(to, fs.readFileSync(from, 'utf-8'))
}

function write(path, str, mode) {
    fs.writeFileSync(path, str)
}
// 新建目录
function mkdir(path, fn) {
    fs.mkdir(path, function (err) {
        fn && fn()
    })
}

const copyfiles = (name) => {
    let PATH = ".";
    mkdir(PATH + '/views/' + name, function () {
        copyTemplate("/demo/index.js", PATH + '/views/' + name + '/index.js');
        copyTemplate("/demo/index.vue", PATH + '/views/' + name + '/index.vue');
    })
}


const inquirer = require('inquirer');
console.log("欢迎使用创立移动端app-Cli");
console.log("################################");
// 设置问题
inquirer.prompt([{
    type: 'input', // 问题类型
    name: 'name', // 数据属性名
    message: '请输入新增模块名称:', // 提示信息
}]).then(answers => {
    // 处理结果
    // console.log(`输入值: `, answers.name)
    copyfiles(answers.name);
    console.log("添加成功")
})