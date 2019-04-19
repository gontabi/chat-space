$(document).on('turbolinks:load', function() {
  function buildHTML(message){
    var image = ""
    message.image.url !== null ? image = `<img src="${message.image.url}" class="lower-message__image">` : image = ""
      var html = `<div class="message" data-id="${ message.id }">
                    <div class = "upper-message">
                      <div class = "upper-message__user-name">
                      ${message.user_name}
                      </div>
                      <div class = "upper-message__date">
                      ${message.created_at}
                      </div>
                    </div>
                    <div class = "lower-message">
                      <p class = "lower-message__content">
                      ${message.content}
                      </p>
                    </div>
                    ${ image }`
                    return html;
  }

  $(function(){
    setInterval(update, 5000)
  });

  function update(){
    if($('.messages')[0]){
      var message_id = $('.message:last').data('id')
    } else {
      var message_id = 0
    }
    var href = window.location.href
    $.ajax({
      url: href,
      type: 'GET',
      data: { id: message_id },
      dataType: 'json',
    })
    .always(function(data){
      $.each(data, function(i, data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.main').animate({
        scrollTop: $('.messages')[0].scrollHeight
      })
      })
    })
  }
});
