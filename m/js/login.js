$(function() {
    var _form = $('form[name=login_form]'),
        _fail_wrap = $('div.login-fail'),
        _order_form = $('form[name=guest_order_form]'),
        _order_chk = {
            'order_name' : false,
            'order_number' : false };
        /*
        _order_chk['order_name'] = false,    // �ֹ��� ���� ���� üũ
        _order_chk['order_number'] = false;    // �ֹ� ��ȣ ���� ���� üũ    
        */

    //��ȸ�� �ֹ� ��ȸ
    $('input', _order_form).click(function() {
        if (_order_chk[this.name] === false) {
            this.value = '';
            _order_chk[this.name] = true;
        }
    });

    // ��ٱ��� ���
    $('button[name=add_cart]').click(function() {
        window.location.href = $('input[name=referer]').val() + '?order_type=guest';	
        return false;
    });


    $('input', _form).each(function() {
        $(this).data('background', $(this).css('background'));
        if (this.value.length)
            $(this).css('background', 'none');
    }).bind('blur, keydown', function(e) {
        $(this).data('background', $(this).css('background'));
        if (this.value.length) {
            $(this).css('background', 'none');
        } else {
            $(this).css('background', $(this).data().background + ' no-repeat 0 50%');
        }
    });

    $('button[name=to_login]', _fail_wrap).click(function() {
        _fail_wrap.hide();
        return false;
    });

    $('dl.txt-nomem .join_go').click(function() {
        alert("join_go click");
    });
    
    //�ֹ��ܿ���-> ȸ������ �������� return_url�� �޾��ش�.
    $('.go_join').click(function() {
        if($('input[name=return_url]').val().length > 0) {
            $('.go_join').attr('href', './join_contract.html?return_url=' + $('input[name=return_url]').val());
        }
        else {
            $('.go_join').attr('href', './join_contract.html');
        }
    });
});


