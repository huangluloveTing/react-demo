# 脚手架制作

>### 搭建前准备
1.  第三方工具
- commander.js，可以自动的解析命令和参数，用于处理用户输入的命令。
- download-git-repo，下载并提取 git 仓库，用于下载项目模板。
- Inquirer.js，通用的命令行用户界面集合，用于和用户进行交互。
- handlebars.js，模板引擎，将用户提交的信息动态填充到文件中。
- ora，下载过程久的话，可以用于显示下载中的动画效果。
- chalk，可以给终端的字体加上颜色。
- log-symbols，可以在终端上显示出 √ 或 × 等的图标


## commander 
### 1. 安装
```
npm install commander
```
### 2. API
- version
```
var program = require('commander');
program
    .version('0.0.1')
    .parse(process.argv);
#执行结果：
node index.js -V
0.0.1
#如果希望程序响应-v选项而不是-V选项，
#只需使用与option方法相同的语法将自定义标志传递给version方法
program
  .version('0.0.1', '-v, --version')
```
- option
```
使用.option()方法定义commander的选项options，
示例：.option('-n, --name <items1> [items2]', 'name description', 'default value')
参数解析：


自定义标志<必须>：分为长短标识，中间用逗号、竖线或者空格分割；标志后面可跟必须参数或可选参数，前者用<>包含，后者用[]包含
选项描述<省略不报错>：在使用 --help 命令时显示标志描述
默认值<可省略>
短标志可以作为单独的参数传递。像 -abc 等于 -a -b -c。多词组成的选项，像“--template-engine”会变成 program.templateEngine 等。
```
- command
```
#!/usr/bin/env node

// node.js
const program = require('commander')

program
  .version('1.0.0')
  .command('init <name>')
  .option('-p, --publish [name]', 'publish')
  .option('-c, --cpublish [name]', 'publish')
  .option('-d, --dpublish [name]', 'publish')
  .allowUnknownOption()
  .action((name, cmd) => {
      console.log(name)
      console.log(cmd)
  })

# 如果执行 node node.js init prod -pcd ok ,则 action 回调中 cmd 中 publlish: pk, cpublish: ok, dpublish: ok
# action 回调中如果没有其他参数，回调函数中第一个参数代表 command 中的参数值，后面为 option 对象值
```
> 可变参数
```
var program = require('commander');
 
program
  .version('0.1.0')
  .command('rmdir <dir> [otherDirs...]')
  .action(function (dir, otherDirs) {
    console.log('rmdir %s', dir);
    if (otherDirs) {
      otherDirs.forEach(function (oDir) {
        console.log('rmdir %s', oDir);
      });
    }
  });
 
program.parse(process.argv);

#执行结果
node index.js rmdir ./hahah aaa bbb ccc
 
rmdir ./hahah
rmdir aaa
rmdir bbb
rmdir ccc
# 可变参数的值保存在数组中， 通过program.args以及传递action的参数获取。
```
> commander 最后通过 parse 方法解析命令 

## download-git-repo
```
download('https://github.com:owner/project_name', name,
 {clone: true}, (err) => {
    console.log(err ? '下载失败' : '下载成功')
})
```
> 需要注意的是， 如果是 github ，需要 在 github 地址中加入 https://github.com: ，然后跟owner 和 项目名称，如果有分支，可以加分支在后面
```
download('https://github.com:owner/project_name#branch', name, 
{clone: true}, (err) => {
    console.log(err ? '下载失败' : '下载成功')
})
```

## ora
- api
```
start(text?: string): Ora;
stop(): Ora;
succeed(text?: string): Ora;
fail(text?: string): Ora;
warn(text?: string): Ora;
info(text?: string): Ora;
```
> 可以在 终端命令中显示 loading 动画等效果
```
const spinner = ora('Downloading please wait...');
spinner.start('start');
....
spinner.stop('stop')
...
spinner.fail('fail')
...
```

## chalk
> 可以在终端颜色输出

## handlebars.js
// package.json
```
{
    "name": "{{name}}",
    "version": "{{version}}"
}

```
```
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: '请输入你的名字'
    },
    {
        type: 'input',
        name: 'title',
        message: 'please title '
    },
    {
        type: 'input',
        name: 'version',
        message: 'please version '
    }]
).then((answers) => {
    const fileName = 'package.json'
    const content = fs.readFileSync(fileName).toString()
    console.log('==== file content ====')
    console.log(content)
    const result = handlebars.compile(content)(answers)
    console.log('====== compile =====')
    console.log(result)
    fs.writeFileSync(fileName, result)
})
```

## Inquirer
> 通过Inquirer的prompt方法就可以在命令行中对用户提出问题。
```
var inquirer = require('inquirer')
inquirer.prompt([
  {
    type: 'confirm',
    name: 'test',
    message: 'Are you handsome?',
    default: true
  }
]).then((answers) => {
  console.log('结果为:')
  console.log(answers)
})
```
1. Questions —— 问题
>问题的标题和默认结果值都是可以预设的。而在回答完成后会返回一个Promise对象，在其then方法中可以获取到用户输入的所有回答。其中传递给prompt方法的参数为一个question问题数组，数组中的每个元素都是一个问题对象。其包含的属性共有以下几种：
```
{
  type: String, // 表示提问的类型，下文会单独解释
  name: String, // 在最后获取到的answers回答对象中，作为当前这个问题的键
  message: String|Function, // 打印出来的问题标题，如果为函数的话
  default: String|Number|Array|Function, // 用户不输入回答时，问题的默认值。或者使用函数来return一个默认值。假如为函数时，函数第一个参数为当前问题的输入答案。
  choices: Array|Function, // 给出一个选择的列表，假如是一个函数的话，第一个参数为当前问题的输入答案。为数组时，数组的每个元素可以为基本类型中的值。
  validate: Function, // 接受用户输入，并且当值合法时，函数返回true。当函数返回false时，一个默认的错误信息会被提供给用户。
  filter: Function, // 接受用户输入并且将值转化后返回填充入最后的answers对象内。
  when: Function|Boolean, // 接受当前用户输入的answers对象，并且通过返回true或者false来决定是否当前的问题应该去问。也可以是简单类型的值。
  pageSize: Number, // 改变渲染list,rawlist,expand或者checkbox时的行数的长度。
}
```
2. Prompt types —— 问题类型
    - List
{type: 'list'}
问题对象中必须有type,name,message,choices等属性，同时，default选项必须为默认值在choices数组中的位置索引(Boolean)

    - Raw list
{type: 'rawlist'}
与List类型类似，不同在于，list打印出来为无序列表，而rawlist打印为有序列表

    - Expand
{type: 'expand'}
同样是生成列表，但是在choices属性中需要增加一个属性：key，这个属性用于快速选择问题的答案。类似于alias或者shorthand的东西。同时这个属性值必须为一个小写字母

    - Checkbox
{type: 'checkbox'}
其余诸项与list类似，主要区别在于，是以一个checkbox的形式进行选择。同时在choices数组中，带有checked: true属性的选项为默认值。

    - Confirm
{type: 'confirm'}
提问，回答为Y/N。若有default属性，则属性值应为Boolean类型

    - Input
{type: 'input'}
获取用户输入字符串

    - Password
{type: 'password'}
与input类型类似，只是用户输入在命令行中呈现为XXXX

    - Editor
{type: 'editor'}
终端打开用户默认编辑器，如vim，notepad。并将用户输入的文本传回



# webpack 学习笔记
```
npm install -D webpack

```

## 仅仅打包js文件
### webpack 配置文件
```
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.join(__dirname , 'dist'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', 'jsx']
    }
}
```
### webpack-dev-server
  devserver的配置选项	功能描述
>>    contentBase	默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"目录）
    port	设置默认监听端口，如果省略，默认为”8080“
    inline	设置为true，当源文件改变时会自动刷新页面
    historyApiFallback	在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html

### babel
* babel7以前的配置
* npm install --save-dev babel-core babel-loader@7 babel-preset-env babel-preset-react --verbose
```
// .babelrc
{
    "presets": ["env", "react"]
}
```
* babel7配置
* npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev --verbose
```
{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```
