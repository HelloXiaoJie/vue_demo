// 头部
Vue.component('head-div', {
    template: '#head_style',
    props: {
        navigation_datas: {
            type: Object
        }
    },
});

// 底部
Vue.component('bottom-div', {
    template: '#bottom_style',
    props: ['navigation_datas']
});

Vue.directive('navigationselect', function (el, binding) {
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
        navigation_datas: {
            'data_1': ['关于我们', 'index_copy.html'],
            'data_2': ['问题', 'index_copy.html'],
            'data_3': ['事件', 'index_copy.html'],
            'data_4': ['画廊', 'index_copy.html'],
            'data_5': ['多媒体', 'index_copy.html'],
            'data_6': ['微信', 'index_copy.html'],
            'data_7': ['联系', 'index_copy.html'],
        }
    }
});