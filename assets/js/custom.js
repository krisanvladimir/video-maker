var loaded = !1
  , current_section = 1
  , next_section = 1
  , fp = !0
  , current_video = !1
  , email_line = !1
  , strong_line_1 = !1
  , strong_line_2 = !1
  , strong_line_3 = !1
  , strong_line_4 = !1
  , team_animation = !1
  , b_items = $(".section_2_psb_item_b_items>*").length
  , first_4 = !0
  , content_scroll = 0
  , player = ""
  , back = "Назад"
  , context = "web";
-1 < window.location.href.indexOf("en") ? (context = "en",
back = "Back") : (back = "Назад",
context = "web"),
progressJs().start().autoIncrease(1, 125);
var animation_move = !1;
$(window).load(function() {
    loaded = !0
}),
$(window).on("resize", function() {
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4)) ? $("body").addClass("mobile") : $("body").removeClass("mobile"),
    $.fn.fullpage.reBuild(),
    setTimeout(function() {
        $.fn.fullpage.reBuild()
    }, 300),
    setTimeout(function() {
        $.fn.fullpage.reBuild(),
        $(window).scrollTop(-1)
    }, 800),
    setTimeout(function() {
        $.fn.fullpage.reBuild(),
        $(window).scrollTop(-1)
    }, 1300)
});
var animationEnd = function(e) {
    var t = {
        animation: "animationend",
        OAnimation: "oAnimationEnd",
        MozAnimation: "mozAnimationEnd",
        WebkitAnimation: "webkitAnimationEnd"
    };
    for (var i in t)
        if (void 0 !== e.style[i])
            return t[i]
}(document.createElement("div"))
  , project_index = 0
  , project_index_next = 1
  , project_qty = $(".projects_wrapper>div").length
  , team_index = 0
  , team_index_next = 1
  , team_qty = $(".section_2_team_items>div").length
  , owl_psb = $(".section_2_studio_slider")
  , owl_cec = $(".section_3_projects_slider")
  , owl_cec_main = $(".section_3_main_slider")
  , owl_team = $(".team_slider")
  , psb_qty = 3
  , height = window.innerHeight
  , a = setInterval(function() {
    $(".inner_height").html(window.innerHeight),
    $(".outer_height").html(window.outerHeight),
    $(".height").html(window.height)
}, 500);
$(window).on("resize", function() {});
var resize = function() {
    window.innerHeight != height && (height = window.innerHeight,
    $(".section").css("height", height + "px"))
};
function splitText(e) {
    for (var t, i = e, a = i.text().trim().split(/\s+/), n = {
        curr: 0,
        prev: 0
    }, s = [], o = []; a.length; ) {
        if (t = a.shift(),
        o.push(t),
        i.html(o.join(" ")),
        n.curr = i.height(),
        n.curr !== n.prev && (s.push([]),
        n.prev = n.curr),
        !s || !s.length)
            return !1;
        s[s.length - 1].push(t)
    }
    s = s.map(function(e, t) {
        return '<div class="animation_item_wrapper"><div class="animation_item to-be-animated row' + t + '">' + e.join(" ") + "</div></div>"
    }),
    i.html(s.join("\n"))
}
function splitTextNext(e) {
    for (var t, i = e, a = i.text().trim().split(/\s+/), n = {
        curr: 0,
        prev: 0
    }, s = [], o = []; a.length; ) {
        if (t = a.shift(),
        o.push(t),
        i.html(o.join(" ") + "XX"),
        n.curr = i.height(),
        n.curr !== n.prev && (s.push([]),
        n.prev = n.curr),
        !s || !s.length)
            return !1;
        s[s.length - 1].push(t)
    }
    s = s.map(function(e, t) {
        return '<div class="animation_item_wrapper"><div class="animation_item to-be-animated row' + t + '">' + e.join(" ") + "</div></div>"
    }),
    i.html(s.join("\n"))
}
function splitText_n_a(e) {
    for (var t, i = e, a = i.text().trim().split(/\s+/), n = {
        curr: 0,
        prev: 0
    }, s = [], o = []; a.length; ) {
        if (t = a.shift(),
        o.push(t),
        i.html(o.join(" ")),
        n.curr = i.height(),
        n.curr !== n.prev && (s.push([]),
        n.prev = n.curr),
        !s || !s.length)
            return !1;
        s[s.length - 1].push(t)
    }
    s = s.map(function(e, t) {
        return '<div><div class="animation_itemrow' + t + '">' + e.join(" ") + "</div></div>"
    }),
    i.html(s.join("\n"))
}
function hide4() {
    splitText($(".current_project_title")),
    $(".projects_control").removeClass("fadeOut animated fadeIn fadeOut").addClass("animated fadeOut"),
    $(".right_menu").removeClass("animated fadeIn fadeOut").addClass("animated fadeOut").css("z-index", "-1"),
    $(".scroll_control_down").removeClass("animated fadeIn fadeOut").addClass("animated fadeOut"),
    $(".current_project_title .animation_item").addClass("slideOutUp animated"),
    $(".first_current_project .subheader>*").removeClass("fadeIn animated fadeOut ").addClass("fadeOut animated"),
    $(".current_project_short_description,.first_current_project_buttonsl").removeClass("fadeInUp animated slideOutUp fadeOutUp ").addClass("fadeOutUp animated"),
    780 < $(window).width() ? ($(".current_project_image_img").removeClass("animated slideOutUp slideInUp").addClass("slideOutUp animated"),
    setTimeout(function() {
        5 != next_section && $(".current_project_image_img").removeClass("slideOutUp slideInUp")
    }, 800)) : ($(".first_current_project .current_project_image").animate({
        width: "0"
    }, 500).promise().done(function() {}),
    $(".second_current_project .current_project_image").animate({
        width: "0"
    }, 500).promise().done(function() {}))
}
function show4() {
    $(".open_filters").removeClass("fadeOut animated fadeIn fadeOut").addClass("animated fadeIn"),
    $(".projects_control").removeClass("fadeOut animated fadeIn fadeOut").addClass("animated fadeIn"),
    $(".right_menu").removeClass("animated fadeIn fadeOut").addClass("animated fadeIn").css("z-index", "1"),
    $(".scroll_control_down").removeClass("animated fadeIn fadeOut").addClass("animated fadeIn"),
    780 < $(window).width() ? ($(".current_project_short_description").hasClass("animated") || $(".current_project_image_img").removeClass("animated slideOutUp slideInUp").addClass("slideInUp animated"),
    setTimeout(function() {
        5 != next_section && $(".current_project_image_img").removeClass("slideOutUp slideInUp")
    }, 800)) : ($(".first_current_project .current_project_image").animate({
        width: !(780 < $(window).width()) || 960 < $(window).height() ? "100%" : "44.444vw"
    }, 500),
    $(".second_current_project .current_project_image").animate({
        width: "16.66vw"
    }, 500)),
    0 == $(".current_project_title .animation_item_wrapper").length && splitText($(".current_project_title")),
    $(".current_project_title").removeClass("to-be-animated"),
    $(".first_current_project .subheader>*").removeClass("fadeIn animated fadeOut ").addClass("fadeIn animated"),
    $(".first_current_project .current_project_title .animation_item ,.first_current_project .current_project_short_description,.first_current_project_button").removeClass("fadeInUp animated slideOutUp fadeOutUp "),
    $(".first_current_project .current_project_title .animation_item ,.first_current_project .current_project_short_description,.first_current_project_button").addClass("fadeInUp animated"),
    $(".current_projects_wrapper").css("z-index", "1")
}
function fakeClick(t) {
    var e = $('<a href="#" id="fakeClick"></a>');
    e.bind("click", function(e) {
        e.preventDefault(),
        t()
    }),
    $("body").append(e);
    var i, a = $("#fakeClick").get(0);
    document.createEvent && (i = document.createEvent("MouseEvents")).initMouseEvent && (i.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null),
    a.dispatchEvent(i)),
    $(a).remove()
}
function exitfull() {
    document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()
}
$(document).ready(function() {
    function t() {
        $(".section_3_item").off("mouseenter"),
        $(".section_3_item").mouseenter(function() {
            var e = $(this);
            $(".section_3_item").not(e).removeClass("active"),
            e.addClass("active"),
            $("body").hasClass("web") ? (0 == e.index() ? (e.find(".section_3_item_wrapper").eq(0).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/cg/white/г.png"),
            e.find(".section_3_item_wrapper").eq(1).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/cg/white/р.png"),
            e.find(".section_3_item_wrapper").eq(2).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/cg/white/а.png"),
            e.find(".section_3_item_wrapper").eq(3).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/cg/white/ф.png"),
            e.find(".section_3_item_wrapper").eq(4).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/cg/white/и.png"),
            e.find(".section_3_item_wrapper").eq(5).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/cg/white/к.png"),
            e.find(".section_3_item_wrapper").eq(6).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/cg/white/а.png")) : ($(".section_3_item").eq(0).find(".section_3_item_wrapper").eq(0).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/cg/border/г.png"),
            $(".section_3_item").eq(0).find(".section_3_item_wrapper").eq(1).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/cg/border/р.png"),
            $(".section_3_item").eq(0).find(".section_3_item_wrapper").eq(2).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/cg/border/а.png"),
            $(".section_3_item").eq(0).find(".section_3_item_wrapper").eq(3).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/cg/border/ф.png"),
            $(".section_3_item").eq(0).find(".section_3_item_wrapper").eq(4).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/cg/border/и.png"),
            $(".section_3_item").eq(0).find(".section_3_item_wrapper").eq(5).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/cg/border/к.png"),
            $(".section_3_item").eq(0).find(".section_3_item_wrapper").eq(6).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/cg/border/а.png")),
            1 == e.index() ? (e.find(".section_3_item_wrapper").eq(0).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/event/white/И.png"),
            e.find(".section_3_item_wrapper").eq(1).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/event/white/В.png"),
            e.find(".section_3_item_wrapper").eq(2).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/event/white/Е.png"),
            e.find(".section_3_item_wrapper").eq(3).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/event/white/Н.png"),
            e.find(".section_3_item_wrapper").eq(4).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/event/white/Т.png"),
            e.find(".section_3_item_wrapper").eq(5).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/event/white/Ы.png")) : ($(".section_3_item").eq(1).find(".section_3_item_wrapper").eq(0).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/event/border/И.png"),
            $(".section_3_item").eq(1).find(".section_3_item_wrapper").eq(1).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/event/border/В.png"),
            $(".section_3_item").eq(1).find(".section_3_item_wrapper").eq(2).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/event/border/Е.png"),
            $(".section_3_item").eq(1).find(".section_3_item_wrapper").eq(3).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/event/border/Н.png"),
            $(".section_3_item").eq(1).find(".section_3_item_wrapper").eq(4).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/event/border/Т.png"),
            $(".section_3_item").eq(1).find(".section_3_item_wrapper").eq(5).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/event/border/Ы.png")),
            2 == e.index() ? (e.find(".section_3_item_wrapper").eq(0).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/commercial/white/р.png"),
            e.find(".section_3_item_wrapper").eq(1).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/commercial/white/е.png"),
            e.find(".section_3_item_wrapper").eq(2).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/commercial/white/к.png"),
            e.find(".section_3_item_wrapper").eq(3).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/commercial/white/л.png"),
            e.find(".section_3_item_wrapper").eq(4).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/commercial/white/а.png"),
            e.find(".section_3_item_wrapper").eq(5).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/commercial/white/м.png"),
            e.find(".section_3_item_wrapper").eq(6).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/commercial/white/а.png")) : ($(".section_3_item").eq(2).find(".section_3_item_wrapper").eq(0).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/commercial/border/р.png"),
            $(".section_3_item").eq(2).find(".section_3_item_wrapper").eq(1).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/commercial/border/е.png"),
            $(".section_3_item").eq(2).find(".section_3_item_wrapper").eq(2).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/commercial/border/к.png"),
            $(".section_3_item").eq(2).find(".section_3_item_wrapper").eq(3).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/commercial/border/л.png"),
            $(".section_3_item").eq(2).find(".section_3_item_wrapper").eq(4).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/commercial/border/а.png"),
            $(".section_3_item").eq(2).find(".section_3_item_wrapper").eq(5).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/commercial/border/м.png"),
            $(".section_3_item").eq(2).find(".section_3_item_wrapper").eq(6).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/commercial/border/а.png"))) : (0 == e.index() ? (e.find("text").css("fill-opacity", "1"),
            e.find(".section_3_item_wrapper").eq(0).find(".section_3_item_symbol").attr("src", "/assets/images/cg/g-2.png"),
            e.find(".section_3_item_wrapper").eq(1).find(".section_3_item_symbol").attr("src", "/assets/images/cg/c-2.png")) : ($(".section_3_item").eq(0).find("text").css("fill-opacity", "0"),
            $(".section_3_item").eq(0).find(".section_3_item_wrapper").eq(0).find(".section_3_item_symbol").attr("src", "/assets/images/cg/g.png"),
            $(".section_3_item").eq(0).find(".section_3_item_wrapper").eq(1).find(".section_3_item_symbol").attr("src", "/assets/images/cg/c.png")),
            1 == e.index() ? (e.find(".section_3_item_wrapper").eq(0).find(".section_3_item_symbol").attr("src", "/assets/images/event/e-2.png"),
            e.find(".section_3_item_wrapper").eq(1).find(".section_3_item_symbol").attr("src", "/assets/images/event/v-2.png"),
            e.find(".section_3_item_wrapper").eq(2).find(".section_3_item_symbol").attr("src", "/assets/images/event/e-2.png"),
            e.find(".section_3_item_wrapper").eq(3).find(".section_3_item_symbol").attr("src", "/assets/images/event/n-2.png"),
            e.find(".section_3_item_wrapper").eq(4).find(".section_3_item_symbol").attr("src", "/assets/images/event/t_1-2.png")) : ($(".section_3_item").eq(1).find(".section_3_item_wrapper").eq(0).find(".section_3_item_symbol").attr("src", "/assets/images/event/e_1.png"),
            $(".section_3_item").eq(1).find(".section_3_item_wrapper").eq(1).find(".section_3_item_symbol").attr("src", "/assets/images/event/v.png"),
            $(".section_3_item").eq(1).find(".section_3_item_wrapper").eq(2).find(".section_3_item_symbol").attr("src", "/assets/images/event/e_1.png"),
            $(".section_3_item").eq(1).find(".section_3_item_wrapper").eq(3).find(".section_3_item_symbol").attr("src", "/assets/images/event/n.png"),
            $(".section_3_item").eq(1).find(".section_3_item_wrapper").eq(4).find(".section_3_item_symbol").attr("src", "/assets/images/event/t_1.png")),
            2 == e.index() ? (e.find(".section_3_item_wrapper").eq(0).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/c2-2.png"),
            e.find(".section_3_item_wrapper").eq(1).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/o-2.png"),
            e.find(".section_3_item_wrapper").eq(2).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/m1-2.png"),
            e.find(".section_3_item_wrapper").eq(3).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/m1-2.png"),
            e.find(".section_3_item_wrapper").eq(4).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/e-2.png"),
            e.find(".section_3_item_wrapper").eq(5).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/r-2.png"),
            e.find(".section_3_item_wrapper").eq(6).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/c2-2.png"),
            e.find(".section_3_item_wrapper").eq(7).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/i-2.png"),
            e.find(".section_3_item_wrapper").eq(8).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/a-2.png"),
            e.find(".section_3_item_wrapper").eq(9).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/l-2.png")) : ($(".section_3_item").eq(2).find(".section_3_item_wrapper").eq(0).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/c2.png"),
            $(".section_3_item").eq(2).find(".section_3_item_wrapper").eq(1).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/o.png"),
            $(".section_3_item").eq(2).find(".section_3_item_wrapper").eq(2).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/m1.png"),
            $(".section_3_item").eq(2).find(".section_3_item_wrapper").eq(3).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/m1.png"),
            $(".section_3_item").eq(2).find(".section_3_item_wrapper").eq(4).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/e.png"),
            $(".section_3_item").eq(2).find(".section_3_item_wrapper").eq(5).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/r.png"),
            $(".section_3_item").eq(2).find(".section_3_item_wrapper").eq(6).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/c2.png"),
            $(".section_3_item").eq(2).find(".section_3_item_wrapper").eq(7).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/i.png"),
            $(".section_3_item").eq(2).find(".section_3_item_wrapper").eq(8).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/a.png"),
            $(".section_3_item").eq(2).find(".section_3_item_wrapper").eq(9).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/l.png"))),
            $(".section_3 video").not(".section_3_projects_items_video_wrapper video").hide().trigger("pause"),
            $(".section_3_" + e.attr("data-video")).show().trigger("play")
        }).mouseleave(function() {
            var e = $(this);
            780 < $(window).width() && $(e).removeClass("red"),
            $(".section_3_item").removeClass("clicked_active")
        })
    }
    function a() {
        animation_move = !0,
        splitText($(".current_project_title")),
        $(".open_filters").removeClass("fadeOut animated fadeIn fadeOut").addClass("animated fadeOut"),
        $(".projects_control").removeClass("fadeOut animated fadeIn fadeOut").addClass("animated fadeOut"),
        $(".current_project_title .animation_item").addClass("slideOutUp animated"),
        $(".first_current_project .subheader>*").removeClass("fadeIn animated fadeOut ").addClass("fadeOut animated"),
        $(".current_project_short_description,.first_current_project_button").removeClass("fadeOutUp fadeInUp animated").addClass("fadeOutUp animated"),
        780 < $(window).width() ? $(".current_project_image_img").removeClass("animated slideOutUp slideInUp").addClass("slideOutUp animated") : ($(".first_current_project .current_project_image").css("left", "unset").css("right", "27.75vw").animate({
            width: "0"
        }, 500).promise().done(function() {
            fp ? $.fn.fullpage.silentMoveTo(5) : $.scrollify.instantMove("#5"),
            animation_move = !1,
            fp ? ($.fn.fullpage.setAllowScrolling(!0),
            $.fn.fullpage.setKeyboardScrolling(!0)) : $.scrollify.enable(),
            $(".first_current_project .current_project_image").css("left", "11.1111vw").css("right", "unset")
        }),
        $(".second_current_project").css("text-align", "right"),
        $(".second_current_project .current_project_image").css("left", "unset").css("right", "0").animate({
            width: "0"
        }, 500).promise().done(function() {
            $(".current_project_short_description ").removeClass("fadeOutUp animated"),
            $(".second_current_project .current_project_image").css("left", "11.1111vw").css("right", "unset"),
            $(".second_current_project").css("text-align", "left")
        })),
        setTimeout(function() {
            fp ? $.fn.fullpage.silentMoveTo(5) : $.scrollify.instantMove("#5"),
            animation_move = !1,
            fp ? ($.fn.fullpage.setAllowScrolling(!0),
            $.fn.fullpage.setKeyboardScrolling(!0)) : $.scrollify.enable()
        }, 700)
    }
    $(".preloader_second_word").fadeIn(500).promise().done(function() {
        $(".preloader_second_word_symbol").first().fadeOut(800).fadeIn(800);
        var e = setInterval(function() {
            $(".preloader_second_word_symbol").first().fadeOut(800).fadeIn(800)
        }, 1600)
          , t = 0
          , i = setInterval(function() {
            if (t += 1,
            loaded && 4 == $(".section_1>video")[0].readyState && $(".preloader_wrapper").hide(),
            20 < t) {
                clearInterval(i);
                setTimeout(function() {
                    clearInterval(e),
                    $(".preloader_second_word_symbol").first().stop().fadeIn(),
                    $(".preloader_first_word").show();
                    var t = 0;
                    progressJs().set(100);
                    var i = setInterval(function() {
                        var e = $(".preloader_first_word").width() / 4;
                        t += 1,
                        $(".preloader_second_word").css("margin-left", e * t),
                        4 == t && (clearInterval(i),
                        setTimeout(function() {
                            $(".preloader_first_word").animate({
                                left: "0",
                                bottom: "2.15em"
                            }, 400, function() {
                                $(".preloader_first_word").css("position", "static")
                            }),
                            $(".preloader_second_word").css("margin-left", "0"),
                            $(".preloader_first_word_symbol").eq(0).animate({
                                opacity: 0
                            }, 1200).promise().done(function() {
                                $(".sections>script,.sections>.center").length && $(".sections>script,.sections>.center").remove(),
                                $(".preloader_first_word_symbol").eq(0).html('<img src="/assets/images/s.png" />').animate({
                                    opacity: 1
                                }, 1200).promise().done(function() {
                                    $(".preloader_words").fadeOut(1e3).promise().done(function() {
                                        $(".progressjs-container").animate({
                                            opacity: 0
                                        }, 0),
                                        $(".section_1>video").get(0).play(),
                                        $(".preloader_wrapper").animate({
                                            height: 0
                                        }, 1e3).promise().done(function() {
                                            var e = $(".section_1>video").get(0);
                                            fakeClick(function() {
                                                e.play()
                                            }),
                                            $.get("/team-ajax", "", function(e) {
                                                $(".section_2_team_items").html(e),
                                                team_qty = $(".section_2_team_items>div").length,
                                                $(".team_control_drag").draggable({
                                                    containment: "parent",
                                                    axis: "x",
                                                    delay: 100,
                                                    stop: function() {
                                                        var e = $(this).position().left;
                                                        owl_team.find('.owl-item[data-position="' + Math.round(e / $(".team_control_lines").width() * team_qty) + '"]').not(".cloned").first().click()
                                                    }
                                                }),
                                                $(".team_control_lines").click(function(e) {
                                                    $(this);
                                                    var t = e.offsetX;
                                                    owl_team.find('.owl-item[data-position="' + Math.round(t / $(".team_control_lines").width() * team_qty) + '"]').not(".cloned").first().click()
                                                })
                                            }),
                                            $.get("/images-ajax", "", function(e) {
                                                $(".load_images").html(e)
                                            })
                                        })
                                    })
                                })
                            }),
                            setTimeout(function() {
                                $(".preloader_second_word_symbol").eq(2).addClass("rotated"),
                                $(".preloader_second_word_symbol").eq(4).addClass("rotated")
                            }, 500)
                        }, 400))
                    }, 500)
                }, 2100)
            }
        }, 500)
    }),
    $(".main_menu_item, .right_menu a").click(function(e) {
        if ($(e.target).hasClass("main_menu_submenu_item")) {
            var t = $(e.target).index() + 1;
            return $("body").hasClass("fp-viewing-section_2") ? $(".section_2_text").is(":visible") ? ($(".close").click(),
            $('.section_2_text strong[data-link="' + t + '"]').click()) : $(".section_2>div").fadeOut().promise().done(function() {
                setTimeout(function() {
                    $('.section_2_text strong[data-link="' + t + '"]').click()
                }, 0)
            }) : ($(".close").click(),
            $.fn.fullpage.moveTo(2),
            setTimeout(function() {
                $('.section_2_text strong[data-link="' + t + '"]').click()
            }, 500)),
            void $(".presentation_wrapper .presentationss").removeClass("animated fadeInUp fadeOutUp fadeOutDown fadeInDown").addClass("animated fadeOutUp ")
        }
        var i = $(this);
        $(".close").click(),
        fp ? ($.fn.fullpage.setAllowScrolling(!0),
        $.fn.fullpage.setKeyboardScrolling(!0)) : $.scrollify.enable(),
        4 == current_section && 5 == next_section ? fp ? $.fn.fullpage.silentMoveTo(i.attr("data-section")) : $.scrollify.instantMove("#" + i.attr("data-section")) : fp ? $.fn.fullpage.moveTo(i.attr("data-section")) : $.scrollify.instantMove("#" + i.attr("data-section"))
    }),
    fp ? $(".main_page .sections").fullpage({
        menu: ".right_menu",
        lockAnchors: !0,
        showActiveTooltip: !1,
        slidesNavigation: !1,
        slidesNavPosition: "bottom",
        css3: !0,
        scrollingSpeed: 1200,
        autoScrolling: !0,
        fitToSection: !0,
        fitToSectionDelay: 1e3,
        scrollBar: !1,
        easing: "easeInOutCubic",
        easingcss3: "ease",
        loopBottom: !1,
        loopTop: !1,
        loopHorizontal: !0,
        continuousVertical: !1,
        continuousHorizontal: !1,
        scrollHorizontally: !1,
        interlockedSlides: !1,
        dragAndMove: !1,
        offsetSections: !1,
        resetSliders: !1,
        fadingEffect: !1,
        normalScrollElements: ".filter_year",
        scrollOverflow: !1,
        scrollOverflowReset: !1,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 55,
        bigSectionsDestination: null,
        keyboardScrolling: !0,
        animateAnchor: !0,
        recordHistory: !0,
        controlArrows: !1,
        verticalCentered: !1,
        paddingTop: "0",
        paddingBottom: "0",
        fixedElements: ".psb_control, .right_menu_psb",
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: !1,
        parallax: !1,
        parallaxOptions: {
            type: "reveal",
            percentage: 62,
            property: "translate"
        },
        lazyLoading: !0,
        onLeave: function(e, t, i) {
            return current_section = e,
            next_section = t,
            $(".main_menu .main_menu_item").removeClass("current_menu_item"),
            $(".main_menu .main_menu_item[data-section=" + t + "]").addClass("current_menu_item"),
            $("body").removeClass("white_color"),
            $("body").removeClass("black_color"),
            $(".close").click(),
            $(".right_menu").fadeIn(),
            $.fn.fullpage.setAllowScrolling(!0),
            $.fn.fullpage.setKeyboardScrolling(!0),
            4 == e && 5 == t && !animation_move && 780 < $(window).width() ? ($.fn.fullpage.setAllowScrolling(!1),
            $.fn.fullpage.setKeyboardScrolling(!1),
            a(),
            !1) : 5 == e && !animation_move && 780 < $(window).width() ? (animation_move = !0,
            $.fn.fullpage.setAllowScrolling(!1),
            $.fn.fullpage.setKeyboardScrolling(!1),
            $(".section_5_phone_1, .section_5_phone_2").removeClass("fadeInDown animated fadeInUp fadeOutDown slideOutDown").addClass("slideOutDown animated"),
            $(".section_5_address,.section_5_mode,.section_5_email,.socials, .contacts_inner_left .h1").removeClass("fadeInDown animated fadeInUp fadeOutDown slideOutDown").addClass("fadeOutDown animated"),
            $(".cr,.contacts_wrapper .subheader").removeClass("fadeOut animated fadeIn").addClass("animated fadeOut"),
            setTimeout(function() {
                $(".section_5_phone_1, .section_5_phone_2").removeClass("slideInDown animated slideInUp fadeOutDown slideOutDown"),
                $(".section_5_address,.section_5_mode,.section_5_email,.socials, .contacts_inner_left .h1").removeClass("fadeInDown animated fadeInUp fadeOutDown slideOutDown"),
                4 == t && $(".first_current_project .current_project_title .animation_item ,.first_current_project .current_project_short_description ").removeClass("fadeInUp animated slideOutUp fadeOutUp "),
                4 == t ? ($.fn.fullpage.silentMoveTo(t),
                $.fn.fullpage.setAllowScrolling(!1),
                $.fn.fullpage.setKeyboardScrolling(!1),
                setTimeout(function() {
                    $.fn.fullpage.setAllowScrolling(!0),
                    $.fn.fullpage.setKeyboardScrolling(!0)
                }, 1e3)) : ($.fn.fullpage.moveTo(t),
                $.fn.fullpage.setAllowScrolling(!0),
                $.fn.fullpage.setKeyboardScrolling(!0)),
                animation_move = !1
            }, 500),
            !1) : (4 == t && first_4 && (setTimeout(function() {
                show4()
            }, 1e3),
            first_4 = !1),
            1 == e && ($(".section_1>video").get(0).pause(),
            $(".current_video").removeClass("fadeOut animated fadeIn fadeOut").addClass("animated fadeOut")),
            1 == t && ($(".section_1>video").get(0).play(),
            $(".current_video").removeClass("fadeOut animated fadeIn fadeOut").addClass("animated fadeIn")),
            3 == e && $(".section_3_video_wrapper>video").get(0).pause(),
            void (3 == t && ($(".section_3_video_wrapper>video").get(0).play(),
            $(".section_3_video_wrapper>video").get(1).play(),
            $(".section_3_video_wrapper>video").get(2).play())))
        },
        afterLoad: function(e, t) {
            "2" == t && ($(".section_2_image").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown fadeIn fadeOut").addClass("animated fadeIn"),
            $(".section_2_text").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown").addClass("animated fadeInUp"),
            $(".section_2_text_wrapper .subheader .to-be-animated").removeClass("animated fadeIn fadeOut").addClass("animated fadeIn"),
            $(".presentation_wrapper  .presentations").removeClass("animated fadeInUp fadeOutUp fadeOutDown fadeInDown").addClass("animated fadeInUp "),
            $(".brand_item_image").each(function(e) {
                var t = $(this);
                void 0 !== t.attr("data-back_src") && !1 !== t.attr("data-back_src") && (t.css("background-image", 'url("' + t.attr("data-back_src") + '")'),
                t.removeAttr("data-back_src"))
            })),
            3 == t && ($(".section_3_main_slider ").removeClass("fadeOutDown fadeInUp animated fadeOutUp").addClass("animated fadeInUp"),
            $(".section_3_main_slider_wrapper .subheader").removeClass("fadeOut fadeIn animated").addClass("animated fadeIn"),
            $(".section_3_main_items").show(),
            $(".section_3_main_item_cg").addClass("animated fadeInUp"),
            $(".section_3_items .section_3_item_wrapper>*  ").addClass("animated fadeInLeft"),
            setTimeout(function() {
                $(".section_3_item_arrow").removeClass("animated fadeOutLeft fadeInRight fadeInLeft fadeOutRight to-be-animated")
            }, 500)),
            "4" == t && ($(".open_filters, .projects_control").removeClass("fadeOut animated fadeIn fadeOut").addClass("animated fadeIn"),
            $(".current_projects_wrapper").show(),
            show4()),
            "5" == t && ($(".section_5_phone_1, .section_5_phone_2").removeClass("fadeInDown animated fadeInUp fadeOutDown slideOutDown").addClass("fadeInUp animated"),
            $(".section_5_address,.section_5_mode,.section_5_email,.socials, .contacts_inner_left .h1").removeClass("fadeInDown animated fadeInUp fadeOutDown slideOutDown").addClass("fadeInUp animated"),
            $(".cr,.contacts_wrapper .subheader").removeClass("fadeOut animated fadeIn").addClass("animated fadeIn"))
        },
        afterRender: function() {},
        afterResize: function() {},
        afterResponsive: function(e) {},
        afterSlideLoad: function(e, t, i, a) {},
        onSlideLeave: function(e, t, i, a, n) {}
    }) : $.scrollify({
        section: ".section",
        sectionName: "section-name",
        interstitialSection: "",
        easing: "easeOutExpo",
        scrollSpeed: 700,
        offset: 0,
        scrollbars: !0,
        standardScrollElements: "",
        setHeights: !0,
        overflowScroll: !0,
        updateHash: !0,
        touchScroll: !0,
        before: function(e, t) {
            3 == e && !animation_move && 780 < $(window).width() && ($.scrollify.disable(),
            a()),
            4 == e && !animation_move && 780 < $(window).width() && (animation_move = !0,
            $(".section_5_phone_1, .section_5_phone_2").removeClass("fadeInDown animated fadeInUp fadeOutDown slideOutDown").addClass("slideOutDown animated"),
            $(".section_5_address,.section_5_mode,.section_5_email,.socials, .contacts_inner_left .h1").removeClass("fadeInDown animated fadeInUp fadeOutDown slideOutDown").addClass("fadeOutDown animated"),
            setTimeout(function() {
                $(".section_5_phone_1, .section_5_phone_2").removeClass("slideInDown animated slideInUp fadeOutDown slideOutDown"),
                $(".section_5_address,.section_5_mode,.section_5_email,.socials, .contacts_inner_left .h1").removeClass("fadeInDown animated fadeInUp fadeOutDown slideOutDown"),
                animation_move = !1
            }, 500))
        },
        after: function(e, t) {
            "1" == e && ($(".section_2_image").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown fadeIn fadeOut").addClass("animated fadeIn"),
            $(".section_2_text").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown").addClass("animated fadeInUp"),
            $(".presentation_wrapper  .presentations").removeClass("animated fadeIn fadeOut fadeOutDown fadeInDown").addClass("animated fadeIn")),
            "3" == e && $(".current_projects_wrapper").show(),
            "4" == e && ($(".section_5_phone_1, .section_5_phone_2").removeClass("fadeInDown animated fadeInUp fadeOutDown slideOutDown").addClass("slideInUp animated"),
            $(".section_5_address,.section_5_mode,.section_5_email,.socials, .contacts_inner_left .h1").removeClass("fadeInDown animated fadeInUp fadeOutDown slideOutDown").addClass("fadeInUp animated"))
        },
        afterResize: function() {},
        afterRender: function() {}
    }),
    $('.section_2_text strong[data-link="1"]').click(function(e) {
        e.preventDefault(),
        fp ? ($.fn.fullpage.setAllowScrolling(!1),
        $.fn.fullpage.setKeyboardScrolling(!1)) : $.scrollify.disable(),
        $(".section_2_studio_slider").removeClass("fadeOutLeft animated fadeOutUp fadeInUp fadeOutDown animated").addClass("animated fadeInUp"),
        $(".section_2_studio .animation_item_wrapper>*").removeClass("fadeOutLeft animated fadeOutUp fadeInUp fadeOutDown animated").addClass("animated fadeInUp"),
        $(".section_2_image").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown fadeIn fadeOut").addClass("animated fadeOut"),
        $(".section_2_text").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown animated").addClass("fadeOutDown animated"),
        $(".section_2_text_wrapper .subheader .to-be-animated").removeClass("animated fadeIn fadeOut").addClass("animated fadeOut"),
        $(".presentation_wrapper  .presentations").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown animated").addClass("fadeOutDown animated").css("z-index", "-1"),
        $(".section_2_psb_item_p").show(),
        0 == $(".section_2_psb_item_p .animation_item_wrapper").length && $(".section_2_psb_item_p>*").wrap("<div class='animation_item_wrapper'></div>"),
        $(".section_2_psb_item_p .animation_item_wrapper>*").addClass("to-be-animated"),
        owl_psb.find('.owl-item[data-position="1"]').first().click(),
        $(".section_2_studio_slider").addClass("fadeInUp animated"),
        $(".right_menu").removeClass("animated fadeIn fadeOut").addClass("animated fadeOut").css("z-index", "-1"),
        $(".scroll_control_down").removeClass("animated fadeIn fadeOut").addClass("animated fadeOut").css("z-index", "-1"),
        setTimeout(function() {
            $(".section_2_studio").fadeIn().promise().done(function() {
                $(".psb_control").fadeIn()
            }),
            $(".section_2_text_wrapper").hide()
        }, 900)
    }),
    $('.section_2_text strong[data-link="2"]').click(function(e) {
        e.preventDefault(),
        fp && ($.fn.fullpage.setAllowScrolling(!1),
        $.fn.fullpage.setKeyboardScrolling(!1)),
        $(".team_slider, .team_do .animation_item,.team_name .animation_item,.team_place .animation_item,.team_text .animation_item").removeClass("fadeOutLeft animated fadeOutUp fadeInUp fadeOutDown animated").addClass("animated fadeInUp"),
        $(".right_menu").removeClass("animated fadeIn fadeOut").addClass("animated fadeOut").css("z-index", "-1"),
        $(".scroll_control_down").removeClass("animated fadeIn fadeOut").addClass("animated fadeOut").css("z-index", "-1"),
        $(".section_2_image").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown fadeIn fadeOut").addClass("animated fadeOut"),
        $(".section_2_text").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown animated").addClass("fadeOutDown animated"),
        $(".section_2_text_wrapper .subheader .to-be-animated").removeClass("animated fadeIn fadeOut").addClass("animated fadeOut"),
        $(".presentation_wrapper  .presentations").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown animated").addClass("fadeOutDown animated").css("z-index", "-1"),
        setTimeout(function() {
            $(".section_2_team").fadeIn(1200).css("z-index", "1"),
            $(".section_2_text_wrapper").hide(),
            $(".team_control_line").width()
        }, 700)
    }),
    $('.section_2_text strong[data-link="3"]').click(function(e) {
        e.preventDefault(),
        $(".right_menu").removeClass("animated fadeIn fadeOut").addClass("animated fadeOut").css("z-index", "-1"),
        $(".scroll_control_down").removeClass("animated fadeIn fadeOut").addClass("animated fadeOut").css("z-index", "-1"),
        fp ? ($.fn.fullpage.setAllowScrolling(!1),
        $.fn.fullpage.setKeyboardScrolling(!1)) : $.scrollify.disable(),
        $(".section_2_brands .subheader").removeClass("animated fadeOut fadeIn").addClass("animated fadeIn"),
        $(".section_2_brands .animation_item_wrapper>*").removeClass("fadeOutLeft animated fadeOutUp fadeInUp fadeOutDown animated").addClass("animated fadeInUp"),
        $(".section_2_image").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown fadeIn fadeOut").addClass("animated fadeOut"),
        $(".section_2_text").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown animated").addClass("fadeOutDown animated"),
        $(".section_2_text_wrapper .subheader .to-be-animated").removeClass("animated fadeIn fadeOut").addClass("animated fadeOut"),
        $(".presentation_wrapper  .presentations").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown animated").addClass("fadeOutDown animated").css("z-index", "-1"),
        setTimeout(function() {
            $(".section_2_brands").fadeIn().css("z-index", "1"),
            $(".brand_item").each(function(e) {
                var t = $(this);
                $(this).offset().top + $(this).outerHeight() < $(".section_2_brands").scrollTop() + $(".section_2_brands").height() && setTimeout(function() {
                    t.animate({
                        opacity: "1"
                    }, 700)
                }, 300)
            }),
            $(".brand_item").addClass("wow fadeIn "),
            $(".section_2_text_wrapper").hide()
        }, 500)
    }),
    $('.section_2_text strong[data-link="4"]').click(function(e) {
        e.preventDefault(),
        $(".right_menu").removeClass("animated fadeIn fadeOut").addClass("animated fadeOut").css("z-index", "-1"),
        $(".scroll_control_down").removeClass("animated fadeIn fadeOut").addClass("animated fadeOut").css("z-index", "-1"),
        fp ? ($.fn.fullpage.setAllowScrolling(!1),
        $.fn.fullpage.setKeyboardScrolling(!1)) : $.scrollify.disable(),
        $(".section_2_vacancies .subheader").removeClass("animated fadeOut fadeIn").addClass("animated fadeIn"),
        $(".section_2_vacancies .animation_item_wrapper>*").removeClass("fadeOutLeft animated fadeOutUp fadeInUp fadeOutDown animated").addClass("animated fadeInUp"),
        $(".section_2_image").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown fadeIn fadeOut").addClass("animated fadeOut"),
        $(".section_2_text").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown animated").addClass("fadeOutDown animated"),
        $(".section_2_text_wrapper .subheader .to-be-animated").removeClass("animated fadeIn fadeOut").addClass("animated fadeOut"),
        $(".presentation_wrapper  .presentations").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown animated").addClass("fadeOutDown animated").css("z-index", "-1"),
        setTimeout(function() {
            $(".section_2_vacancies").fadeIn().css("z-index", "1"),
            $(".section_2_vacancies .subheader").removeClass("animated fadeOut fadeIn").addClass("animated fadeIn"),
            $(" .section_2_vacancies .animation_item_wrapper>*").addClass("fadeInUp animated"),
            $(".section_2_text_wrapper").hide()
        }, 500)
    }),
    $(".section_2_studio .close").click(function() {
        $(".scroll_control_beauty").fadeOut(),
        $(".right_menu_psb").fadeOut(),
        $(".psb_control").fadeOut(),
        $(".right_menu").removeClass("animated fadeIn fadeOut").addClass("animated fadeIn").css("z-index", "1"),
        $(".scroll_control_down").removeClass("animated fadeIn fadeOut").addClass("animated fadeIn").css("z-index", "1"),
        $(".section_2_text_wrapper").is(":visible") || ($(".section_2_text_wrapper").show(),
        $(".section_2_studio_slider, .section_2_studio .animation_item_wrapper>*").removeClass("fadeOutLeft animated fadeOutUp fadeInUp fadeOutDown animated").addClass("animated fadeOutUp"),
        $(".section_2_image").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown fadeIn fadeOut"),
        $(".section_2_text").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown animated"),
        $(".section_2_text_wrapper .subheader .to-be-animated").removeClass("animated fadeIn fadeOut"),
        $(".section_2_studio").fadeOut().promise().done(function() {
            fp ? ($.fn.fullpage.setAllowScrolling(!0),
            $.fn.fullpage.setKeyboardScrolling(!0)) : $.scrollify.enable(),
            $(".section_2_image").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown fadeIn fadeOut").addClass("animated fadeIn"),
            $(".section_2_text").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown animated").addClass("animated fadeInUp"),
            $(".section_2_text_wrapper .subheader .to-be-animated").removeClass("animated fadeIn fadeOut").addClass("animated fadeIn"),
            $(".presentation_wrapper .presentations").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown animated").addClass("animated fadeInUp").css("z-index", "1")
        }))
    }),
    $(".section_2_brands .close").click(function() {
        $(".right_menu").removeClass("animated fadeIn fadeOut").addClass("animated fadeIn").css("z-index", "1"),
        $(".scroll_control_down").removeClass("animated fadeIn fadeOut").addClass("animated fadeIn").css("z-index", "1"),
        $(".section_2_brands").is(":visible") && ($(".section_2_text_wrapper").show(),
        $(".section_2_brands .animation_item_wrapper>*").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown animated").addClass("animated fadeOutUp"),
        $(".section_2_image").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown fadeIn fadeOut"),
        $(".section_2_text").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown animated"),
        $(".section_2_text_wrapper .subheader .to-be-animated").removeClass("animated fadeIn fadeOut"),
        $(".section_2_brands").fadeOut().promise().done(function() {
            $(".section_2_brands").css("z-index", "-1"),
            fp ? ($.fn.fullpage.setAllowScrolling(!0),
            $.fn.fullpage.setKeyboardScrolling(!0)) : $.scrollify.enable(),
            $(".section_2_image").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown fadeIn fadeOut").addClass("animated fadeIn"),
            $(".section_2_text").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown").addClass("animated fadeInUp"),
            $(".section_2_text_wrapper .subheader .to-be-animated").removeClass("animated fadeIn fadeOut").addClass("animated fadeIn"),
            $(".presentation_wrapper .presentations").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown").addClass("animated fadeInUp").css("z-index", "1")
        }))
    }),
    $(".section_2_vacancies .close").click(function() {
        $(".right_menu").removeClass("animated fadeIn fadeOut").addClass("animated fadeIn").css("z-index", "1"),
        $(".scroll_control_down").removeClass("animated fadeIn fadeOut").addClass("animated fadeIn").css("z-index", "1"),
        $(".section_2_vacancies").is(":visible") && ($(".section_2_text_wrapper").show(),
        $(".section_2_vacancies .animation_item_wrapper>*").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown animated").addClass("animated fadeOutUp"),
        $(".section_2_image").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown fadeIn fadeOut"),
        $(".section_2_text").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown animated"),
        $(".section_2_text_wrapper .subheader .to-be-animated").removeClass("animated fadeIn fadeOut"),
        $(".section_2_vacancies").fadeOut().promise().done(function() {
            $(".section_2_vacancies").css("z-index", "-1"),
            fp ? ($.fn.fullpage.setAllowScrolling(!0),
            $.fn.fullpage.setKeyboardScrolling(!0)) : $.scrollify.enable(),
            $(".section_2_image").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown fadeIn fadeOut").addClass("animated fadeIn"),
            $(".section_2_text").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown").addClass("animated fadeInUp"),
            $(".section_2_text_wrapper .subheader .to-be-animated").removeClass("animated fadeIn fadeOut").addClass("animated fadeIn"),
            $(".presentation_wrapper  .presentations").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown").addClass("animated fadeInUp").css("z-index", "1")
        }))
    }),
    $(".section_2_team .close").click(function() {
        $(".right_menu").removeClass("animated fadeIn fadeOut").addClass("animated fadeIn").css("z-index", "1"),
        $(".scroll_control_down").removeClass("animated fadeIn fadeOut").addClass("animated fadeIn").css("z-index", "1"),
        $(".section_2_team").is(":visible") && ($(".team_slider, .team_do .animation_item ,.team_name .animation_item,.team_place .animation_item, .team_text .animation_item").removeClass("fadeOutLeft animated fadeOutUp fadeInUp fadeOutDown animated").addClass("animated fadeOutUp"),
        $(".section_2_text_wrapper").show(),
        $(".section_2_image").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown fadeIn fadeOut"),
        $(".section_2_text").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown animated"),
        $(".section_2_text_wrapper .subheader .to-be-animated").removeClass("animated fadeIn fadeOut"),
        $(".section_2_team").fadeOut().promise().done(function() {
            $(".section_2_team").css("z-index", "-1"),
            fp ? ($.fn.fullpage.setAllowScrolling(!0),
            $.fn.fullpage.setKeyboardScrolling(!0)) : $.scrollify.enable(),
            $(".section_2_image").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown fadeIn fadeOut").addClass("animated fadeIn"),
            $(".section_2_text").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown").addClass("animated fadeInUp"),
            $(".section_2_text_wrapper .subheader .to-be-animated").removeClass("animated fadeIn fadeOut").addClass("animated fadeIn"),
            $(".presentation_wrapper  .presentations").removeClass("fadeOutLeft animated fadeInLeft fadeInUp fadeOutDown").addClass("animated fadeInUp").css("z-index", "1")
        }))
    }),
    $(".project_wrapper_big .close").click(function() {
        $(".project_wrapper_big video").get(0).pause(),
        $(".scroll_control_down").removeClass("hidden"),
        setTimeout(function() {}, 500),
        $(".right_menu").css("z-index", "1"),
        $(".project_wrapper_big").is(":visible") && $(".project_wrapper_big").fadeOut().promise().done(function() {
            fp ? ($.fn.fullpage.setAllowScrolling(!0),
            $.fn.fullpage.setKeyboardScrolling(!0)) : $.scrollify.enable(),
            $(".current_projects_wrapper").show(),
            $(".open_filters").removeClass("fadeOut animated fadeIn fadeOut").addClass("animated fadeIn"),
            $("body").removeClass("white_color"),
            $("body").removeClass("black_color"),
            show4()
        })
    }),
    $(".project_content ").on("click", ".close", function() {
        $(".current_projects_wrapper").is(":visible") || 780 < $(window).width() && $("body").addClass("white_color"),
        780 < $(window).width() ? ($(".section_5_more").css("transform", "translateX(0)"),
        $("body").removeClass("black_color"),
        $(".project_content .animation_item_wrapper>* ").removeClass("fadeOutDown fadeInUp fadeOutUp animated").addClass("fadeOutUp animated"),
        $(".project_content ").css("z-index", "-1"),
        "/video//" == $(".project_video_wrapper video").attr("src") && $(".project_video_wrapper video").get(0).play(),
        setTimeout(function() {
            $(".project_content").css("opacity", "0"),
            $(".project_video_wrapper .mejs__layers, .project_video_wrapper .mejs__controls").show(),
            $(".project_content .close").fadeOut(),
            $(".project").animate({
                width: "100vw"
            }),
            $(".project_video_wrapper").animate({
                width: "100vw"
            }, 500).promise().done(function() {
                $(".project_wrapper_big>.close").fadeIn(),
                $(".current_projects_wrapper").is(":visible") || $(".project_video_wrapper video").get(0).play(),
                $(".section_5_more").fadeIn()
            })
        }, 500)) : ($(".section_5_more").css("transform", "translateX(0)"),
        $("body").removeClass("black_color"),
        $(".project_content .animation_item_wrapper>* ").removeClass("fadeOutDown fadeInUp fadeOutUp animated").addClass("fadeOutUp animated"),
        setTimeout(function() {
            $(".project_wrapper_big").fadeOut().promise().done(function() {
                fp ? ($.fn.fullpage.setAllowScrolling(!0),
                $.fn.fullpage.setKeyboardScrolling(!0)) : $.scrollify.enable(),
                $(".current_projects_wrapper").show(),
                $(".open_filters").removeClass("fadeOut animated fadeIn fadeOut").addClass("animated fadeIn"),
                show4()
            })
        }, 500))
    }),
    $(".section_3_projects .close").click(function() {
        fp ? ($.fn.fullpage.setAllowScrolling(!0),
        $.fn.fullpage.setKeyboardScrolling(!0)) : $.scrollify.enable(),
        setTimeout(function() {
            $("body").removeClass("black_color")
        }, 500),
        $(".section_3_projects").is(":visible") && ($(".section_3_projects_items video").each(function() {
            $(this).get(0).pause()
        }),
        $(".section_3_projects_slider ").removeClass("fadeOutDown fadeInUp animated fadeOutUp").addClass("animated fadeOutUp"),
        $(".section_3_projects_slider_wrapper .subheader").removeClass("fadeOut fadeIn animated").addClass("animated fadeOut"),
        $(".section_3_projects_items .animation_item").removeClass("fadeOutDown fadeInUp animated").addClass("fadeOutUp animated"),
        setTimeout(function() {
            $(".section_3_projects_items").hide(),
            $(".section_3_projects_slider ").removeClass("fadeOutDown fadeInUp animated fadeOutUp "),
            $(".section_3_projects_items .animation_item").removeClass("fadeOutDown fadeInUp animated fadeOutUp"),
            $(".section_3_projects").fadeOut(),
            $(".section_3_video_full_wrapper>.close").click(),
            $(".section_3_video_wrapper").animate({
                width: "100%"
            }, 1e3).promise().done(function() {
                $(".right_menu").removeClass("animated fadeIn fadeOut").addClass("animated fadeIn").css("z-index", "1"),
                $(".scroll_control_down").removeClass("animated fadeIn fadeOut").addClass("animated fadeIn"),
                $(".section_3_video_full_wrapper>.close").fadeOut(),
                $(".section_3_video_full_wrapper").fadeOut(),
                $(".section_3_video_wrapper").fadeIn(),
                $(".section_3_video_wrapper video:visible").get(0).play(),
                $(".scroll_control_down").removeClass("hidden"),
                $(".section_3_items .section_3_item_wrapper>* ").removeClass("animated fadeOutLeft fadeInRight fadeInLeft fadeOutRight").addClass("animated fadeInLeft"),
                $(".section_3_main_slider_wrapper").show(),
                $(".section_3_main_slider ").removeClass("fadeOutDown fadeInUp animated fadeOutUp").addClass("animated fadeInUp"),
                $(".section_3_main_slider_wrapper .subheader").removeClass("fadeOut fadeIn animated").addClass("animated fadeIn"),
                $(".section_3_main_items .animation_item").removeClass("fadeOutDown fadeInUp animated fadeOutUp").addClass("fadeInUp animated"),
                setTimeout(function() {
                    $(".section_3_item_arrow").removeClass("animated fadeOutLeft fadeInRight fadeInLeft fadeOutRight")
                }, 500)
            })
        }, 500)),
        $(".section_3_video_full_wrapper>.close").click(function() {
            $(".section_3_video_full_wrapper").is(":visible") && (fp && ($.fn.fullpage.setAllowScrolling(!0),
            $.fn.fullpage.setKeyboardScrolling(!0)),
            $(".right_menu").removeClass("animated fadeIn fadeOut").addClass("animated fadeIn").css("z-index", "1"),
            $(".scroll_control_down").removeClass("animated fadeIn fadeOut").addClass("animated fadeIn"),
            $(".section_3_video_full_wrapper>.close").fadeOut(),
            $(".section_3_video_full_wrapper").fadeOut(),
            $(".section_3_video_wrapper").fadeIn(),
            $(".section_3_video_wrapper video:visible").get(0).play(),
            $(".scroll_control_down").removeClass("hidden"))
        })
    }),
    $(".section_3_video_wrapper .close").click(function() {
        var e = $(this);
        e.is(":visible") && (e.fadeOut(),
        $(".section_3_more").css("opacity", "0").removeClass("active"),
        $(".section_3_items .section_3_item_wrapper>* ").removeClass("animated fadeOutLeft fadeInRight fadeInLeft"),
        $(".section_3_items .section_3_item_wrapper>*  ").addClass("animated fadeInLeft"),
        $(".project_wrapper").fadeOut().promise().done(function() {
            fp ? $.fn.fullpage.setAllowScrolling(!0) : $.scrollify.enable(),
            $(".current_projects_wrapper").show(),
            show4()
        }))
    }),
    $(".showreel .close").click(function() {
        $(".showreel").is(":visible") && ($(".change_language_wrapper").css({
            opacity: 0,
            display: "block"
        }).animate({
            opacity: 1
        }, 1e3),
        $(".main_menu").css({
            opacity: 0,
            display: "flex"
        }).animate({
            opacity: 1
        }, 1e3),
        $(".burger").fadeIn()),
        $(".right_menu").removeClass("animated fadeIn fadeOut").addClass("animated fadeIn").css("z-index", "1"),
        $(".scroll_control_down").removeClass("animated fadeIn fadeOut").addClass("animated fadeIn"),
        $(".showreel video").get(0).pause(),
        $(".showreel").fadeOut(),
        $(".current_video").fadeIn()
    }),
    $(".filters_page .close").click(function() {
        $(".filters_page").is(":visible") && $(".filters_page").fadeOut().promise().done(function() {
            show4()
        })
    }),
    t(),
    $(".section_3_item").click(function() {
        $(".section_3_item").removeClass("red"),
        $(".right_menu").removeClass("animated fadeIn fadeOut").addClass("animated fadeOut"),
        $(".scroll_control_down").removeClass("animated fadeIn fadeOut").addClass("animated fadeOut"),
        $(".section_3_item").off("mouseenter");
        var e = $(this);
        if (e.hasClass("section_3_item_1") && owl_cec.find(".section_3_projects_slider_cg").first().closest(".owl-item").click(),
        e.hasClass("section_3_item_2") && owl_cec.find(".section_3_projects_slider_e").first().closest(".owl-item").click(),
        e.hasClass("section_3_item_3") && owl_cec.find(".section_3_projects_slider_c").first().closest(".owl-item").click(),
        $(window).width() < 780 && !e.hasClass("clicked_active"))
            return $(".section_3_item").removeClass("clicked_active"),
            e.addClass("clicked_active"),
            t(),
            !1;
        $(".section_3_item").removeClass("clicked_active"),
        $("body").hasClass("web") ? (0 == e.index() && (e.find(".section_3_item_wrapper").eq(0).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/cg/pink/г.png"),
        e.find(".section_3_item_wrapper").eq(1).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/cg/pink/р.png"),
        e.find(".section_3_item_wrapper").eq(2).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/cg/pink/а.png"),
        e.find(".section_3_item_wrapper").eq(3).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/cg/pink/ф.png"),
        e.find(".section_3_item_wrapper").eq(4).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/cg/pink/и.png"),
        e.find(".section_3_item_wrapper").eq(5).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/cg/pink/к.png"),
        e.find(".section_3_item_wrapper").eq(6).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/cg/pink/а.png")),
        1 == e.index() && (e.find(".section_3_item_wrapper").eq(0).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/event/pink/И.png"),
        e.find(".section_3_item_wrapper").eq(1).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/event/pink/В.png"),
        e.find(".section_3_item_wrapper").eq(2).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/event/pink/Е.png"),
        e.find(".section_3_item_wrapper").eq(3).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/event/pink/Н.png"),
        e.find(".section_3_item_wrapper").eq(4).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/event/pink/Т.png"),
        e.find(".section_3_item_wrapper").eq(5).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/event/pink/Ы.png")),
        2 == e.index() && (e.find(".section_3_item_wrapper").eq(0).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/commercial/pink/р.png"),
        e.find(".section_3_item_wrapper").eq(1).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/commercial/pink/е.png"),
        e.find(".section_3_item_wrapper").eq(2).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/commercial/pink/к.png"),
        e.find(".section_3_item_wrapper").eq(3).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/commercial/pink/л.png"),
        e.find(".section_3_item_wrapper").eq(4).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/commercial/pink/а.png"),
        e.find(".section_3_item_wrapper").eq(5).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/commercial/pink/м.png"),
        e.find(".section_3_item_wrapper").eq(6).find(".section_3_item_symbol").attr("src", "/assets/images/cg_event_commercial_ru/commercial/pink/а.png"))) : (0 == e.index() && (e.find(".section_3_item_wrapper").eq(0).find(".section_3_item_symbol").attr("src", "/assets/images/cg/g-3.png"),
        e.find(".section_3_item_wrapper").eq(1).find(".section_3_item_symbol").attr("src", "/assets/images/cg/c-3.png")),
        1 == e.index() && (e.find(".section_3_item_wrapper").eq(0).find(".section_3_item_symbol").attr("src", "/assets/images/event/e_1-3.png"),
        e.find(".section_3_item_wrapper").eq(1).find(".section_3_item_symbol").attr("src", "/assets/images/event/v-3.png"),
        e.find(".section_3_item_wrapper").eq(2).find(".section_3_item_symbol").attr("src", "/assets/images/event/e_1-3.png"),
        e.find(".section_3_item_wrapper").eq(3).find(".section_3_item_symbol").attr("src", "/assets/images/event/n-3.png"),
        e.find(".section_3_item_wrapper").eq(4).find(".section_3_item_symbol").attr("src", "/assets/images/event/t_1-3.png")),
        2 == e.index() && (e.find(".section_3_item_wrapper").eq(0).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_2/c2.png"),
        e.find(".section_3_item_wrapper").eq(1).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_2/o.png"),
        e.find(".section_3_item_wrapper").eq(2).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_2/m2.png"),
        e.find(".section_3_item_wrapper").eq(3).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_2/m2.png"),
        e.find(".section_3_item_wrapper").eq(4).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_2/e.png"),
        e.find(".section_3_item_wrapper").eq(5).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_2/r.png"),
        e.find(".section_3_item_wrapper").eq(6).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_2/c2.png"),
        e.find(".section_3_item_wrapper").eq(7).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_2/i.png"),
        e.find(".section_3_item_wrapper").eq(8).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_2/a.png"),
        e.find(".section_3_item_wrapper").eq(9).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_2/l.png"))),
        $(e).addClass("red"),
        $(".section_3_video_full_wrapper>.close").fadeIn(),
        $(".scroll_control_down").addClass("hidden"),
        $(".section_3_items .section_3_item_wrapper>*").addClass("animated fadeOutRight"),
        setTimeout(function() {
            $(".section_3_items").hide(),
            $("body").hasClass("web") || (0 == e.index() ? (e.find("text").css("fill-opacity", "1"),
            e.find(".section_3_item_wrapper").eq(0).find(".section_3_item_symbol").attr("src", "/assets/images/cg/g-2.png"),
            e.find(".section_3_item_wrapper").eq(1).find(".section_3_item_symbol").attr("src", "/assets/images/cg/c-2.png")) : ($(".section_3_item").eq(0).find("text").css("fill-opacity", "0"),
            $(".section_3_item").eq(0).find(".section_3_item_wrapper").eq(0).find(".section_3_item_symbol").attr("src", "/assets/images/cg/g.png"),
            $(".section_3_item").eq(0).find(".section_3_item_wrapper").eq(1).find(".section_3_item_symbol").attr("src", "/assets/images/cg/c.png")),
            1 == e.index() ? (e.find(".section_3_item_wrapper").eq(0).find(".section_3_item_symbol").attr("src", "/assets/images/event/e-2.png"),
            e.find(".section_3_item_wrapper").eq(1).find(".section_3_item_symbol").attr("src", "/assets/images/event/v-2.png"),
            e.find(".section_3_item_wrapper").eq(2).find(".section_3_item_symbol").attr("src", "/assets/images/event/e-2.png"),
            e.find(".section_3_item_wrapper").eq(3).find(".section_3_item_symbol").attr("src", "/assets/images/event/n-2.png"),
            e.find(".section_3_item_wrapper").eq(4).find(".section_3_item_symbol").attr("src", "/assets/images/event/t_1-2.png")) : ($(".section_3_item").eq(1).find(".section_3_item_wrapper").eq(0).find(".section_3_item_symbol").attr("src", "/assets/images/event/e_1.png"),
            $(".section_3_item").eq(1).find(".section_3_item_wrapper").eq(1).find(".section_3_item_symbol").attr("src", "/assets/images/event/v.png"),
            $(".section_3_item").eq(1).find(".section_3_item_wrapper").eq(2).find(".section_3_item_symbol").attr("src", "/assets/images/event/e_1.png"),
            $(".section_3_item").eq(1).find(".section_3_item_wrapper").eq(3).find(".section_3_item_symbol").attr("src", "/assets/images/event/n.png"),
            $(".section_3_item").eq(1).find(".section_3_item_wrapper").eq(4).find(".section_3_item_symbol").attr("src", "/assets/images/event/t_1.png")),
            2 == e.index() ? (e.find(".section_3_item_wrapper").eq(0).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/c2-2.png"),
            e.find(".section_3_item_wrapper").eq(1).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/o-2.png"),
            e.find(".section_3_item_wrapper").eq(2).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/m1-2.png"),
            e.find(".section_3_item_wrapper").eq(3).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/m1-2.png"),
            e.find(".section_3_item_wrapper").eq(4).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/e-2.png"),
            e.find(".section_3_item_wrapper").eq(5).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/r-2.png"),
            e.find(".section_3_item_wrapper").eq(6).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/c2-2.png"),
            e.find(".section_3_item_wrapper").eq(7).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/i-2.png"),
            e.find(".section_3_item_wrapper").eq(8).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/a-2.png"),
            e.find(".section_3_item_wrapper").eq(9).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/l-2.png")) : ($(".section_3_item").eq(2).find(".section_3_item_wrapper").eq(0).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/c2.png"),
            $(".section_3_item").eq(2).find(".section_3_item_wrapper").eq(1).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/o.png"),
            $(".section_3_item").eq(2).find(".section_3_item_wrapper").eq(2).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/m1.png"),
            $(".section_3_item").eq(2).find(".section_3_item_wrapper").eq(3).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/m1.png"),
            $(".section_3_item").eq(2).find(".section_3_item_wrapper").eq(4).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/e.png"),
            $(".section_3_item").eq(2).find(".section_3_item_wrapper").eq(5).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/r.png"),
            $(".section_3_item").eq(2).find(".section_3_item_wrapper").eq(6).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/c2.png"),
            $(".section_3_item").eq(2).find(".section_3_item_wrapper").eq(7).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/i.png"),
            $(".section_3_item").eq(2).find(".section_3_item_wrapper").eq(8).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/a.png"),
            $(".section_3_item").eq(2).find(".section_3_item_wrapper").eq(9).find(".section_3_item_symbol").attr("src", "/assets/images/commercial_1/l.png"))),
            $(".section_3_projects").fadeIn(),
            $(".section_3_projects_items").hide(),
            $(".section_3_projects>.close").addClass("to-be-animated").removeClass("animated fadeOut fadeIn"),
            $(" .section_3_video_wrapper").animate({
                width: 780 < $(window).width() ? "11.6vw" : "0vw"
            }, 1300).promise().done(function() {
                $(".right_menu").css("z-index", "-1"),
                $(".section_3_video_wrapper video").get(0).pause(),
                $(".section_3_video_wrapper video").get(1).pause(),
                $(".section_3_video_wrapper video").get(2).pause(),
                fp ? ($.fn.fullpage.setAllowScrolling(!1),
                $.fn.fullpage.setKeyboardScrolling(!1)) : $.scrollify.disable(),
                setTimeout(function() {
                    $(".section_3_projects>.close").addClass("animated fadeIn")
                }, 200),
                780 < $(window).width() ? ($("body").addClass("black_color"),
                $(".section_3_projects_items").show(),
                $(".section_3_projects").fadeIn(),
                $(".section_3_projects_slider").addClass("fadeInUp animated")) : $(".section_3_video_full_wrapper").animate({
                    width: "0"
                }, 300).promise().done(function() {
                    $("body").addClass("black_color"),
                    $(".section_3_projects").fadeIn(),
                    $(".section_3_projects_items").show(),
                    $(window).width() < 780 && setTimeout(function() {}, 500),
                    $(".section_3_projects_slider").addClass("fadeInUp animated"),
                    $(".section_2_psb_item_cg").addClass("fadeInUp animated")
                })
            }),
            t()
        }, 500)
    }),
    $(".section_3_main_item_button").click(function() {
        $(".right_menu").removeClass("animated fadeIn fadeOut").addClass("animated fadeOut"),
        $(".scroll_control_down").removeClass("animated fadeIn fadeOut").addClass("animated fadeOut");
        var e = $(this);
        e.hasClass("section_3_item_1") && owl_cec.find(".section_3_projects_slider_cg").first().closest(".owl-item").click(),
        e.hasClass("section_3_item_2") && owl_cec.find(".section_3_projects_slider_e").first().closest(".owl-item").click(),
        e.hasClass("section_3_item_3") && owl_cec.find(".section_3_projects_slider_c").first().closest(".owl-item").click(),
        $(".section_3_main_slider ").removeClass("fadeOutDown fadeInUp animated fadeOutUp").addClass("animated fadeOutUp"),
        $(".section_3_main_slider_wrapper .subheader").removeClass("fadeOut fadeIn animated").addClass("animated fadeOut"),
        $(".section_3_main_items .animation_item").removeClass("fadeOutDown fadeInUp animated").addClass("fadeOutUp animated"),
        $(".section_3_video_full_wrapper>.close").fadeIn(),
        $(".scroll_control_down").addClass("hidden"),
        setTimeout(function() {
            $(".section_3_main_slider_wrapper").hide(),
            $(".section_3_projects").fadeIn(),
            $(".section_3_projects_items").hide(),
            $(".section_3_projects>.close").addClass("to-be-animated").removeClass("animated fadeOut fadeIn"),
            $(" .section_3_video_wrapper").animate({
                width: 780 < $(window).width() ? "11.6vw" : "0vw"
            }, 1300).promise().done(function() {
                $(".right_menu").css("z-index", "-1"),
                $(".section_3_video_wrapper video").get(0).pause(),
                $(".section_3_video_wrapper video").get(1).pause(),
                $(".section_3_video_wrapper video").get(2).pause(),
                fp ? ($.fn.fullpage.setAllowScrolling(!1),
                $.fn.fullpage.setKeyboardScrolling(!1)) : $.scrollify.disable(),
                setTimeout(function() {
                    $(".section_3_projects>.close").addClass("animated fadeIn")
                }, 200),
                $(".section_3_projects_slider_wrapper .subheader").removeClass("fadeOut fadeIn animated").addClass("animated fadeIn"),
                780 < $(window).width() ? ($("body").addClass("black_color"),
                $(".section_3_projects_items").show(),
                $(".section_3_projects").fadeIn(),
                $(".section_3_projects_slider").addClass("fadeInUp animated")) : $(".section_3_video_full_wrapper").animate({
                    width: "0"
                }, 300).promise().done(function() {
                    $("body").addClass("black_color"),
                    $(".section_3_projects").fadeIn(),
                    $(".section_3_projects_items").show(),
                    $(window).width() < 780 && setTimeout(function() {}, 500),
                    $(".section_3_projects_slider").addClass("fadeInUp animated"),
                    $(".section_2_psb_item_cg").addClass("fadeInUp animated")
                })
            }),
            t()
        }, 500)
    }),
    $(".projects_control_max").html(project_qty),
    $(".projects_control_right, .projects_control_left ,.second_current_project").click(function() {
        "plus" == $(this).attr("data-control") ? (project_index < project_qty - 1 ? project_index++ : project_index = 0,
        project_index_next < project_qty - 1 ? project_index_next++ : project_index_next = 0) : (0 < project_index ? project_index-- : project_index = project_qty - 1,
        0 < project_index_next ? project_index_next-- : project_index_next = project_qty - 1),
        $(".projects_wrapper>div").removeClass("current next"),
        $(".projects_wrapper>div").eq(project_index_next).addClass("next"),
        $(".projects_wrapper>div").eq(project_index).addClass("current"),
        $(".project_video_wrapper video").fadeOut().promise().done(function() {
            $(".project_video_wrapper video").attr("src", $(".projects_wrapper>div.current").attr("data-video")),
            $(".project_video_wrapper video").attr("poster", $(".projects_wrapper>div.current").attr("data-poster")),
            "/video//" == $(".projects_wrapper>div.current").attr("data-video") ? ($(".project_video_wrapper video").addClass("photo"),
            $(".project_wrapper_big").addClass("photo")) : ($(".project_video_wrapper video").removeClass("photo"),
            $(".project_wrapper_big").removeClass("photo")),
            $(".project_video_wrapper video").fadeIn()
        }),
        $(".first_current_project").attr("data-project", project_index),
        $(".projects_control_current").html(project_index + 1),
        $(".projects_control_line").width(project_index / (project_qty - 1) * 100 + "%"),
        $(".first_current_project").attr("data-id", $(".projects_wrapper>div").eq(project_index).attr("data-id")),
        $(".first_current_project .current_project_image").animate({
            width: "0"
        }, 500).promise().done(function() {
            $(".first_current_project .current_project_image_img, .first_image_back").css("background", 'url("' + $(".projects_wrapper>div").eq(project_index).find("img").attr("src") + '")'),
            $(".first_current_project .current_project_image").animate({
                width: !(780 < $(window).width()) || 960 < $(window).height() ? "100%" : "44.444vw"
            }, 500)
        }),
        $(".second_current_project .current_project_image").animate({
            width: "0"
        }, 500).promise().done(function() {
            $(".second_current_project .current_project_image_img").css("background", 'url("' + $(".projects_wrapper>div").eq(project_index_next).find("img").attr("src") + '")'),
            $(".second_current_project .current_project_image").animate({
                width: "16.666vw"
            }, 500)
        }),
        $(".current_project_title .animation_item").addClass("fadeOutUp animated"),
        setTimeout(function() {
            $(".current_project_title").html($(".projects_wrapper>div").eq(project_index).find(".project_wrapper_title").html()),
            $(".project_wrapper_big").is(":visible") || splitText($(".current_project_title")),
            $(".current_project_title .animation_item").removeClass("animated fadeOutUp"),
            $(".current_project_title .animation_item").addClass("fadeInUp animated")
        }, 500),
        $(".current_project_short_description,.first_current_project_button ").addClass("fadeOutUp"),
        setTimeout(function() {
            $(".current_project_short_description ").html($(".projects_wrapper>div").eq(project_index).find(".project_wrapper_short_description").html()).removeClass("animated fadeOutUp").addClass("fadeInUp animated"),
            $(".first_current_project_button").removeClass("animated fadeOutUp").addClass("fadeInUp animated")
        }, 500)
    }),
    $(".team_control_max").html(team_qty),
    $(".team_control_right, .team_control_left").click(function() {
        var e = $(this).attr("data-control");
        owl_team.find(".animation").length,
        "plus" == e ? owl_team.find(".active").find(".current_owl").parent(".owl-item").next().click() : owl_team.find(".active").find(".current_owl").parent(".owl-item").prev().click()
    }),
    $(".psb_control_right, .psb_control_left").click(function() {
        "plus" == $(this).attr("data-control") ? owl_psb.find(".active").find(".current_owl").parent(".owl-item").next().click() : owl_psb.find(".active").find(".current_owl").parent(".owl-item").prev().click()
    }),
    $(".first_current_project").click(function() {
        $(".open_filters").removeClass("fadeOut animated fadeIn fadeOut").addClass("animated fadeOut"),
        $(".scroll_control_down").removeClass("animated fadeIn fadeOut").addClass("animated fadeOut"),
        $(".projects_control").removeClass("fadeOut animated fadeIn fadeOut").addClass("animated fadeOut"),
        780 < $(window).width() && setTimeout(function() {
            $("body").addClass("white_color")
        }, 0);
        var e = $(this);
        fp ? $.fn.fullpage.setAllowScrolling(!1) : $.scrollify.disable();
        var t = {
            resources: e.attr("data-id")
        };
        ajax_addr = "web" == context ? "/ajax" : "/en/ajax",
        $.post(ajax_addr, t, function(e) {
            $(".project_content").html('<div class="close">' + back + "</div>"),
            $(".project_content").append(e),
            $(".project_wrapper.next .project_wrapper_title").length ? $(".project_next_name").html($(".project_wrapper.next .project_wrapper_title").html().trim()) : $(".project_next_name").html(""),
            "/video//" == $(".project_video_wrapper video").attr("src") ? ($(".project_video_wrapper video").hide(),
            $(".mejs__fill-container").hide(),
            $(".project_video_wrapper").css("background", 'url("' + $(".project_video_wrapper video").attr("poster") + '")')) : ($(".project_video_wrapper video").show(),
            $(".mejs__fill-container").show(),
            $(".project_video_wrapper>video").mediaelementplayer({
                stretching: "fill",
                features: ["current", "progress"],
                success: function(e, t) {}
            })),
            780 < $(window).width() ? ($.fn.fullpage.setAllowScrolling(!1),
            $.fn.fullpage.setKeyboardScrolling(!1),
            "/video//" == $(".projects_wrapper>div.current").attr("data-video") && $(".project_wrapper_big video").get(0).play(),
            $(".projects_control").removeClass("fadeOut animated fadeIn fadeOut").addClass("animated fadeOut"),
            $(".right_menu").removeClass("animated fadeIn fadeOut").addClass("animated fadeOut").css("z-index", "-1"),
            $(".scroll_control_down").removeClass("animated fadeIn fadeOut").addClass("animated fadeOut"),
            $(".first_current_project .subheader>*").removeClass("fadeIn animated fadeOut ").addClass("fadeOut animated"),
            $(".first_current_project .current_project_title .animation_item ,.first_current_project .current_project_short_description ").removeClass("fadeInUp animated slideOutUp fadeOutUp ").addClass("fadeOutUp animated"),
            $(".current_project_short_description,.first_current_project_button").removeClass("fadeInUp animated slideOutUp fadeOutUp ").addClass("fadeOutUp animated"),
            $(".second_current_project .current_project_image").animate({
                width: "0"
            }, 500).promise().done(function() {}),
            setTimeout(function() {
                $(".first_image_back").addClass("active"),
                setTimeout(function() {
                    780 < $(window).width() ? ($(".project_wrapper_big").fadeIn(),
                    splitText($(".project_content_header")),
                    splitTextNext($(".project_next_name")),
                    "/video//" == $(".projects_wrapper>div.current").attr("data-video") || $(".project_wrapper_big video").get(0).play(),
                    $(".current_projects_wrapper").css("z-index", "-1")) : $(".project_wrapper_big").show(),
                    $(".second_current_project .current_project_image").animate({
                        width: "16.66vw"
                    }, 0),
                    $(".current_projects_wrapper").hide(),
                    setTimeout(function() {
                        $(".first_image_back").removeClass("active")
                    }, 300)
                }, 800)
            }, 500)) : ($.fn.fullpage.setAllowScrolling(!1),
            $.fn.fullpage.setKeyboardScrolling(!1),
            hide4(),
            setTimeout(function() {
                $(".first_image_back").removeClass("active"),
                $(".project_wrapper_big").show(),
                splitText($(".project_content_header")),
                splitTextNext($(".project_next_name"))
            }, 500)),
            setTimeout(function() {
                1 == $(".project_content").css("opacity") && 780 < $(window).width() && $(".project_content .animation_item_wrapper>*").removeClass("animated fadeInUp fadeOutUp").addClass("animated fadeInUp")
            }, 500),
            setTimeout(function() {
                780 < $(window).width() || $(".project_content .animation_item_wrapper>*").removeClass("animated fadeInUp fadeOutUp").addClass("animated fadeInUp")
            }, 500)
        }),
        780 < $(window).width() || ($(".section_5_more").click(),
        $("body").removeClass("white_color"),
        setTimeout(function() {
            $(".project_content .close").fadeIn(),
            $("body").removeClass("white_color")
        }, 500))
    }),
    $(".section_5_more").off("click"),
    $(".section_5_more").click(function() {
        $(".project_wrapper_big>.close").fadeOut(),
        780 < $(window).width() ? ($(".project").animate({
            width: "11.6vw"
        }),
        $(".project_video_wrapper").animate({
            width: "11.6vw"
        }, 500).promise().done(function() {
            $("body").addClass("black_color"),
            $("body").removeClass("white_color"),
            $(".project_video_wrapper video").get(0).pause(),
            $(".section_5_more").fadeOut(),
            $(".project_content").css("opacity", "1"),
            $(".project_video_wrapper .mejs__layers , .project_video_wrapper .mejs__controls").hide(),
            $(".project_content .animation_item_wrapper>*").removeClass("animated fadeInUp fadeOutUp").addClass("animated fadeInUp"),
            $(".project_content .close").fadeIn()
        })) : ($(".project").animate({
            width: "0"
        }),
        $(".project_video_wrapper").animate({
            width: "0"
        }, 0).promise().done(function() {
            $("body").addClass("black_color"),
            $("body").removeClass("white_color"),
            $(".project_video_wrapper video").get(0).pause(),
            $(".section_5_more").fadeOut(),
            $(".project_content").css("opacity", "1"),
            $(".project_video_wrapper .mejs__layers, .project_video_wrapper .mejs__controls").hide(),
            setTimeout(function() {}, 500),
            $(".project_content .animation_item_wrapper>*").removeClass("animated fadeInUp fadeOutUp").addClass("animated fadeInUp"),
            $(".project_content .close").fadeIn(),
            $("body").removeClass("white_color")
        }))
    }),
    $(".project_wrapper_big").on("click", ".project_next_name ", function() {
        var e = {
            resources: $(".project_wrapper.next").attr("data-id")
        };
        $(".second_current_project").click(),
        $(".project_next_name .animation_item_wrapper").addClass("arrow_animated"),
        $(".project_content .animation_item_wrapper>*").removeClass("animated fadeInUp fadeOutUp").addClass("fadeOutUp animated"),
        setTimeout(function() {
            $.post("/ajax", e, function(e) {
                $(".project_content").html('<div class="close">' + back + "</div>"),
                $(".project_content").append(e),
                $(".project_next_name").html($(".project_wrapper.next .project_wrapper_title").html().trim()),
                "/video//" == $(".project_video_wrapper video").attr("src") ? ($(".project_video_wrapper video").fadeOut(),
                $(".mejs__fill-container").fadeOut(),
                $(".project_video_wrapper").css("background", 'url("' + $(".project_video_wrapper video").attr("poster") + '")')) : ($(".project_video_wrapper video").fadeIn(),
                $(".mejs__fill-container").fadeIn(),
                $(".project_video_wrapper video").mediaelementplayer({
                    stretching: "fill",
                    features: ["current", "progress"],
                    success: function(e, t) {}
                }))
            }).promise().done(function() {
                splitText($(".project_content_header")),
                splitTextNext($(".project_next_name")),
                $(".project_content").css("opacity", "0"),
                $(".project_content").show(),
                $(".project_content").scrollTop(0),
                $(".project_content").hide(),
                $(".project_content").css("opacity", "1"),
                $(".project_content").show(),
                $(".project_content .animation_item_wrapper>*").addClass("animated fadeInUp")
            })
        }, 500)
    }),
    owl_psb.owlCarousel({
        loop: !0,
        smartSpeed: 500,
        mouseDrag: !1,
        rewind: !1,
        touchDrag: !0,
        responsive: {
            0: {
                items: 2,
                autoWidth: !0
            },
            480: {
                items: 2,
                autoWidth: !0
            },
            768: {
                items: 2,
                autoWidth: !0
            },
            960: {
                autoWidth: !0,
                items: 3
            }
        }
    }),
    owl_psb.on("click", ".owl-item", function(e) {
        var t = $(this);
        n = $(this).attr("data-position"),
        n2 = $(this).index(),
        $(".psb_control_line").width(parseInt(n) / 2 * 100 + "%"),
        e.preventDefault(),
        owl_psb.find(".owl-item>*").removeClass("current_owl"),
        owl_psb.find('.owl-item[data-position="' + n + '"]').children().addClass("current_owl"),
        setTimeout(function() {
            780 < $(window).width() ? owl_psb.trigger("to.owl.carousel", n - 1) : owl_psb.trigger("to.owl.carousel", n)
        }, 500),
        $(".section_2_studio").css("background", 'url("/images/back.PNG")'),
        setTimeout(function() {
            $(".section_2_studio").attr("data-type", t.find(".section_2_studio_slider_item").attr("data-type")),
            setTimeout(function() {
                $(".section_2_studio").css("background", 'url("' + t.find(".section_2_studio_slider_item").attr("data-image") + '")')
            }, 300)
        }, 300),
        0 < t.find(".section_2_studio_slider_p").length ? (t.find(".section_2_studio_slider_item"),
        setTimeout(function() {
            $(".section_2_psb_item_p").show(),
            $(".section_2_psb_item_p .animation_item_wrapper >*").addClass("animated fadeInUp")
        }, 500)) : ($(".section_2_psb_item_p .animation_item_wrapper >*").addClass("animated fadeOutUp"),
        setTimeout(function() {
            $(".section_2_psb_item_p .animation_item_wrapper >*").removeClass("animated fadeOutUp fadeInUp"),
            $(".section_2_psb_item_p").hide()
        }, 500)),
        0 < t.find(".section_2_studio_slider_s").length ? setTimeout(function() {
            $(".section_2_psb_item_s").show(),
            $(".section_2_psb_item_s .animation_item_wrapper>div").addClass("animated fadeInUp")
        }, 500) : ($(".section_2_psb_item_s .animation_item_wrapper>div").addClass("animated fadeOutUp"),
        setTimeout(function() {
            $(".section_2_psb_item_s .animation_item_wrapper>div").removeClass("animated fadeOutUp fadeInUp"),
            $(".section_2_psb_item_s").hide()
        }, 500)),
        0 < t.find(".section_2_studio_slider_b").length ? ($(".scroll_control_beauty").fadeIn(),
        $(".right_menu_psb").fadeIn(),
        setTimeout(function() {
            $(".section_2_psb_item_b").show(),
            $(".section_2_psb_item_b_image").animate({
                width: "33vw"
            }, 500)
        }, 500)) : ($(".scroll_control_beauty").fadeOut(),
        $(".right_menu_psb").fadeOut(),
        $(".section_2_psb_item_b_image").animate({
            width: "0"
        }, 500),
        setTimeout(function() {
            $(".section_2_psb_item_b").hide()
        }, 500))
    }),
    owl_cec.owlCarousel({
        loop: !0,
        smartSpeed: 500,
        rewind: !1,
        mouseDrag: !1,
        touchDrag: !0,
        responsive: {
            0: {
                items: 2,
                autoWidth: !0
            },
            480: {
                items: 2,
                autoWidth: !0
            },
            768: {
                items: 3,
                autoWidth: !0
            },
            960: {
                items: 3,
                autoWidth: !0
            }
        }
    }),
    owl_cec_main.owlCarousel({
        loop: !0,
        smartSpeed: 500,
        rewind: !1,
        mouseDrag: !1,
        touchDrag: !0,
        responsive: {
            0: {
                items: 6,
                autoWidth: !0
            },
            480: {
                items: 6,
                autoWidth: !0
            },
            768: {
                items: 6,
                autoWidth: !0
            },
            960: {
                items: 6,
                autoWidth: !0
            }
        }
    }),
    owl_team.owlCarousel({
        loop: !0,
        smartSpeed: 500,
        mouseDrag: !1,
        touchDrag: !1,
        autoWidth: !0,
        margin: 0,
        checkVisibility: !0,
        rewind: !0,
        responsive: {
            0: {
                items: 2
            },
            480: {},
            768: {
                items: 25
            },
            960: {}
        }
    }),
    owl_cec.on("click", ".owl-item", function(e) {
        $(".section_3_projects_items").show();
        var t = $(this);
        n = $(this).attr("data-position"),
        n2 = $(this).index(),
        $(".section_3_projects_items video").each(function() {
            $(this).get(0).pause()
        }),
        e.preventDefault(),
        owl_cec.find(".owl-item>*").removeClass("current_owl"),
        owl_cec.find('.owl-item[data-position="' + n + '"]').children().addClass("current_owl"),
        setTimeout(function() {
            780 < $(window).width() ? $(".section_3_projects").is(":visible") ? owl_cec.trigger("to.owl.carousel", [n - 1]) : owl_cec.trigger("to.owl.carousel", [n - 1, 0]) : $(".section_3_projects").is(":visible") ? owl_cec.trigger("to.owl.carousel", [n]) : owl_cec.trigger("to.owl.carousel", [n, 0])
        }, 500),
        0 < t.find(".section_3_projects_slider_cg").length ? setTimeout(function() {
            $(".section_3_projects_item_cg").show(),
            $(".section_3_projects_item_cg .animation_item").addClass("animated fadeInUp")
        }, $(".section_3_projects").is(":visible") ? 500 : 0) : ($(".section_3_projects_item_cg .animation_item").addClass("animated fadeOutDown"),
        setTimeout(function() {
            $(".section_3_projects_item_cg .animation_item").removeClass("animated fadeOutUp fadeInUp fadeOutDown"),
            $(".section_3_projects_item_cg").hide()
        }, $(".section_3_projects").is(":visible") ? 500 : 0)),
        0 < t.find(".section_3_projects_slider_e").length ? setTimeout(function() {
            $(".section_3_projects_item_e").fadeIn(),
            $(".section_3_projects_item_e .animation_item").addClass("animated fadeInUp")
        }, $(".section_3_projects").is(":visible") ? 500 : 0) : ($(".section_3_projects_item_e .animation_item").addClass("animated fadeOutDown"),
        setTimeout(function() {
            $(".section_3_projects_item_e .animation_item").removeClass("animated fadeOutUp fadeInUp fadeOutDown"),
            $(".section_3_projects_item_e").hide()
        }, $(".section_3_projects").is(":visible") ? 500 : 0)),
        0 < t.find(".section_3_projects_slider_c").length ? setTimeout(function() {
            $(".section_3_projects_item_c .animation_item").addClass("animated fadeInUp"),
            $(".section_3_projects_item_c").show()
        }, $(".section_3_projects").is(":visible") ? 500 : 0) : ($(".section_3_projects_item_c .animation_item").addClass("animated fadeOutDown"),
        setTimeout(function() {
            $(".section_3_projects_item_c .animation_item").removeClass("animated fadeOutUp fadeInUp fadeOutDown"),
            $(".section_3_projects_item_c").hide()
        }, $(".section_3_projects").is(":visible") ? 500 : 0))
    }),
    owl_cec_main.on("click", ".owl-item", function(e) {
        $(".section_3_main_items").show();
        var t = $(this);
        n = $(this).attr("data-position"),
        n2 = $(this).index(),
        e.preventDefault(),
        owl_cec_main.find(".owl-item>*").removeClass("current_owl"),
        owl_cec_main.find('.owl-item[data-position="' + (parseInt(n) + 3) + '"]').children().addClass("current_owl"),
        owl_cec_main.find('.owl-item[data-position="' + (parseInt(n) - 3) + '"]').children().addClass("current_owl"),
        owl_cec_main.find('.owl-item[data-position="' + (parseInt(n) + 6) + '"]').children().addClass("current_owl"),
        owl_cec_main.find('.owl-item[data-position="' + (parseInt(n) - 6) + '"]').children().addClass("current_owl"),
        owl_cec_main.find('.owl-item[data-position="' + (parseInt(n) - 9) + '"]').children().addClass("current_owl"),
        owl_cec_main.find('.owl-item[data-position="' + (parseInt(n) + 9) + '"]').children().addClass("current_owl"),
        owl_cec_main.find('.owl-item[data-position="' + n + '"]').children().addClass("current_owl"),
        setTimeout(function() {
            1023 < $(window).width() ? owl_cec_main.trigger("to.owl.carousel", n) : owl_cec_main.trigger("to.owl.carousel", [n])
        }, 500),
        0 < t.find(".section_3_main_slider_cg").length ? setTimeout(function() {
            $(".section_3_main_item_cg").show(),
            $(".section_3_main_item_cg .animation_item").addClass("animated fadeInUp"),
            // $(".section_3 video").not(".section_3_projects_items_video_wrapper video").hide().trigger("pause"),
            $(".section_3 video").not(".section_3_projects_items_video_wrapper video").removeClass("fadeIn").addClass("fadeOut to-be-animated").trigger("pause"),
            // $(".section_3_video_1").show().trigger("play")
            $(".section_3_video_1").removeClass("fadeOut to-be-animated").addClass("animated fadeIn").trigger("play")
        }, $(".section_3_main_slider ").is(":visible") ? 500 : 0) : ($(".section_3_main_item_cg .animation_item").addClass("animated fadeOutDown"),
        setTimeout(function() {
            $(".section_3_main_item_cg .animation_item").removeClass("animated fadeOutUp fadeInUp fadeOutDown"),
            $(".section_3_main_item_cg").hide()
        }, $(".section_3_main_slider ").is(":visible") ? 500 : 0)),
        0 < t.find(".section_3_main_slider_e").length ? setTimeout(function() {
            $(".section_3_main_item_e").fadeIn(),
            $(".section_3_main_item_e .animation_item").addClass("animated fadeInUp"),
            // $(".section_3 video").not(".section_3_projects_items_video_wrapper video").hide().trigger("pause"),
            $(".section_3 video").not(".section_3_projects_items_video_wrapper video").removeClass("fadeIn").addClass("fadeOut to-be-animated").trigger("pause"),
            // $(".section_3_video_2").show().trigger("play")
            $(".section_3_video_2").removeClass("fadeOut to-be-animated").addClass("animated fadeIn").trigger("play")
        }, $(".section_3_main_slider ").is(":visible") ? 500 : 0) : ($(".section_3_main_item_e .animation_item").addClass("animated fadeOutDown"),
        setTimeout(function() {
            $(".section_3_main_item_e .animation_item").removeClass("animated fadeOutUp fadeInUp fadeOutDown"),
            $(".section_3_main_item_e").hide()
        }, $(".section_3_main_slider ").is(":visible") ? 500 : 0)),
        0 < t.find(".section_3_main_slider_c").length ? setTimeout(function() {
            $(".section_3_main_item_c .animation_item").addClass("animated fadeInUp"),
            $(".section_3_main_item_c").show(),
            // $(".section_3 video").not(".section_3_projects_items_video_wrapper video").hide().trigger("pause"),
            $(".section_3 video").not(".section_3_projects_items_video_wrapper video").removeClass("fadeIn").addClass("fadeOut to-be-animated").trigger("pause"),
            // $(".section_3_video_3").show().trigger("play")
            $(".section_3_video_3").removeClass("fadeOut to-be-animated").addClass("animated fadeIn").trigger("play")
        }, $(".section_3_main_slider ").is(":visible") ? 500 : 0) : ($(".section_3_main_item_c .animation_item").addClass("animated fadeOutDown"),
        setTimeout(function() {
            $(".section_3_main_item_c .animation_item").removeClass("animated fadeOutUp fadeInUp fadeOutDown"),
            $(".section_3_main_item_c").hide()
        }, $(".section_3_main_slider ").is(":visible") ? 500 : 0))
    }),
    $(".team_do").click(function() {
        owl_team.find(".active").find(".current_owl").parent(".owl-item").click()
    }),
    owl_team.on("click", ".owl-item", function(e) {
        var t = $(this);
        if ($(".team_control_current").html(parseInt(t.attr("data-position")) + 1),
        e.preventDefault(),
        !t.hasClass("animation") && 0 < owl_team.find(".animation").length)
            return e.originalEvent || 1 == team_animation || (team_animation = !0,
            owl_team.find(".active").find(".team_slider_item.current_owl").addClass("animated fadeOutUp"),
            $(".team_cred .animation_item").removeClass("animated fadeInUp fadeOutUp").addClass("animated fadeOutUp"),
            $(".section_2_team_item").fadeOut(),
            owl_team.find(".owl-item").removeClass("animation"),
            setTimeout(function() {
                n = t.attr("data-position"),
                n2 = t.index(),
                owl_team.trigger("to.owl.carousel", n),
                $(".team_control_line").width(parseInt(n) / (team_qty - 1) * 100 + "%"),
                $(".team_control_drag").animate({
                    left: $(".team_control_lines").width() * parseInt(n) / (team_qty - 1)
                }, 400),
                $(".team_slider .owl-item").children("div").not(".current_owl").removeClass("animated fadeInUp fadeOutUp").addClass("animated fadeOutUp"),
                owl_team.find(".owl-item>*").removeClass("current_owl"),
                setTimeout(function() {
                    $(".section_2_team_items ").attr("data-name", t.find(".team_slider_item").attr("data-class")),
                    owl_team.find("svg").removeClass("current_owl"),
                    owl_team.find(".active").first().children("div").addClass("current_owl"),
                    owl_team.find(".active").first().find(".team_slider_item.current_owl").removeClass("animated fadeInUp fadeOutUp").addClass("animated fadeInUp"),
                    $(".team_name .animation_item").html(t.children("div").attr("data-name")),
                    $(".team_place .animation_item").html(t.children("div").attr("data-place")),
                    $(".team_text .animation_item").html(t.children("div").attr("data-text")),
                    $(".section_2_team_item_" + t.children("div").attr("data-class")).fadeIn(),
                    $(".team_cred .animation_item").removeClass("animated fadeInUp fadeOutUp").addClass("animated fadeInUp"),
                    owl_team.find(".active").first().addClass("animation"),
                    team_animation = !1
                }, 500)
            }, 700)),
            !1;
        if (1 == team_animation)
            return !1;
        t.children("div").hasClass("current_owl") ? ($(".section_2_team_items ").attr("data-name", t.find(".team_slider_item").attr("data-class")),
        t.addClass("animation"),
        $(".section_2_team_items").css("z-index", "1"),
        $(".team_do .animation_item").removeClass("animated fadeInUp fadeOutUp").addClass("animated fadeOutUp"),
        $(".section_2_team_items").addClass("scaled"),
        $(".team_slider .owl-item").children("div").not(".current_owl").removeClass("animated fadeInUp fadeOutUp").addClass("animated fadeOutUp"),
        setTimeout(function() {
            $(".team_do").hide(),
            $(".team_cred").show(),
            $(".team_name .animation_item").html(t.children("div").attr("data-name")),
            $(".team_place .animation_item").html(t.children("div").attr("data-place")),
            $(".team_text .animation_item").html(t.children("div").attr("data-text")),
            $(".team_cred .animation_item").removeClass("animated fadeInUp fadeOutUp").addClass("animated fadeInUp")
        }, 500)) : ($(".team_cred .animation_item").removeClass("animated fadeInUp fadeOutUp").addClass("animated fadeOutUp"),
        $(".team_name .animation_item").html(t.children("div").attr("data-name")),
        $(".team_place .animation_item").html(t.children("div").attr("data-place")),
        $(".team_text .animation_item").html(t.children("div").attr("data-text")),
        $(".section_2_team_item").fadeOut().promise().done(function() {
            $(".section_2_team_item_" + t.children("div").attr("data-class")).fadeIn()
        }),
        setTimeout(function() {
            $(".team_do").show(),
            $(".team_cred").hide(),
            $(".team_do .animation_item").removeClass("animated fadeOutUp fadeInUp").addClass("animated fadeInUp")
        }, 500));
        owl_team.children().children().children("div").length;
        n = t.attr("data-position"),
        n2 = t.index(),
        $(".team_control_line").width(parseInt(n) / (team_qty - 1) * 100 + "%"),
        $(".team_control_drag").animate({
            left: $(".team_control_lines").width() * parseInt(n) / (team_qty - 1)
        }, 400),
        owl_team.find(".owl-item>*").removeClass("current_owl"),
        owl_team.find("svg").removeClass("current_owl"),
        t.children("div").addClass("current_owl"),
        t.hasClass("animation") || setTimeout(function() {
            $(window).width(),
            owl_team.trigger("to.owl.carousel", n)
        }, 500),
        0 < t.find(".section_3_projects_slider_cg").length ? setTimeout(function() {
            $(".section_3_projects_item_cg").show(),
            $(".section_3_projects_item_cg .animation_item").addClass("animated fadeInUp")
        }, 500) : ($(".section_3_projects_item_cg .animation_item").addClass("animated fadeOutDown"),
        setTimeout(function() {
            $(".section_3_projects_item_cg .animation_item").removeClass("animated fadeOutUp fadeInUp fadeOutDown"),
            $(".section_3_projects_item_cg").hide()
        }, 500)),
        0 < t.find(".section_3_projects_slider_e").length ? setTimeout(function() {
            $(".section_3_projects_item_e").fadeIn(),
            $(".section_3_projects_item_e .animation_item").addClass("animated fadeInUp")
        }, 500) : ($(".section_3_projects_item_e .animation_item").addClass("animated fadeOutDown"),
        setTimeout(function() {
            $(".section_3_projects_item_e .animation_item").removeClass("animated fadeOutUp fadeInUp fadeOutDown"),
            $(".section_3_projects_item_e").hide()
        }, 500)),
        0 < t.find(".section_3_projects_slider_c").length ? setTimeout(function() {
            $(".section_3_projects_item_c .animation_item").addClass("animated fadeInUp"),
            $(".section_3_projects_item_c").show()
        }, 500) : ($(".section_3_projects_item_c .animation_item").addClass("animated fadeOutDown"),
        setTimeout(function() {
            $(".section_3_projects_item_c .animation_item").removeClass("animated fadeOutUp fadeInUp fadeOutDown"),
            $(".section_3_projects_item_c").hide()
        }, 500))
    }),
    owl_team.children().children().children().each(function(e) {
        $(this).attr("data-position", e)
    }),
    owl_cec.children().children().children().each(function(e) {
        $(this).attr("data-position", e)
    }),
    owl_cec_main.children().children().children().each(function(e) {
        $(this).attr("data-position", e)
    }),
    owl_psb.children().children().children().each(function(e) {
        $(this).attr("data-position", e)
    }),
    owl_cec.on("translate.owl.carousel", function(e) {
        $(window).width() < 780 ? owl_cec.find(".owl-item").eq(e.item.index).click() : owl_cec.find(".owl-item").eq(e.item.index + 1).click()
    }),
    owl_cec_main.on("translate.owl.carousel", function(e) {
        $(window).width(),
        owl_cec_main.find(".owl-item").eq(e.item.index).click()
    }),
    owl_psb.on("translate.owl.carousel", function(e) {
        $(window).width() < 780 ? owl_psb.find(".owl-item").eq(e.item.index).click() : owl_psb.find(".owl-item").eq(e.item.index + 1).click()
    }),
    owl_team.on("translate.owl.carousel", function(e) {}),
    $(".scroll_control_down").click(function() {
        $(this).hasClass("fadeOut") || $.fn.fullpage.moveSectionDown()
    }),
    $(".scroll_control_up").click(function() {
        $.fn.fullpage.moveTo(1)
    }),
    $(".current_video a").mouseover(function() {
        current_video || (current_video = !0,
        $(".current_video_line").css("float", "right"),
        $(".current_video_line").animate({
            width: "0"
        }, 300).promise().done(function() {
            $(".current_video_line").css("float", "left"),
            $(".current_video_line").animate({
                width: "100%"
            }, 300).promise().done(function() {
                current_video = !1
            })
        }))
    }),
    $(".section_5_email ").mouseover(function() {
        email_line || (email_line = !0,
        $(".email_line").css("float", "right"),
        $(".email_line").animate({
            width: "0"
        }, 300).promise().done(function() {
            $(".email_line").css("float", "left"),
            $(".email_line").animate({
                width: "100%"
            }, 300).promise().done(function() {
                email_line = !1
            })
        }))
    }),
    $(".section_2_brands").scroll(function() {
        $(".brand_item").each(function(e) {
            var t = $(this);
            $(this).offset().top < $(".section_2_brands").scrollTop() + $(".section_2_vacancies_header").height() + $(window).height() / 5 && setTimeout(function() {
                t.animate({
                    opacity: "1"
                }, 700)
            }, 300)
        })
    }),
    $(".section_2_studio").scroll(function() {
        var a = $(this);
        0 < a.scrollTop() ? a.addClass("transition_background") : a.removeClass("transition_background"),
        $(".section_2_psb_item_b_image").each(function(e) {
            var t = $(this)
              , i = t.offset().top + t.height();
            a.scrollTop(),
            $(window).height();
            if ($(window).height() / 2 < i)
                return $(".right_menu_psb li").removeClass("active"),
                $(".right_menu_psb a[data-section=" + t.index() + "]").closest("li").addClass("active"),
                !1
        })
    }),
    $(".right_menu_psb").on("click", "a", function() {
        var e = $(this)
          , t = $(".section_2_studio_slider").closest("div").height();
        $(".section_2_studio").animate({
            scrollTop: $(".section_2_psb_item_b_image").eq(e.attr("data-section")).position().top + t
        }, 300)
    }),
    $(".logo").click(function() {
        $.fn.fullpage.moveTo(1)
    }),
    $(".first_current_project .current_project_image").css("left", "11.1111vw").css("right", "unset"),
    $(".section_1_content_right_button").click(function() {
        $(".right_menu").removeClass("animated fadeIn fadeOut").addClass("animated fadeOut").css("z-index", "-1"),
        $(".scroll_control_down").removeClass("animated fadeIn fadeOut").addClass("animated fadeOut"),
        $(".showreel").fadeIn(),
        $(".burger").fadeOut(),
        $(".main_menu").css({
            opacity: 1,
            display: "none"
        }).animate({
            opacity: 0
        }, 1e3),
        $(".change_language_wrapper").css({
            opacity: 1,
            display: "none"
        }).animate({
            opacity: 0
        }, 1e3),
        $(".current_video").fadeOut(),
        $(".showreel video").get(0).play()
    }),
    $(".current_projects_wrapper").swipe({
        swipeStatus: function(e, t, i, a, n, s, o, r) {
            "end" == t && ("left" == i && $(".projects_control_right").click(),
            "right" == i && $(".projects_control_left").click())
        },
        triggerOnTouchEnd: !1,
        threshold: 20
    }),
    $(".section_2_team_inner").swipe({
        swipeStatus: function(e, t, i, a, n, s, o, r) {
            "end" == t && ("left" == i && $(".team_control_right").click(),
            "right" == i && $(".team_control_left").click())
        },
        triggerOnTouchEnd: !1,
        threshold: 20
    }),
    $(".section_3_projects_items").swipe({
        swipeStatus: function(e, t, i, a, n, s, o, r) {
            "end" == t && ("left" == i && ($(".section_3_projects_slider .owl-item.active .current_owl").closest(".owl-item").next().click(),
            exitfull()),
            "right" == i && ($(".section_3_projects_slider .owl-item.active .current_owl").closest(".owl-item").prev().click(),
            exitfull()))
        },
        triggerOnTouchEnd: !1,
        allowPageScroll: "vertical",
        threshold: 20
    }),
    $(".filter_year,.filter_category").on("click", "figure", function(e) {
        var t = $(this)
          , i = t.parents(".drum-wrapper").siblings("select")
          , a = t.index();
        if (780 < $(window).width() && !t.hasClass("active")) {
            i.data("drum").setIndex(a),
            t.parent().find("figure").removeClass("active"),
            t.addClass("active");
            $('.filter_year select option[value="' + $(".filter_year").find("figure.active").html().trim() + '"]').length && $('.filter_year select option[value="' + $(".filter_year").find("figure.active").html().trim() + '"]').val();
            var n = {
                tvFilters: "category==%" + ($('.filter_category select option[value="' + $(".filter_category").find("figure.active").html().trim() + '"]').length ? $('.filter_category select option[value="' + $(".filter_category").find("figure.active").html().trim() + '"]').val() : "") + "%"
            };
            $.post("projects-ajax", n, function(e) {
                $(".projects_wrapper").html(e),
                project_index = 0,
                project_index_next = 1,
                project_qty = $(".projects_wrapper>div").length,
                $(".projects_control_max").html(project_qty),
                $(".projects_wrapper>div").removeClass("current next"),
                0 < $(".projects_wrapper>div").eq(project_index_next).length ? $(".projects_wrapper>div").eq(project_index_next).addClass("next") : $(".projects_wrapper>div").eq(project_index).addClass("next"),
                $(".projects_wrapper>div").eq(project_index).addClass("current"),
                $(".project_video_wrapper video").fadeOut().promise().done(function() {
                    $(".project_video_wrapper video").attr("src", $(".projects_wrapper>div.current").attr("data-video")),
                    $(".project_video_wrapper video").attr("poster", $(".projects_wrapper>div.current").attr("data-poster")),
                    "/video//" == $(".projects_wrapper>div.current").attr("data-video") ? $(".project_video_wrapper video").addClass("photo") : $(".project_video_wrapper video").removeClass("photo"),
                    $(".project_video_wrapper video").fadeIn()
                }),
                $(".first_current_project").attr("data-project", project_index),
                $(".projects_control_current").html(project_index + 1),
                $(".projects_control_line").width(project_index / (project_qty - 1) * 100 + "%"),
                $(".first_current_project").attr("data-id", $(".projects_wrapper>div").eq(project_index).attr("data-id")),
                $(".first_current_project .current_project_image").animate({
                    width: "0"
                }, 500).promise().done(function() {
                    $(".first_current_project .current_project_image_img, .first_image_back").css("background", 'url("' + $(".projects_wrapper>div").eq(project_index).find("img").attr("src") + '")'),
                    $(".first_current_project .current_project_image").animate({
                        width: !(780 < $(window).width()) || 960 < $(window).height() ? "100%" : "44.444vw"
                    }, 500)
                }),
                $(".second_current_project .current_project_image").animate({
                    width: "0"
                }, 500).promise().done(function() {
                    0 < $(".projects_wrapper>div").eq(project_index_next).length ? $(".second_current_project .current_project_image_img").css("background", 'url("' + $(".projects_wrapper>div").eq(project_index_next).find("img").attr("src") + '")') : $(".second_current_project .current_project_image_img").css("background", 'url("' + $(".projects_wrapper>div").eq(project_index).find("img").attr("src") + '")'),
                    $(".second_current_project .current_project_image").animate({
                        width: "16.666vw"
                    }, 500)
                }),
                splitText($(".current_project_title")),
                $(".current_project_title .animation_item").addClass("fadeOutUp animated"),
                setTimeout(function() {
                    $(".current_project_title").html($(".projects_wrapper>div").eq(project_index).find(".project_wrapper_title").html()),
                    splitText($(".current_project_title")),
                    $(".current_project_title .animation_item").removeClass("animated fadeOutUp"),
                    $(".current_project_title .animation_item").addClass("fadeInUp animated")
                }, 500),
                $(".current_project_short_description ").addClass("fadeOutUp"),
                setTimeout(function() {
                    $(".current_project_short_description ").html($(".projects_wrapper>div").eq(project_index).find(".project_wrapper_short_description").html()).removeClass("animated fadeOutUp").addClass("fadeInUp animated")
                }, 500)
            })
        }
    }),
    $(".open_filters").on("touchstart", function() {
        var e = $(this)
          , t = e.find("figure.active").html().trim();
        if (e.trigger("mouseleave"),
        $(window).width() < 1281) {
            if (e.hasClass("open_filters_year"))
                var i = $(".filter_menu_year_wrapper");
            else
                i = $(".filter_menu_category_wrapper");
            i.find(".filter").removeClass("active"),
            0 < i.find('.filter[data-filter="' + t + '"]').length ? i.find('.filter[data-filter="' + t + '"]').addClass("active") : i.find(".filter").first().addClass("active"),
            i.addClass("active")
        }
    }),
    $(".filter_menu_wrapper .close").click(function() {
        $(this).closest(".filter_menu_wrapper").removeClass("active")
    }),
    $(".filter_menu_wrapper .filter").click(function() {
        var e, t = $(this), i = $(".filter_year select").val(), a = $(".filter_category select").val(), n = "", s = t.index();
        $(".filter_menu_wrapper").removeClass("active"),
        t.closest(".filter_menu_wrapper").hasClass("filter_menu_year_wrapper") ? (i = t.attr("data-filter"),
        (n = $(".open_filters_year").find(".drum-wrapper").siblings("select")).data("drum").setIndex(s)) : (a = t.attr("data-filter"),
        (n = $(".open_filters_category").find(".drum-wrapper").siblings("select")).data("drum").setIndex(s)),
        e = {
            tvFilters: "category==%" + a + "%||year==%" + i + "%"
        },
        n.closest(".open_filters").find("figure").removeClass("active"),
        n.closest(".open_filters").find("figure").eq(s).addClass("active"),
        $.post("projects-ajax", e, function(e) {
            $(".projects_wrapper").html(e),
            project_index = 0,
            project_index_next = 1,
            project_qty = $(".projects_wrapper>div").length,
            $(".projects_control_max").html(project_qty),
            $(".projects_wrapper>div").removeClass("current next"),
            $(".projects_wrapper>div").eq(project_index_next).addClass("next"),
            $(".projects_wrapper>div").eq(project_index).addClass("current"),
            $(".project_video_wrapper video").fadeOut().promise().done(function() {
                $(".project_video_wrapper video").attr("src", $(".projects_wrapper>div.current").attr("data-video")),
                $(".project_video_wrapper video").attr("poster", $(".projects_wrapper>div.current").attr("data-poster")),
                "/video//" == $(".projects_wrapper>div.current").attr("data-video") ? $(".project_video_wrapper video").addClass("photo") : $(".project_video_wrapper video").removeClass("photo"),
                $(".project_video_wrapper video").fadeIn()
            }),
            $(".first_current_project").attr("data-project", project_index),
            $(".projects_control_current").html(project_index + 1),
            $(".projects_control_line").width(project_index / (project_qty - 1) * 100 + "%"),
            $(".first_current_project").attr("data-id", $(".projects_wrapper>div").eq(project_index).attr("data-id")),
            $(".first_current_project .current_project_image").animate({
                width: "0"
            }, 500).promise().done(function() {
                $(".first_current_project .current_project_image_img, .first_image_back").css("background", 'url("' + $(".projects_wrapper>div").eq(project_index).find("img").attr("src") + '")'),
                $(".first_current_project .current_project_image").animate({
                    width: !(780 < $(window).width()) || 960 < $(window).height() ? "100%" : "44.444vw"
                }, 500)
            }),
            $(".second_current_project .current_project_image").animate({
                width: "0"
            }, 500).promise().done(function() {
                $(".second_current_project .current_project_image_img").css("background", 'url("' + $(".projects_wrapper>div").eq(project_index_next).find("img").attr("src") + '")'),
                $(".second_current_project .current_project_image").animate({
                    width: "16.666vw"
                }, 500)
            }),
            splitText($(".current_project_title")),
            $(".current_project_title .animation_item").addClass("fadeOutUp animated"),
            setTimeout(function() {
                $(".current_project_title").html($(".projects_wrapper>div").eq(project_index).find(".project_wrapper_title").html()),
                splitText($(".current_project_title")),
                $(".current_project_title .animation_item").removeClass("animated fadeOutUp"),
                $(".current_project_title .animation_item").addClass("fadeInUp animated")
            }, 500),
            $(".current_project_short_description ").addClass("fadeOutUp"),
            setTimeout(function() {
                $(".current_project_short_description ").html($(".projects_wrapper>div").eq(project_index).find(".project_wrapper_short_description").html()).removeClass("animated fadeOutUp").addClass("fadeInUp animated")
            }, 500)
        })
    });
    var i = $(".b_cursor");
    $("body").on("mousemove", function(e) {}),
    $(".section_3_item").mouseenter(function() {
        i.addClass("active open")
    }).mouseleave(function() {
        i.removeClass("active open")
    }),
    $(".first_current_project").mouseenter(function() {
        i.addClass("active open")
    }).mouseleave(function() {
        i.removeClass("active open")
    }),
    $(".presentation").mouseenter(function() {
        i.addClass("active open")
    }).mouseleave(function() {
        i.removeClass("active open")
    }),
    $(".second_current_project").mouseenter(function() {
        i.addClass("active right")
    }).mouseleave(function() {
        i.removeClass("active right")
    }),
    $(".scroll_control_down").mouseenter(function() {
        i.addClass("active bottom")
    }).mouseleave(function() {
        i.removeClass("active bottom")
    }),
    $(".section_2_vacancies").mouseenter(function() {
        $(".section_2_vacancies")[0].scrollHeight > $(".section_2_vacancies").height() && i.addClass("active bottom")
    }).mouseleave(function() {
        i.removeClass("active bottom")
    }),
    $(".scroll_control_up").mouseenter(function() {
        i.addClass("active top")
    }).mouseleave(function() {
        i.removeClass("active top")
    }),
    $(".section_2_studio").on("mousemove", function() {
        var e = $(this);
        e.is(":visible") && e.find(".section_2_studio_slider_item").hasClass("current_owl") && 0 < e.find(".section_2_studio_slider_item.current_owl").find(".section_2_studio_slider_b").length ? i.addClass("active bottom") : i.removeClass("active bottom")
    }).on("mouseleave", function() {
        i.removeClass("active bottom")
    }),
    $(".team_slider ").on("mousemove", ".team_slider_item ", function() {
        $(this).hasClass("current_owl") && i.addClass("active open")
    }).on("mouseleave", ".team_slider_item ", function() {
        i.removeClass("active open")
    }),
    $(".team_do").on("mousemove", function() {
        $(this).is(":visible") ? i.addClass("active open") : i.removeClass("active open")
    }).on("mouseleave", function() {
        i.removeClass("active open")
    }),
    $(".social").on("mousemove", function() {
        $(this).is(":visible") ? i.addClass("active open") : i.removeClass("active open")
    }).on("mouseleave", function() {
        i.removeClass("active open")
    }),
    $(".project_video_wrapper").on("mousemove", function() {
        $(this).width() < $(window).width() / 3 ? i.addClass("active left") : i.removeClass("active left")
    }).on("mouseleave", function() {
        i.removeClass("active left")
    }),
    $(".project_video_wrapper").on("click", function() {
        $(this).width() < $(window).width() / 3 && $(".project_content>.close").click()
    }),
    $(".section_3_video_wrapper").on("mousemove", function() {
        $(this).width() < $(window).width() / 3 ? i.addClass("active left") : i.removeClass("active left")
    }).on("mouseleave", function() {
        i.removeClass("active left")
    }),
    $(".section_3_video_wrapper").on("click", function() {
        $(this).width() < $(window).width() / 3 && $(".section_3_projects>.close").click()
    }),
    $(".showreel>video").mediaelementplayer({
        stretching: "fill",
        features: ["current", "progress"],
        success: function(e, t) {
            e.addEventListener("ended", function(e) {
                $.fn.fullpage.moveTo(2)
            }, !1)
        }
    }),
    $(".filter_year select").drum({
        panelCount: 80
    }),
    $(".filter_category select").drum({
        panelCount: 80
    }),
    $(".drum figure:nth-child(1)").addClass("active"),
    $(".open_filters").on("mouseenter", function() {
        $(this).find("select").drum("setIndex", 0)
    }).on("mouseleave", function(e) {
        var t = $(this);
        t.find("select").drum("setIndex", t.find("figure.active").index())
    }),
    $(".right_menu li").on("mouseenter", function() {
        var e = $(this);
        e.parent().find("li").not(e, ".active").addClass("faded"),
        e.addClass("faded_in")
    }).on("mouseleave", function() {
        var e = $(this);
        e.parent().find("li").not(e, ".active").removeClass("faded"),
        e.removeClass("faded_in")
    }),
    $(".section_4").on("mousemove", function(e) {
        0 == $(event.target).closest(".open_filters").length && $(".open_filters").trigger("mouseleave")
    }),
    $(".burger").click(function() {
        $(".mobile_menu_wrapper").addClass("active")
    }),
    $(".mobile_menu_wrapper .close").click(function() {
        $(".mobile_menu_wrapper").removeClass("active")
    }),
    $('.mobile_menu_item[data-section="1"]').click(function() {
        $(".close").click(),
        $(".mobile_menu_wrapper .close").click(),
        setTimeout(function() {
            $.fn.fullpage.moveTo(1)
        }, 500)
    }),
    $('.mobile_menu_item[data-section="2"]').click(function() {
        $(window).width(),
        0 == $('.mobile_menu_item_hidden[data-section="2"]').height() ? $('.mobile_menu_item_hidden[data-section="2"]').animate({
            "max-height": "200px",
            "margin-bottom": "20px",
            "margin-top": "20px"
        }, 300) : $('.mobile_menu_item_hidden[data-section="2"]').animate({
            "max-height": "0",
            "margin-bottom": "0",
            "margin-top": "0"
        }, 300)
    }),
    $('.mobile_menu_item_hidden[data-section="2"] .mobile_menu_subitem[data-subsection="1"]').click(function() {
        $(".close").click(),
        $(".section_2_team .close").click(),
        $(".mobile_menu_wrapper .close").click(),
        setTimeout(function() {
            $.fn.fullpage.moveTo(2),
            $('.section_2_text strong[data-link="1"]').click(),
            $(".presentation_wrapper .presentationss").removeClass("animated fadeInUp fadeOutUp fadeOutDown fadeInDown").addClass("animated fadeOutUp ")
        }, 500)
    }),
    $('.mobile_menu_item_hidden[data-section="2"] .mobile_menu_subitem[data-subsection="2"]').click(function() {
        $(".close").click(),
        $(".mobile_menu_wrapper .close").click(),
        setTimeout(function() {
            $.fn.fullpage.moveTo(2),
            $('.section_2_text strong[data-link="2"]').click(),
            $(".presentation_wrapper .presentations").removeClass("animated fadeInUp fadeOutUp fadeOutDown fadeInDown").addClass("animated fadeOutUp ")
        }, 500)
    }),
    $('.mobile_menu_item_hidden[data-section="2"] .mobile_menu_subitem[data-subsection="3"]').click(function() {
        $(".close").click(),
        $(".section_2_team .close").click(),
        $(".mobile_menu_wrapper .close").click(),
        setTimeout(function() {
            $.fn.fullpage.moveTo(2),
            $('.section_2_text strong[data-link="3"]').click(),
            $(".presentation_wrapper .presentations").removeClass("animated fadeInUp fadeOutUp fadeOutDown fadeInDown").addClass("animated fadeOutUp ")
        }, 500)
    }),
    $('.mobile_menu_item_hidden[data-section="2"] .mobile_menu_subitem[data-subsection="4"]').click(function() {
        $(".close").click(),
        $(".section_2_team .close").click(),
        $(".mobile_menu_wrapper .close").click(),
        setTimeout(function() {
            $.fn.fullpage.moveTo(2),
            $('.section_2_text strong[data-link="4"]').click(),
            $(".presentation_wrapper  .presentations").removeClass("animated fadeInUp fadeOutUp fadeOutDown fadeInDown").addClass("animated fadeOutUp ")
        }, 500)
    }),
    $('.mobile_menu_item[data-section="3"]').click(function() {
        $(window).width(),
        0 == $('.mobile_menu_item_hidden[data-section="3"]').height() ? $('.mobile_menu_item_hidden[data-section="3"]').animate({
            "max-height": "200px",
            "margin-bottom": "20px",
            "margin-top": "20px"
        }, 300) : $('.mobile_menu_item_hidden[data-section="3"]').animate({
            "max-height": "0",
            "margin-bottom": "0",
            "margin-top": "0"
        }, 300)
    }),
    $('.mobile_menu_item_hidden[data-section="3"] .mobile_menu_subitem[data-subsection="1"]').click(function() {
        $(".mobile_menu_wrapper .close").click(),
        setTimeout(function() {
            $.fn.fullpage.moveTo(3),
            $(".section_3_item_1").click()
        }, 500)
    }),
    $('.mobile_menu_item_hidden[data-section="3"] .mobile_menu_subitem[data-subsection="2"]').click(function() {
        $(".mobile_menu_wrapper .close").click(),
        setTimeout(function() {
            $.fn.fullpage.moveTo(3),
            $(".section_3_item_2").click()
        }, 500)
    }),
    $('.mobile_menu_item_hidden[data-section="3"] .mobile_menu_subitem[data-subsection="3"]').click(function() {
        $(".mobile_menu_wrapper .close").click(),
        setTimeout(function() {
            $.fn.fullpage.moveTo(3),
            $(".section_3_item_3").click()
        }, 500)
    }),
    $('.mobile_menu_item[data-section="4"]').click(function() {
        $(".close").click(),
        $(".mobile_menu_wrapper .close").click(),
        setTimeout(function() {
            $.fn.fullpage.moveTo(4)
        }, 500)
    }),
    $('.mobile_menu_item[data-section="5"]').click(function() {
        $(".close").click(),
        $(".mobile_menu_wrapper .close").click(),
        setTimeout(function() {
            $.fn.fullpage.moveTo(5)
        }, 500)
    }),
    $(".section_1>video").get(0).play(),
    $(window).bind("orientationchange", function(e) {}),
    $(".projects_control_line").width(project_index / (project_qty - 1) * 100 + "%"),
    $(".team_control_line").width(0 / team_qty * 100 + "%"),
    $(".psb_control_line").width("50%");
    for (var e = 0; e < b_items; e++)
        $(".right_menu_psb").append('<li class="' + (0 == e ? "active" : "") + '"><a data-section="' + e + '">' + (e + 1) + "</a></li>");
    owl_team.find(".owl-item").first().click(),
    $(window).width() < 780 && $(".first_current_project .current_project_image").width(0),
    screen.orientation.lock("portrait-primary"),
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4)) ? $("body").addClass("mobile") : $("body").removeClass("mobile"),
    $(".sections>script,.sections>.center").length && $(".sections>script,.sections>.center").remove()
}),
$(".open_filters").on("mousewheel", ".drum-wrapper", function(e) {
    var t = $(this).parent().find("select")
      , i = t.find("option").length;
    return e.originalEvent.wheelDelta < 0 ? t.data("drum").getIndex() < i - 1 && t.data("drum").setIndex(t.data("drum").getIndex() + 1) : 0 < t.data("drum").getIndex() && t.data("drum").setIndex(t.data("drum").getIndex() - 1),
    !1
}),
$.fn.gVideo = function(p) {
    p = $.extend({
        theme: "simpledark",
        childtheme: ""
    }, p);
    return this.each(function() {
        var a = $(this)
          , e = $("<div></div>").addClass("ghinda-video-player").addClass(p.theme).addClass(p.childtheme)
          , t = $('<div class="ghinda-video-controls"><a class="ghinda-video-play" title="Play/Pause"></a><div class="ghinda-video-seek"></div><div class="ghinda-video-timer">00:00</div><div class="ghinda-volume-box"><div class="ghinda-volume-slider"></div><a class="ghinda-volume-button" title="Mute/Unmute"></a></div></div>');
        a.wrap(e),
        a.after(t);
        var i = a.parent(".ghinda-video-player")
          , n = (t = $(".ghinda-video-controls", i),
        $(".ghinda-video-play", i))
          , s = $(".ghinda-video-seek", i)
          , o = $(".ghinda-video-timer", i)
          , r = $(".ghinda-volume-slider", i)
          , _ = $(".ghinda-volume-button", i);
        t.hide();
        function d() {
            0 == a.attr("paused") ? a[0].pause() : a[0].play()
        }
        var c;
        n.click(d),
        a.click(d),
        a.bind("play", function() {
            n.addClass("ghinda-paused-button")
        }),
        a.bind("pause", function() {
            n.removeClass("ghinda-paused-button")
        }),
        a.bind("ended", function() {
            n.removeClass("ghinda-paused-button")
        });
        var m = function() {
            if (a.attr("readyState")) {
                var e = a.attr("duration");
                s.slider({
                    value: 0,
                    step: .01,
                    orientation: "horizontal",
                    range: "min",
                    max: e,
                    animate: !0,
                    slide: function() {
                        c = !0
                    },
                    stop: function(e, t) {
                        c = !1,
                        a.attr("currentTime", t.value)
                    }
                }),
                t.show()
            } else
                setTimeout(m, 150)
        };
        m();
        a.bind("timeupdate", function() {
            var e, t, i = a.attr("currentTime");
            c || s.slider("value", i),
            o.text((e = i,
            (t = Math.floor(e / 60) < 10 ? "0" + Math.floor(e / 60) : Math.floor(e / 60)) + ":" + (Math.floor(e - 60 * t) < 10 ? "0" + Math.floor(e - 60 * t) : Math.floor(e - 60 * t))))
        });
        var l = 1;
        r.slider({
            value: 1,
            orientation: "vertical",
            range: "min",
            max: 1,
            step: .05,
            animate: !0,
            slide: function(e, t) {
                a.attr("muted", !1),
                l = t.value,
                a.attr("volume", t.value)
            }
        });
        _.click(function() {
            1 == a.attr("muted") ? (a.attr("muted", !1),
            r.slider("value", l),
            _.removeClass("ghinda-volume-mute")) : (a.attr("muted", !0),
            r.slider("value", "0"),
            _.addClass("ghinda-volume-mute"))
        }),
        a.removeAttr("controls")
    })
}
,
$(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange", function(e) {
    $(".project_content").scrollTop(content_scroll)
}),
$(".project_content").scroll(function() {
    0 < $(".project_content").scrollTop() && (content_scroll = $(".project_content").scrollTop())
}),
window.addEventListener("orientationchange", function() {
    -90 == window.orientation && $("body").removeClass("orientright orientleft").addClass("orientright"),
    90 == window.orientation && $("body").removeClass("orientright orientleft").addClass("orientleft"),
    0 == window.orientation && $("body").removeClass("orientright orientleft"),
    $.fn.fullpage.reBuild()
}, !0);
