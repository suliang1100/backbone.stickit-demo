app.ProductListView = Backbone.View.extend({

    bindings: {
        "input.title": "title"
    },

    render: function() {
        this.$el.html(this.template);
        return this;
    },

    // 渲染小视图
    renderNestedViews: function(list) {
        var self = this;
        this.nestedViews = _.map(list.models, function(model) {
            var tmpView = new app.ProductView({model: model}); //新建视图实例
            self.$("#listTable").append(tmpView.render().el); //渲染视图
            return tmpView;
        });
    },

    // 渲染后处理
    afterRender: function(list) {

        // 处理大视图的数据绑定
        this.stickit(this.model, this.bindings);

        // 1.渲染小视图
        this.renderNestedViews(list);

        // 2.处理小视图
        _.map(this.nestedViews, function(view) {
            view.afterRender();
        });
    }
});