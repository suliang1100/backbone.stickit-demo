/**
 * Created by zhaozl on 2015/10/23.
 */
app.ProductView = Backbone.View.extend({
    
    tagName: "tr",

    bindings: {
        "span.idx": "idx",
        "input.idx": "idx",
        "span.nameClass" : "name",
        "input.nameClass" : "name",
        "span.typeClass" : "type",
        "input.typeClass" : "type",
        "span.description" : "description",
        "input.description" : "description"
    },

    events:{
        "blur .info-text":'blurInput',
        "click td":"clickTd",
        "click span":"clickTd"
    },

    render: function() {
        this.$el.html(this.template);
        return this;
    },

    // 渲染后处理
    afterRender: function() {

        //保持数据同步到model
        this.stickit(this.model, this.bindings);
    },

    blurInput:function(e){
        var $td = $(e.target).closest("td");
        $td.find("input").hide();
        $td.find("span").show();

    },

    clickTd:function(e){
        var $td;
        if($(e.target).is('span')){
            $td = $(e.target).closest("td");
        }else{
            $td = $(e.target);
        }
        $td.find("input").show().focus();
        $td.find("span").hide();
    }

});