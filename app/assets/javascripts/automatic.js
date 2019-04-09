$(function(){
  function buildMessageHTML(message){

    var image = (message.image.url)? `<div class="lower-message">
      <image src = "${ message.image.url}" class ="lower-message__image">
      </div>` : ``;

    var html = `
      <div class="message" data-id = ${message.id}>
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
        ${image}`
        return html;
  }

var updating = function(){
 var message_id = $('.message:last').data('id');
 if(window.location.href.match(/\/groups\/\d+\/messages/)){
 $.ajax({
  url: location.href,
  type: 'GET',
  data:{id:message_id},
  dataType: 'json',
  })
 .done(function(new_messages){
   new_messages.forEach(function(value){
     var html = buildMessageHTML(value);
     $(`.messages`).append(html)
   })
  }
 .fail(function(){
      alert('error');
 })
 }
  setInterval(updating, 5000);
}
