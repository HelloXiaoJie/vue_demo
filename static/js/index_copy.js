// 头部
Vue.component('head-div', {
    template: '#head_style',
    props: {
        navigation_datas: {
            type: Array
        }
    },
});
// 身体
Vue.component('body-div', {
    template: '#body_style',
    methods: {
        // 点击链接跳转到图片页面
        Jump_pictures_page: function (event) {
            event.stopPropagation();
            location.href = $($(event.target).parent().siblings()[0]).attr('src')
        }
    },
    data: function () {
        return {
            // 内容2 左图
            content_2_left_judge: false,
            // 内容2 右图
            content_2_right_judge: false,
            // 内容3 右图
            content_3_right_judge: false,
            // 内容4 左图
            content_4_left_judge: false
        }
    }
});
// 底部
Vue.component('bottom-div', {
    template: '#bottom_style',
    props: {
        navigation_datas: {
            type: Array
        }
    }
});
Vue.directive('navigationselect', function (el, binding) {
    console.log($(el).children());
    $(el).children().bind('mouseover', function () {
        $(this).css({'border-bottom': '5px solid #076799'}).siblings().css({'border-bottom': ''})
    });
    $(el).children().bind('mouseout', function () {
        $(this).css({'border-bottom': ''})
    })
});
new Vue({
    el: '#base',
    data: {
        navigation_datas: ['关于我们', '问题', '事件', '画廊', '多媒体', '微信', '联系']
    }
});