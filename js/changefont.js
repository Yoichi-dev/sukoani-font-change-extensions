$(function () {

    var style = '';
    style += '<style type="text/css" id="StyleId">';
    style += "@font-face { font-family: 'localfont1';src: url('" + chrome.extension.getURL("fonts/851H-kktt_004.ttf") + "');}";
    style += "@font-face { font-family: 'localfont2';src: url('" + chrome.extension.getURL("fonts/CPFont.otf") + "');}";
    style += "@font-face { font-family: 'localfont3';src: url('" + chrome.extension.getURL("fonts/PopRumCute.otf") + "');}";
    style += "@font-face { font-family: 'localfont4';src: url('" + chrome.extension.getURL("fonts/Pigmo-00.otf") + "');}";
    style += "@font-face { font-family: 'localfont5';src: url('" + chrome.extension.getURL("fonts/Pigmo-01.otf") + "');}";
    style += "@font-face { font-family: 'localfont6';src: url('" + chrome.extension.getURL("fonts/cinecaption226.ttf") + "');}";
    style += "@font-face { font-family: 'localfont7';src: url('" + chrome.extension.getURL("fonts/Nyashi.otf") + "');}";
    style += "@font-face { font-family: 'localfont8';src: url('" + chrome.extension.getURL("fonts/04Takibi-Medium.otf") + "');}";
    style += "@font-face { font-family: 'localfont9';src: url('" + chrome.extension.getURL("fonts/AP.ttf") + "');}";
    style += "@font-face { font-family: 'localfont10';src: url('" + chrome.extension.getURL("fonts/gomarice_mukasi_mukasi.ttf") + "');}";
    style += "@font-face { font-family: 'localfont11';src: url('" + chrome.extension.getURL("fonts/mogihaPen.ttf") + "');}";
    style += '</style>';
    $('head').append(style);

    $('#preset_area').after('\
    <div id="font_area" class="more" style="display: none;">\
        <p class="title">フォントサイズ</p>\
        <script>\
        var fontSize = 20;\
        function small() {\
            fontSize -= 1;\
            localStorage.setItem(\'myFontSize\', fontSize);\
            var styles = document.createElement(\'style\');\
            document.head.appendChild(styles);\
            styles.textContent = \'#comment_area .comm {font-size: \' + fontSize + \'px !important;}\';\
            styles.textContent += \'#comment_area .name_comm_box {font-size: \' + fontSize + \'px !important;}\';\
            styles.textContent += \'#f_log_area .gift_num {font-size: \' + fontSize + \'px !important;}\';\
            styles.textContent += \'#f_log_area .name_gift_box {font-size: \' + fontSize + \'px !important;}\';\
            styles.textContent += \'#p_log_area .gift_num {font-size: \' + fontSize + \'px !important;}\';\
            styles.textContent += \'#p_log_area .name_gift_box {font-size: \' + fontSize + \'px !important;}\';\
        }\
        function big() {\
            fontSize += 1;\
            localStorage.setItem(\'myFontSize\', fontSize);\
            var styles = document.createElement(\'style\');\
            document.head.appendChild(styles);\
            styles.textContent = \'#comment_area .comm {font-size: \' + fontSize + \'px !important;}\';\
            styles.textContent += \'#comment_area .name_comm_box {font-size: \' + fontSize + \'px !important;}\';\
            styles.textContent += \'#f_log_area .gift_num {font-size: \' + fontSize + \'px !important;}\';\
            styles.textContent += \'#f_log_area .name_gift_box {font-size: \' + fontSize + \'px !important;}\';\
            styles.textContent += \'#p_log_area .gift_num {font-size: \' + fontSize + \'px !important;}\';\
            styles.textContent += \'#p_log_area .name_gift_box {font-size: \' + fontSize + \'px !important;}\';\
        }\
        </script >\
        <div class="in_box add_list">\
            <button class="changeBtn" name="" onclick="small();">　小さく　</button>\
            <button class="changeBtn" name="" onclick="big();">　大きく　</button>\
            <br>\
            ※使用前に適当なルームに接続してからサイズ変更を行ってください\
        </div>\
        <p class="title">フォント</p>\
        <div class="in_box">\
            <div class="select">\
                <select id="change_font_area_box">\
                    <option value="">初期フォント</option>\
                    <option value="localfont1">851テガキカクット</option>\
                    <option value="localfont2">チェックポイント</option>\
                    <option value="localfont3">ポプらむ☆キュート</option>\
                    <option value="localfont4">ピグモ00</option>\
                    <option value="localfont5">ピグモ01</option>\
                    <option value="localfont6">しねきゃぷしょん</option>\
                    <option value="localfont7">にゃしぃフォント改二</option>\
                    <option value="localfont8">焚火フォント</option>\
                    <option value="localfont9">あんずもじ2020</option>\
                    <option value="localfont10">昔々ふぉんと</option>\
                    <option value="localfont11">モギハ・ペン字フォント</option>\
                    <option value="serif">serif</option>\
                    <option value="monospace">monospace</option>\
                    <option value="HG行書体">HG行書体</option>\
                    <option value="ＭＳ ゴシック">ＭＳ ゴシック</option>\
                    <option value="ＭＳ 明朝">ＭＳ 明朝</option>\
                    <option value="SimSun">SimSun</option>\
                    <option value="HGP行書体">HGP行書体</option>\
                    <option value="HG正楷書体-PRO">HG正楷書体-PRO</option>\
                    <option value="Meiryo">Meiryo</option>\
                    <option value="Meiryo UI">Meiryo UI</option>\
                    <option value="游ゴシック">游ゴシック</option>\
                    <option value="游明朝">游明朝</option>\
                </select>\
            </div>\
        </div>\
        <p class="title">フォントサンプル</p>\
        <div class="in_box add_list">\
            <p>abcdefg hijklmn opqrstu vwxyz</p>\
            <p>ABCDEFG HIJKLMN OPQRSTU VWXYZ</p>\
            <p>0123456789</p>\
            <p>あかさたなはまやらわ</p>\
            <p>アカサタナハマヤラワ</p>\
            <p>零壱弐参肆伍陸漆捌玖拾</p>\
        </div>\
    </div> ')
    $('#preset_area').after('\
    <div id="font_info_area" class="more" style="display: none;">\
        <p class="title">お知らせ</p>\
        <div class="in_box" style="text-align: left;">\
        <p>・ニコニコ動画風コメント表示アプリ<br>　→　<a href="https://niconico-showroom.yoichi.dev/" target="_blank">https://niconico-showroom.yoichi.dev/</a></p>\
        <br>\
        <p>・配信コメント記録アプリ<br>　→　<a href="https://showroom-streaming-surveillance.yoichi.dev/" target="_blank">https://showroom-streaming-surveillance.yoichi.dev/</a></p>\
        <br>\
        <p>・LINE風コメントビューワー（β版）<br>　→　<a href="https://showroom-comment-viewer.yoichi.dev/" target="_blank">https://showroom-comment-viewer.yoichi.dev/</a></p>\
        <br>\
        <p>・SRイベント分析サイト<br>　→　<a href="https://showroom-event-analyzer.yoichi.dev/" target="_blank">https://showroom-event-analyzer.yoichi.dev/</a></p>\
        <br>\
        <br>\
        <p>Create By <a href="https://twitter.com/yoichiro_sub" target="_blank"><u>よーいちろー</u></a></p>\
        </div>\
    </div> ')

    $('.more_select').append('<button class="" type="button" name="font_change_area" id="add_font">フォント</button>')
    $('.more_select').append('<button class="" type="button" name="font_change_area" id="add_font_info">拡張機能のお知らせ</button>')

    $('#add_font').click(function () {
        $('.more_select button').removeClass('on')
        $('#window_area').css('display', 'none')
        $('#sound_setting').css('display', 'none')
        $('#ani_posi').css('display', 'none')
        $('#color_change_area').css('display', 'none')
        $('#font_info_area').css('display', 'none')
        $(this).addClass('on')
        $('#font_area').css('display', 'block')
    })

    $('#add_font_info').click(function () {
        $('.more_select button').removeClass('on')
        $('#window_area').css('display', 'none')
        $('#sound_setting').css('display', 'none')
        $('#ani_posi').css('display', 'none')
        $('#color_change_area').css('display', 'none')
        $('#font_area').css('display', 'none')
        $(this).addClass('on')
        $('#font_info_area').css('display', 'block')
    })

    if (localStorage.getItem("myFont") != null) {
        $('body').css('font-family', localStorage.getItem("myFont"))
        $('#change_font_area_box').val(localStorage.getItem("myFont"))
    }

    if (localStorage.getItem("myFontSize") != null) {
        var mySize = localStorage.getItem("myFontSize")
        var styles = document.createElement('style');
        document.head.appendChild(styles);
        styles.textContent = '#comment_area .comm {font-size: ' + mySize + 'px !important;}';
        styles.textContent += '#comment_area .name_comm_box {font-size: ' + mySize + 'px !important;}';
        styles.textContent += '#f_log_area .gift_num {font-size: ' + mySize + 'px !important;}';
        styles.textContent += '#f_log_area .name_gift_box {font-size: ' + mySize + 'px !important;}';
        styles.textContent += '#p_log_area .gift_num {font-size: ' + mySize + 'px !important;}';
        styles.textContent += '#p_log_area .name_gift_box {font-size: ' + mySize + 'px !important;}';
    }

    $('#change_font_area_box').change(function () {
        $('#sample_font_area_box').css('font-family', $(this).val())
        $('body').css('font-family', $(this).val())
        localStorage.setItem('myFont', $(this).val())
    });

    if ($('#connect_url').val() != '') {
        $.ajax({
            url: 'https://niconico-showroom-api.herokuapp.com/analyze/extensions-' + $('#connect_url').val(),
            type: 'GET'
        })
            .done(function (data) {
                console.log(data);
            })
            .fail(function () {
            });
    }

});
