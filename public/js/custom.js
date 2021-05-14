$(document).ready(function() {
    $('body').addClass('dark-horizontal');
    $('.a-horizontal').pagepiling({
      scrollingSpeed: 280,
      menu: '#menu',
      direction: 'horizontal',
      loopTop: true,
      loopBottom: true,
      anchors: ['Home', 'Services', 'Projects', 'Clients', 'Contacts'],
      navigation: false,
      afterLoad: function(anchorLink, index){
        if( index == 1 || index == 3 || index == 5){ // Section with dark bacgkrounds
          $('body').addClass('dark-horizontal');
        }
        else{
          $('body').removeClass('dark-horizontal');
        }
      }
    })

    $('.a-pp-prev').on('click', function(){
      $.fn.pagepiling.moveSectionUp()
    })
    $('.a-pp-next').on('click', function(){
      $.fn.pagepiling.moveSectionDown()
    })
  })