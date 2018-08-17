module.exports = function (client) {
    return {
      // http://api.myemma.com/api/external/signup_forms.html#get--#account_id-signup_forms
      list: function (callback) {
        client.request({verb: 'GET', url: id + '/signup_forms'}, {}, callback);
      }
    };
  };
  