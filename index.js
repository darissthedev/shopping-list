
$(function(){

    $("#js-shopping-list-form").submit(function(evt){
        evt.preventDefault();
        let listItem = $("#shopping-list-entry").val()
        console.log(listItem)

        let template = '<li>
        <span class="shopping-item">apples</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>'

      $("shopping-list").append(template)
    })

})

    $(".shopping-list").on("click", "shopping-item-toggle", function(){
        let title = $(this).parent().sibling();
        title.addClass("shopping-item__checked")
        console.log(title)
    })

    $(".shopping-list").on("click", "shopping-item-delete", function(){
        let listItem = $(this).closet("li")
        listItem.remove()
    })