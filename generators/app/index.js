const Generator = require('yeoman-generator')

module.exports = class extends Generator { 
    prompting() { 
        return this.prompt([
            {
                type:"input",
                name:'title',
                message:'You project name',
                default:this.appname
            }
        ])
        .then(answers=>{ 
            this.answers = answers
        })
    }

    writing(){ 
        const templates = [
            'build/build.js',
            'build/check-versions.js',
            'build/logo.png',
            'build/utils.js',
            'build/vue-loader.conf.js',
            'build/webpack.base.conf.js',
            'build/webpack.dev.conf.js',
            'build/webpack.prod.conf.js',
            'config/dev.env.js',
            'config/index.js',
            'config/prod.env.js',
            'src/assets/logo.png',
            'src/components/HelloWorld.vue',
            'src/router/index.js',
            'src/App.vue',
            'src/main.js',
            'static/.gitkeep',
            'index.html',
            'package.json',
            "README.md",
            'yarn.lock'
        ]
        templates.forEach(item=>{ 
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers = this.answers
            )
        })
        

        // const tmpl = this.templatePath('index.html')
        // // 输出目标路径
        // const output = this.destinationPath('index.html')
        // //模版数据上下文
        // const context = this.answers
        // this.fs.copyTpl(tmpl,output,context)
    }
}