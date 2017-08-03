var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  
  writing() {
    this.fs.copy(
      this.templatePath('../../node_modules/vue-admin-common/src'),
      this.destinationPath('src')
    );
  }

  end () {
    this.log('Created vue-admin-common template');  
  }

};