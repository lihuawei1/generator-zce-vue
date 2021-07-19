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
            'package-lock.json',
            'package.json',
            "README.md"
        ]
        templates.forEach(item=>{ 
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers = this.answers
            )
        })
    }
}