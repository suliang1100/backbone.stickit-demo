app.ProductList = Backbone.Collection.extend({
    model: app.Product,

    parse: function(response, options) {
        return response.list;
    },

    // 查询列表
    queryList: function(params) {
        var options = {
            url: "data/productList.json"
        };
        return this.fetch(options);
    }
});