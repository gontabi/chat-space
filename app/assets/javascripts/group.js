// ユーザーのメンバーを表示
$(function(){
  var menberlist = [];
  function buildUsersHTML(users){
    var html = `<div class="chat-group-user clearfix">
               <p class="chat-group-user__name">${users.name}</p>
               <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${users.id}" data-user-name="${users.name}">追加</a>
               </div>`
    return html;
  }
  function appendNotUser(users){
    var html = `<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${users}</p>
                </div>`
    return html;
  }
  function addUsers(id,name){
    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-22'>
  <input name='group[user_ids][]' type='hidden' value='${id}'>
  <p class='chat-group-user__name'>${name}</p>
  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
</div>`
  return html;
  }
  $(".chat-group-form__input").on("keyup", function(){
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users) {
     $("#user-search-result").empty()
     if (users.length !== 0) {
      users.forEach(function(user){
      var html = buildUsersHTML(user)
        $(`#user-search-result`).append(html)
      })
     }
     else {
      var html = appendNotUser("一致する文字列がありません。")
       $(`#user-search-result`).append(html);
     }
     })
     .fail(function() {
      alert('名前検索に失敗しました');
   })
  });


  $("#user-search-result").on("click",".user-search-add", function(users){
      $(this).parent().remove();
      var id = $(this).data('user-id');
      var name = $(this).data("user-name")
      var html = addUsers(id,name)
   $(`#chat-group-users`).append(html);
  })
// 削除機能追加
  $(document).on("click",".user-search-remove",function(users){
    $(this).parent().remove();
  })
});
