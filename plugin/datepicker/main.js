// Utility
if ( typeof Object.create !== 'function' ) {
    Object.create = function( obj ) {
        function F() {};
        F.prototype = obj;
        return new F();
    };
}

(function( $, window, document, undefined ) {

    var DatePicker = {
        init: function (options, elem) { 
            var self = this;

            self.opts = $.extend(true, {}, $.fn.datepicker.defaults, options);
            console.log( 'DatePicker...', self.opts );

        },


        
    };


    // What does the datepicker plugin do?
    $.fn.datepicker = function(options) {
        return this.each(function() {
            var $this = Object.create( DatePicker );
            $this.init( options, this );
            $.data( this, 'datepicker', $this );
        });
    };

    // default options
    $.fn.datepicker.defaults = {
      defaultOne: true,
      defaultTwo: false,
      defaultThree: 'yay!'
    };

})(jQuery, window, document );
