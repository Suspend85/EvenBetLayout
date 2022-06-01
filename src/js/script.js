if (document.getElementById('range')) {
   jQuery(document).ready(function ($) {
      $('#range').each(function () {
         let $this = $(this);

         $this.slider({
            animate: true,
            range: 'min',
            value: 1300,
            min: 0,
            max: 2609,
            slide: function (event, ui) {
               $('#number').val(ui.value);
            },
         });
      });

      $('#number').on('keydown keypress keyup', function () {
         let res = $(this).val();
         if (res < 0) res = 0;
         if (res > 2609) res = 2609;
         $('#range').slider('value', res);
      });
 
      const inputs = $('.inputs'),
         minus = $('.minus'),
         plus = $('.plus'),
         input = $('#number');
      let count = 0;

      inputs.on('keyup', function () {
         this.value = this.value.replace(/[^\d]/g, '');
      });

      minus.on('click tap', function () {
         count = +$('#number').val() - 1;
         input.val(count);
         $('#range').slider('value', count);
      });

      plus.on('click tap', function () {
         count = +$('#number').val() + 1;
         input.val(count);
         $('#range').slider('value', count);
      });
   });
}
