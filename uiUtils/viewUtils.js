/**
 * Created by zzl on 2015/10/8.
 */
app.viewUtils = {

    // 载入模板文件、拓展视图的事件处理逻辑
    loadTemplates : function(callback) {
        var views = [
            "ProductListView", "ProductView"
        ];

        var deferreds = _.map(views, function(view) {
            var deferred = $.ajax({
                type : "GET",
                url : "views/" + view +".html"
            }, "text");

            (function(view) {
                deferred.done(function(result) {
                    app[view].prototype.template = result;
                });
            })(view);

            return deferred;

        });

        $.when.apply($, deferreds).done(function() {
            callback();
        });
    }
};