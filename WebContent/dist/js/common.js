document.title = 'SVWebApp, by ZhangShu.';
$(document).on("click", "#openMenu", function() {
		$.openPanel("#menuPanel");
});

$(".title").text("SVWebApp, by ZhangShu.");

$(document).on('click','.create-actions', function () {
    var buttons1 = [
      {
        text: '请选择',
        label: true
      },
      {
        text: '白天模式',
        bold: true,
        color: 'danger',
        onClick: function() {
        	$("body").removeClass("theme-dark");
        }
      },
      {
        text: '夜晚模式',
        onClick: function() {
        	$("body").addClass("theme-dark");
        }
      }
    ];
    var buttons2 = [
      {
        text: '取消',
        bg: 'danger'
      }
    ];
    var groups = [buttons1, buttons2];
    $.actions(groups);
});