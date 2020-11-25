// 头部
Vue.component('head-div', {
    template: '#head_style',
    props: {
        navigation_datas: {
            type: Object
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
    props: ['navigation_datas']
});

Vue.directive('navigationselect', function (el, binding) {
    // console.log($(el).children());
    $(el).children().bind('mouseover', function () {
        $(this).css({'border-bottom': '5px solid #076799'}).siblings().css({'border-bottom': ''})
    });
    $(el).children().bind('mouseout', function () {
        $(this).css({'border-bottom': ''})
    })
});
const routes = [
    // 重定向
    {
        path: '/',
        redirect: '/index'
    },
    // 关于我们 页面
    {
        path: '/index',
        component: {
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
        },
    },
    // 问题 页面
    {
        path: '/issue',
        component: {
            template: '#index_1_page',
        }
    },
    // 事件 页面
    {
        path: '/incident',
        component: {
            template: '#index_2page',
        }
    },
    // 画廊 页面
    {
        path: '/gallery',
        component: {
            template: '#index_3page'
        }
    },
    // 多媒体 页面
    {
        path: '/multimedia',
        component: {
            template: '#index_4page'
        }
    },
    // 微信 页面
    {
        path: '/WeChat',
        component: {
            template: "#index_5page"
        }
    },
    // 联系 页面
    {
        path: '/relation',
        component: {
            template: '#index_6page',
            methods: {
                // 提交数据
                relation_submit: function () {
                    // console.log($('textarea[name="content"]').val());
                    this.content = $('textarea[name="content"]').val();
                    alert('name:' + this.name + '\n' + 'phonenumber:' + this.phonenumber + '\n' + 'email:' + this.email + '\n' + 'content:' + this.content)
                }
            },
            data: () => {
                return {
                    name: '',
                    phonenumber: '',
                    email: '',
                    content: ''
                }
            }
        }
    }
];
const router = new VueRouter({
    routes
});
new Vue({
    el: '#base',
    data: {
        //['关于我们', '问题', '事件', '画廊', '多媒体', '微信', '联系']
        // navigation_datas: ['关于我们', '问题', '事件', '画廊', '多媒体', '微信', '联系'],
        navigation_datas: {
            'data_1': ['关于我们', '/'],
            'data_2': ['问题', '/issue'],
            'data_3': ['事件', 'index_copy.html'],
            'data_4': ['画廊', 'index_copy.html'],
            'data_5': ['多媒体', 'index_copy.html'],
            'data_6': ['微信', 'index_copy.html'],
            'data_7': ['联系', 'index_copy.html'],
        }
    },
    router: router
});

$(function () {
    // 点击所有
    $('#click_data').children().click(function () {
        var self = this;
        // 设置active
        $(self).addClass('active').siblings().removeClass('active');
        if ($(self).attr('id') === 'click_1') {
            $('#images_data').children().each(function () {
                // 高度
                var height;
                if ($(this).attr('number') > 3) {
                    height = 1;
                } else {
                    height = 0;
                }
                $(this).attr({
                    'class': 'col-md-4 col-sm-6 gallery-grid gal_a gal_b isotope-item',
                    'style': "position: absolute; left: 0px; top: 0px; transform: translate3d(" + (Number($(this).attr('number') - 1) % 3) * 390 + "px, " + height * 375 + "px, 0px) scale3d(1, 1, 1); opacity: 1;"
                });
            })
        } else if ($(self).attr('id') === 'click_2') {
            $('#images_data_1').attr({
                'class': 'col-md-4 col-sm-6 gallery-grid gal_a gal_b isotope-item',
                'style': 'position: absolute; left: 0px; top: 0px; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1); opacity: 1;',
            });
            $('#images_data_2').attr({
                'class': 'col-md-4 col-sm-6 gallery-grid gal_c gal_b isotope-item isotope-hidden',
                'style': 'position: absolute; left: 0px; top: 0px; transform: translate3d(390px, 0px, 0px) scale3d(0.001, 0.001, 1); opacity: 0;'
            });
            $('#images_data_3').attr({
                'class': 'col-md-4 col-sm-6 gallery-grid gal_c gal_b isotope-item isotope-hidden',
                'style': 'position: absolute; left: 0px; top: 0px; transform: translate3d(390px, 0px, 0px) scale3d(0.001, 0.001, 1); opacity: 0;'
            });
            $('#images_data_4').attr({
                'class': 'col-md-4 col-sm-6 gallery-grid gal_c gal_b isotope-item',
                'style': 'position: absolute; left: 0px; top: 0px; transform: translate3d(390px, 0px, 0px) scale3d(1, 1, 1); opacity: 1;'
            });
            $('#images_data_5').attr({
                'class': 'col-md-4 col-sm-6 gallery-grid gal_c gal_b isotope-item isotope-hidden',
                'style': 'position: absolute; left: 0px; top: 0px; transform: translate3d(390px, 0px, 0px) scale3d(0.001, 0.001, 1); opacity: 0;'
            });
            $('#images_data_6').attr({
                'class': 'col-md-4 col-sm-6 gallery-grid gal_c gal_b isotope-item isotope-hidden',
                'style': 'position: absolute; left: 0px; top: 0px; transform: translate3d(390px, 0px, 0px) scale3d(0.001, 0.001, 1); opacity: 0;'
            });
        } else if ($(self).attr('id') === 'click_3') {
            $('#images_data_1').attr({
                'class': 'col-md-4 col-sm-6 gallery-grid gal_a gal_b isotope-item',
                'style': 'position: absolute; left: 0px; top: 0px; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1); opacity: 1;',
            });
            $('#images_data_2').attr({
                'class': 'col-md-4 col-sm-6 gallery-grid gal_c gal_b isotope-item',
                'style': 'position: absolute; left: 0px; top: 0px; transform: translate3d(390px, 0px, 0px) scale3d(0.001, 0.001, 1); opacity: 0;'
            });
            $('#images_data_3').attr({
                'class': 'col-md-4 col-sm-6 gallery-grid gal_c gal_b isotope-item isotope-hidden',
                'style': 'position: absolute; left: 0px; top: 0px; transform: translate3d(390px, 0px, 0px) scale3d(0.001, 0.001, 1); opacity: 0;'
            });
            $('#images_data_4').attr({
                'class': 'col-md-4 col-sm-6 gallery-grid gal_c gal_b isotope-item isotope-hidden',
                'style': 'position: absolute; left: 0px; top: 0px; transform: translate3d(390px, 0px, 0px) scale3d(1, 1, 1); opacity: 1;'
            });
            $('#images_data_5').attr({
                'class': 'col-md-4 col-sm-6 gallery-grid gal_c gal_b isotope-item',
                'style': 'position: absolute; left: 0px; top: 0px; transform: translate3d(390px, 0px, 0px) scale3d(0.001, 0.001, 1); opacity: 0;'
            });
            $('#images_data_6').attr({
                'class': 'col-md-4 col-sm-6 gallery-grid gal_c gal_b isotope-item isotope-hidden',
                'style': 'position: absolute; left: 0px; top: 0px; transform: translate3d(780px, 0px, 0px) scale3d(1, 1, 1); opacity: 1;'
            });
        } else if ($(self).attr('id') === 'click_4') {
            $('#images_data_1').attr({
                'class': 'col-md-4 col-sm-6 gallery-grid gal_a gal_b isotope-item isotope-hidden',
                'style': 'position: absolute; left: 0px; top: 0px; transform: translate3d(0px, 0px, 0px) scale3d(0.001, 0.001, 1); opacity: 0;',
            });
            $('#images_data_2').attr({
                'class': 'col-md-4 col-sm-6 gallery-grid gal_c gal_b isotope-item isotope-hidden',
                'style': 'position: absolute; left: 0px; top: 0px; transform: translate3d(390px, 0px, 0px) scale3d(0.001, 0.001, 1); opacity: 0;'
            });
            $('#images_data_3').attr({
                'class': 'col-md-4 col-sm-6 gallery-grid gal_c gal_b isotope-item',
                'style': 'position: absolute; left: 0px; top: 0px; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1); opacity: 1;'
            });
            $('#images_data_4').attr({
                'class': 'col-md-4 col-sm-6 gallery-grid gal_c gal_b isotope-item isotope-hidden',
                'style': 'position: absolute; left: 0px; top: 0px; transform: translate3d(390px, 0px, 0px) scale3d(0.001, 0.001, 1); opacity: 0;'
            });
            $('#images_data_5').attr({
                'class': 'col-md-4 col-sm-6 gallery-grid gal_c gal_b isotope-item isotope-hidden',
                'style': 'position: absolute; left: 0px; top: 0px; transform: translate3d(390px, 0px, 0px) scale3d(0.001, 0.001, 1); opacity: 0;'
            });
            $('#images_data_6').attr({
                'class': 'col-md-4 col-sm-6 gallery-grid gal_c gal_b isotope-item isotope-hidden',
                'style': 'position: absolute; left: 0px; top: 0px; transform: translate3d(780px, 0px, 0px) scale3d(0.001, 0.001, 1); opacity: 0;'
            });
        } else if ($(self).attr('id') === 'click_5') {
            $('#images_data_1').attr({
                'class': 'col-md-4 col-sm-6 gallery-grid gal_a gal_b isotope-item isotope-hidden',
                'style': 'position: absolute; left: 0px; top: 0px; transform: translate3d(0px, 0px, 0px) scale3d(0.001, 0.001, 1); opacity: 0;',
            });
            $('#images_data_2').attr({
                'class': 'col-md-4 col-sm-6 gallery-grid gal_c gal_b isotope-item isotope-hidden',
                'style': 'position: absolute; left: 0px; top: 0px; transform: translate3d(390px, 0px, 0px) scale3d(0.001, 0.001, 1); opacity: 0;'
            });
            $('#images_data_3').attr({
                'class': 'col-md-4 col-sm-6 gallery-grid gal_c gal_b isotope-item',
                'style': 'position: absolute; left: 0px; top: 0px; transform: translate3d(0px, 0px, 0px);'
            });
            $('#images_data_4').attr({
                'class': 'col-md-4 col-sm-6 gallery-grid gal_c gal_b isotope-item isotope-hidden',
                'style': 'position: absolute; left: 0px; top: 0px; transform: translate3d(390px, 0px, 0px) scale3d(0.001, 0.001, 1); opacity: 0;'
            });
            $('#images_data_5').attr({
                'class': 'col-md-4 col-sm-6 gallery-grid gal_c gal_b isotope-item isotope-hidden',
                'style': 'position: absolute; left: 0px; top: 0px; transform: translate3d(390px, 0px, 0px) scale3d(0.001, 0.001, 1); opacity: 0;'
            });
            $('#images_data_6').attr({
                'class': 'col-md-4 col-sm-6 gallery-grid gal_c gal_b isotope-item',
                'style': 'position: absolute; left: 0px; top: 0px; transform: translate3d(390px, 0px, 0px);'
            });
        }
    });
})