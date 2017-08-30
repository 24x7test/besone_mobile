var mk_language = (function(lang) {
    var obj = {
        kor: {
            non_option_txt: '���þ���',
            soldout_txt: 'ǰ��',
            tempsoldout_txt: '�Ͻ�ǰ��',
            shipping_txt: '�������',
            no_input_txt: '�Է¾���',
            stock_title: '������',
            stock_unit: '��',
            stock_unlimit: '������',
            enter: '�Է�',
            select: '����',
            empty_option: '������ �ɼ��� �����ϴ�.',
            option_label: '[{#P1}]�� �ɼ��� ',
            require_option: '{#P1}�ʼ�{#P2} �׸��Դϴ�.\n�ɼ��� �ݵ�� {#P2}�ϼ���.',
            require_option2: '[{#P1}]�� �ɼ��� �ʼ�{#P2} �׸��Դϴ�.\n�ɼ��� �ݵ�� {#P2}�ϼ���.',
            require_option3: '�ʼ�{#P1} �׸��Դϴ�. �ɼ��� �ݵ�� {#P1}�ϼ���.',
            temporary: '�Ͻ�',
            selected_option_soldout: '�����Ͻ� ��ǰ�� �ɼ��� {#P1}ǰ���Ǿ����ϴ�.\n�ٸ� �ɼ��� �����ϼ���.',
            selected_product_soldout: '�����Ͻ� ��ǰ�� {#P1}ǰ���Ǿ����ϴ�.\n�ٸ� ��ǰ�� �����ϼ���.',
            selected_option_lower_quantity: '�����Ͻ� ��ǰ�� �ɼ��� ������ �����մϴ�.\n������ �������ּ���.',
            option_added: '�̹� �߰��� �ɼ��Դϴ�.',
            quantity_numbers: '������ ���ڸ� �Է����ּ���.',
            min_amount: '�ش� ��ǰ�� �ּұ��� ������ {#P1}�� �Դϴ�.',
            min_amount2: '������ �ּ� {#P1}�̻� �Է��ϼž� �մϴ�.',
            max_amount: '�ش� ��ǰ�� �ִ뱸�� ������ {#P1}�� �Դϴ�.',
            increase_quantity: '��������',
            decrease_quantity: '��������',
            won: '��',
            remove: '����',
            not_selected: '���õ� �ɼ��� �����ϴ�.',
            not_select_product : '���õ� ��ǰ�� �����ϴ�.'
        },
        eng: {
            non_option_txt: 'No selected',
            soldout_txt: 'Out-of-stock',
            tempsoldout_txt: 'Temporarily Out-of-stock',
            shipping_txt: 'Shipping delay',
            no_input_txt: 'No entering',
            stock_title: 'stock',
            stock_unit: 'ea',
            stock_unlimit: 'Unlimited',
            enter: 'enter',
            select: 'select',
            empty_option: 'There is no option to select.',
            option_label: ' of {#P1} ',
            require_option: 'The option{#P1} is required.\nPlease {#P2} the option.',
            require_option2: 'The option of [{#P1}] is required.\nPlease {#P2} the option.',
            require_option3: 'Selection is required. Please {#P1} the option.',
            temporary: 'temporary ',
            selected_option_soldout: 'The item of the selected option is {#P1}out of stock.\nPlease select another option.',
            selected_product_soldout: 'The item of the selected product is {#P1}out of stock.\nPlease select another product.',
            selected_option_lower_quantity: 'Stock quantity is lower than selected quantity.\nPlease adjust the quantity.',
            option_added: 'The option has already been added.',
            quantity_numbers: 'Please enter the quantity numbers.',
            min_amount: 'The minimum purchase quantity is {#P1}.',
            min_amount2: 'You must enter at least {#P1} or more for the minimun purchase quantity.',
            max_amount: 'The maximum purchase quantity is {#P1}.',
            increase_quantity: 'Increase quantity',
            decrease_quantity: 'Decrease quantity',
            won: 'won',
            remove: 'Delete',
            not_selected: 'option is not selected.',
            not_select_product : 'selected product does not exist'
        }
    };
    return obj[lang];
})(shop_language);

var get_lang = function() {
    var _len = arguments.length;
    switch (_len) {
        case 0: return false; break;
        case 1: return mk_language[arguments[0]]; break;
        default:
            var _str = mk_language[arguments[0]];
            for (var i = 1; i < _len; i++) {
                var _regexp = new RegExp('{#P' + i + '}', 'g');
                _str =  _str.replace(_regexp, arguments[i]);
            }
            return _str;
            break;
    }
};

