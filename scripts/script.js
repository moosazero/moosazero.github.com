function set_menu(menu){
var menu_item = document.getElementsByClassName(menu);
if (menu_item) menu_item[0].parentNode.className += 'selected';
}
