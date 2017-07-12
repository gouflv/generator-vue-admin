var Generator = require('yeoman-generator');

var DEST_PATH = 'src/admin-common';

module.exports = class extends Generator {
  
  writing() {
    this.fs.copy(
      this.templatePath('../../node_modules/vue-admin-common/src/admin-common'),
      this.destinationPath(DEST_PATH)
    );
  }

  end () {
   this.log('created admin-common lib');
  }

};