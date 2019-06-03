(function ($) {


    var DatePicker = {
        init: function (options, elem) { 
            var self = this;


        }
    };

    jQuery.fn.datepicker = function (settings) {
        var config = {'foo': 'bar'};
 
        if (settings) jQuery.extend(config, settings);
 
        this.each(function () {
            // element-specific code here
            
            
            console.log( 'datepicker...' );
        });
 
        return this;
    };


})(jQuery);