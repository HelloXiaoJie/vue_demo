var banners = 1;
var speed = 5;
var banner_max; //图片数量
var timer;

function loads() {
    var img_num = $(".banner_img").children("img").length;  // 获取图片数量
    banner_max = img_num;
    for (var i = 1; i <= banner_max; ++i) {
        $(".banner_img" + i).fadeTo(100, 0);
    }
    $(".banner_img" + banners).fadeTo(100, 1);
    var banners_height = $(".banners").height();  // 获取宽度
    $(".banners").css("line-height", banners_height + "px"); // 设置宽度
}

$(window).resize(function () {
    var banners_height = $(".banners").height();  // 获取高度
    $(".banners").css("line-height", banners_height + "px");  // 设置高度
});
$(document).ready(function () {
    banner_number();  // 设置小圈圈的状态
    timer = setInterval(auto_replace_banner, speed * 1000);
});

function banner_left_right(sj) {
    var sjs;
    if (sj == "left") {
        if (banners == 1) {
            sjs = banner_max;
        } else {
            sjs = banners - 1;
        }
    } else {
        if (banners == banner_max) {
            sjs = 1;
        } else {
            sjs = banners + 1;
        }
    }
    manual_replace_banner(sjs); // sjs 为要转到的页数
}

function manual_replace_banner(sj) {
    var bannerz = banners;  // bannerz当前页数
    banners = sj;  // banners 为要转到的页数
    if (banners == bannerz) {
        return;
    }
    clearInterval(timer);
    fade_in_out(bannerz, banners);
    timer = setInterval(auto_replace_banner, speed * 1000);
}

function auto_replace_banner() {
    var bannerz = banners;
    if (banners == banner_max) {
        banners = 1;
    } else {
        banners += 1;
    }
    fade_in_out(bannerz, banners);
}

function fade_in_out(bannerz, banners) {
    var out_id = ".banner_img" + bannerz;
    var banner_out = $(out_id);
    var in_id = ".banner_img" + banners;
    var bannet_in = $(in_id);
    banner_out.fadeTo(600, 0);
    bannet_in.fadeTo(500, 1);
    banner_number();
}

function banner_number() {
    for (var i = 1; i <= banner_max; i++) {
        var num_id = ".num" + i;
        var num_object = $(num_id);
        if (banners == i) {
            num_object.css("color", "black");
            num_object.css("backgroundColor", "white");
        } else {
            num_object.css("color", "white");
            num_object.css("backgroundColor", "rgba(0,0,0,0)");
        }
    }
}