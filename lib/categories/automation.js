module.exports = function (client) {
    return {
      // http://api.myemma.com/api/external/automation.html#get--#account_id-fields
      list: function (callback) {
        client.request({verb: 'GET', url: 'automation/workflows'}, {}, callback);
      },

      withID: function (id) {
        return {
          // http://api.myemma.com/api/external/automation.html#get--#account_id-fields
          details: function (callback) {
            client.request({verb: 'GET', url: 'automation/workflows/' + id}, {}, callback);
          }
        };
      },
      
      // http://api.myemma.com/api/external/automation.html#get--#account_id-fields
      getCounts: function (callback) {
        client.request({verb: 'GET', url: 'automation/counts'}, {}, callback);
      },
    };
  };
  