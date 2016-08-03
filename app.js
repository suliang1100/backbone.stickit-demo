$(document).ready(function() {
    $("#load").click(function() {

        // 加载模板
        app.viewUtils.loadTemplates(function() {

            // 1.获取视图所需数据
            var list = new app.ProductList();
            list.queryList().done(function(result) {

                // 1.创建大视图
                var listView = new app.ProductListView({model: new Backbone.Model({title: result.title})});

                $("#body").html(listView.render().el);

                // 2.渲染后处理
                //渲染内嵌视图

                listView.afterRender(list);
            });
        });
    });
});