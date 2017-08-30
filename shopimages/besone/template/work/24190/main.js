function get_main_list(_t_name, _page, _element, _page_html, _row) {
    $.ajax({
        url: '/m/product_list.action.html?r=' + Math.random(),
        type: 'POST',
        dataType: 'json',
        data: {
            action_mode: 'GET_MAIN_PRODUCT_LIST',
            tag_name: _t_name,
            page: _page
        },  
        success: function(res) {

            var dom = $('<div>').html(res.html);
                 if ($('ul.items:only-child', $(_element)).length == 0) {
       $(_element).append($('<ul class="items"></ul>'));
   }
            $('ul.items', _element).append($('ul.items', dom).html());

            if (res.is_page_end == true) {
               $('.' + _page_html).hide();
            } else {
                _page++;
                $('.' + _page_html + ' > a').prop('href', "javascript:get_main_list('"+_t_name+"', " + _page + ", '" + _element + "', '" + _page_html + "', '" + _row + "');");
            }   
            dom = null;    
        }
    }); 
}


$(function() {
    get_main_list('block_special_product', 1, '.MK_block_special_product', 'btn-special_product', '1'); //����� ��ǰ
    get_main_list('block_recmd_product', 1, '.MK_block_recmd_product', 'btn-recmd_product', '1');  //��õ ��ǰ
    get_main_list('block_new_product', 1, '.MK_block_new_product', 'btn-new_product', '1');  //�űԻ�ǰ
    get_main_list('block_add1_product', 1, '.MK_block_add1_product', 'btn-add1_product', '1');  //�߰���ǰ1
    get_main_list('block_add2_product', 1, '.MK_block_add2_product', 'btn-add2_product', '1');  //�߰���ǰ2
    get_main_list('block_add3_product', 1, '.MK_block_add3_product', 'btn-add3_product', '1');  //�߰���ǰ3
    get_main_list('block_add4_product', 1, '.MK_block_add4_product', 'btn-add4_product', '1');  //�߰���ǰ4
    get_main_list('block_add5_product', 1, '.MK_block_add5_product', 'btn-add5_product', '1');  //�߰���ǰ5
});

