(function () {

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/mailchimp/mailchimp.js                                   //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
var mailchimp = Npm.require('mailchimp');                            // 1
var Future = Npm.require('fibers/future');                           // 2
                                                                     // 3
MailChimpAPI = function(key, options) {                              // 4
  this.asyncAPI = mailchimp.MailChimpAPI(key, options);              // 5
}                                                                    // 6
                                                                     // 7
MailChimpAPI.prototype.listSubscribe = function(options) {           // 8
  var future = new Future();                                         // 9
  this.asyncAPI.listSubscribe(options, function(err, res) {          // 10
    if (err) {                                                       // 11
      future.throw(err);                                             // 12
    } else {                                                         // 13
      future.return(res);                                            // 14
    }                                                                // 15
  });                                                                // 16
                                                                     // 17
  return future.wait();                                              // 18
}                                                                    // 19
///////////////////////////////////////////////////////////////////////

}).call(this);
