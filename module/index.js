var Generator = require('yeoman-generator');

var DEST_PATH = 'src/modules';

module.exports = class extends Generator {
  initializing() {
    this.module_name = null;
    this.module_desc = null;
  }

  prompting () {
    return this.prompt([
      {
        type: 'input',
        name: 'module_name',
        message: '每个模块都有个牛逼的名字:',
        validate: str => {
          return str.length > 2
        }
      },
      {
        type: 'input',
        name: 'module_desc',
        message: '还有牛逼的描述:'
      }
    ]).then(res => {
      this.module_name = res.module_name
      this.module_desc = res.module_desc
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(`${DEST_PATH}/${this.module_name}`),
      {
        module_name: this.module_name,
        module_desc: this.module_desc
      }
    );
  }

  end () {
   this.log(`Created module success: ${this.module_name}`);
  }

};