/*
 * @desc: �θ��±׿� �°� �̹��� ����
 * @authorr: jodalpo@gmail.com
 * @date : 2012.07.17
 */

$.fn.imagesLoaded = function(callback){
    var elems = this.filter('img'),
        len   = elems.length,
        blank = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      
    elems.bind('load.imgloaded',function() {
        if (--len <= 0 && this.src !== blank) { 
            elems.unbind('load.imgloaded');
            callback.call(elems,this); 
        }
    }).each(function() {
        if (this.complete || this.complete === undefined) {
            var src = this.src;
            this.src = blank;
            this.src = src;
        }  
    }); 

    return this;
};

var fitToParent = function(ele) {
    this.ele = ele;
    this.mode = ele.attr('data-type');
    this.line_cnt = 0;
    switch (this.mode) {
        case 'tile':
            this.fLetterBox = false;
            this.min_width = 90;
            this.max_width = 125;
            this.ratio = 1.3;
            this.margin = 1;
        break;
        case 'horizontal':
            this.fLetterBox = true;
            this.min_width = 90;
            this.max_width = 125;
            this.ratio = 1.3;
            this.margin = 1;
        break;
        case 'vertical':
            this.fLetterBox = false;
            this.min_width = 90;
            this.max_width = 125;
            this.ratio = 1.3;
            this.margin = 1;
        break;
    }
    
    this.init();
};

fitToParent.prototype.init = function() {
    var _self = this,
        _size = this.optmizeSize();
    
    switch (this.mode) {
        case 'tile':
            $('li', this.ele).css({ width: _size.width, height: _size.height, margin: 1 }).each(function(i, obj) {
                $('.thumb-img img', obj).imagesLoaded(function(img) {
                    _self.fixImage(obj, img);
                });
            });
            this.ele.css({ width: _size.wrap_width, margin: '5px auto 0 auto' });
        break;
        case 'horizontal':
            $('li', this.ele).css({ width: _size.width, height: _size.height + 55/*��ǰ �̸�*/, margin: 1 }).each(function(i, obj) {
                $('.thumb-img', obj).height(_size.height);
                $('.thumb-img img', obj).imagesLoaded(function(img) {
                    _self.fixImage(obj, img);
                });
            }).parent().css({ width: _size.wrap_width, margin: '5px auto 0 auto' });
        break;
        case 'vertical':
            
        break;
    }
};

fitToParent.prototype.optmizeSize = function() {
    var _device_width = window.innerWidth || $(window).width(),
        _dim = 0,
        _real_target = 0,
        _self = this;
    
    if (_device_width <= 320) {
        _dim = parseInt(_device_width / 3, 10);
    } else if (_device_width > 320 && _device_width <= 480) {
        _dim = parseInt(_device_width / 4, 10);
    } else if (_device_width > 480) {
        _dim = parseInt(_device_width / 5, 10);
    }
    
    if (_dim < this.min_width) {
        _dim = this.min_width;
    } else if (_dim > this.max_width) {
        _dim = this.max_width;
    }
    
    var _wrap_width = 0,
        _target = [],
        _i = 0,
        _real_total = 0;
    
    do {
        _wrap_width += _dim;
        _target[_i++] = _wrap_width;
    } while (_wrap_width < _device_width);
    
    $.each(_target, function(i, arr) {
        if (arr < _device_width) {
            _real_target = ++i;
        } else {
            _self.line_cnt = _real_target;
            return false;
        }
    });
    
    if (_target[_real_target] <= _device_width) {
        _real_total = _target[_real_target];
    } else {
        _real_total = _dim * _real_target;
    }

    _dim -= 2;
    
    return { width: _dim, height: _dim * this.ratio, wrap_width: _real_total };
};

fitToParent.prototype.scaleImage = function(srcwidth, srcheight, targetwidth, targetheight, fLetterBox) {
    var result = {
        width: 0,
        height: 0,
        fScaleToTargetWidth: true
    };
    
    if ((srcwidth <= 0) || (srcheight <= 0) || (targetwidth <= 0) || (targetheight <= 0)) {
        return result;
    }

    var scaleX1 = targetwidth;
    var scaleY1 = (srcheight * targetwidth) / srcwidth;
    var scaleX2 = (srcwidth * targetheight) / srcheight;
    var scaleY2 = targetheight;
    var fScaleOnWidth = (scaleX2 > targetwidth);
    
    if (fScaleOnWidth) {
        fScaleOnWidth = fLetterBox;
    } else {
        fScaleOnWidth = !fLetterBox;
    }
    
    if (fScaleOnWidth) {
        result.width = Math.floor(scaleX1);
        result.height = Math.floor(scaleY1);
        result.fScaleToTargetWidth = true;
    } else {
        result.width = Math.floor(scaleX2);
        result.height = Math.floor(scaleY2);
        result.fScaleToTargetWidth = false;
    }
    
    result.targetleft = Math.floor((targetwidth - result.width) / 2);
    result.targettop = Math.floor((targetheight - result.height) / 2);
    
    return result;
};

fitToParent.prototype.rememberOriginalSize = function(img) {
    if (img.originalsize == undefined) {
        $(img).data({ width: img.width, height: img.height });
    }
};

fitToParent.prototype.fixImage = function(obj, img) {
    this.rememberOriginalSize(img);

    var targetwidth = $(obj).width();
    var targetheight = (this.mode == 'horizontal') ? $(obj).height() - 55 /*��ǰ �̸�, ���� ����*/ : $(obj).height();
    var srcwidth = $(img).data().width;
    var srcheight = $(img).data().height;
    var result = this.scaleImage(srcwidth, srcheight, targetwidth, targetheight, this.fLetterBox);
    
    img.width = result.width;
    img.height = result.height;
    
    if (this.mode == 'tile') {
        var parent = $(img).parents('li:first');
        if (result.fScaleToTargetWidth) {
            /*
            $('dd.thumb-img img', parent).css({ maxWidth: '100%', maxHeight: 'none' });
            $(img).css({ top: ((img.height-result.height) / 2) * (-1) });
            */
        } else {
            $(img).css({ left: result.targetleft, top: result.targettop });
        }
    } else if (this.mode == 'horizontal') {
        /*
        var parent = $(img).parents('.thumb-img:first');
        $(img).css({ top: (parent.height() - img.height) / 2 });
        */
    }
};

