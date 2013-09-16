//fonction .js

function SMSComposer()
  {    
    this.resultCallback = null;
  }
 
  SMSComposer.prototype.showSMSComposer = function(toRecipients, body)
  {
    var args = {};    
    if(toRecipients)        
      args.toRecipients = toRecipients;    
    if(body)
      args.body = body;
    
      Cordova.exec(null, null, "SendSMS", "send", args);
  }

  Cordova.addConstructor(function () 
  {
    if (!window.plugins) {
        window.plugins = {};
    }

  window.plugins.smsComposer = new SMSComposer();
  
  });