var {After} = require('cucumber');


  After(function() {
    if(this.driver !=null){
      return this.driver.quit();
    }
  });