/*
eslint-disable babel/no-invalid-this
*/

!(function() {
  var t = /^(?:submit|button|image|reset|file)$/i,
    n = /^(?:input|select|textarea|keygen)/i
  window.serializeForm = function(e) {
    for (
      var r, o, i, c = '', l = e && e.elements ? e.elements : [], m = (Object.create(null), 0);
      m < l.length;
      m++
    ) {
      var d = l[m]
      if (!d.disabled && d.name && (n.test(d.nodeName) && !t.test(d.type))) {
        var s = d.name,
          p = d.value
        ;(d.type !== 'checkbox' && d.type !== 'radio') || d.checked || (p = void 0),
          p &&
            ((r = c),
            (o = s),
            (i = (i = p).replace(/(\r)?\n/g, '\r\n')),
            (i = (i = encodeURIComponent(i)).replace(/%20/g, '+')),
            (c = r + (r ? '&' : '') + encodeURIComponent(o) + '=' + i))
      }
    }
    return c
  }
})()

document.addEventListener('submit', function(event) {
  var xhr = new XMLHttpRequest()
  var data = window.serializeForm(event.target)

  xhr.open('POST', event.target.action, true)
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        if (xhr.responseText.trim() === 'success') {
          event.target.reset()
          return alert('E-mail byl úspěšně odeslán.')
        }
      }
      return alert('Něco se pokazilo, zkuste to znovu.')
    }
  }

  xhr.send(data)
  event.preventDefault()
})

$(document).ready(function () {
  $("form").submit(function () {
      // Получение ID формы
      var formID = $(this).attr('id');
      // Добавление решётки к имени ID
      var formNm = $('#' + formID);
      $.ajax({
          type: "POST",
          url: 'mail.php',
          data: formNm.serialize(),
          success: function (data) {
              // Вывод текста результата отправки
              $(formNm).html(data); 
          },
          error: function (jqXHR, text, error) {
              // Вывод текста ошибки отправки
              $(formNm).html(error);         
          }
      });
      return false;
  });
});

$('.variable-width').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  autoplaySpeed: 50,
});



