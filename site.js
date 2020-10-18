$(document).ready(function(){
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      });

      $('body').on('click', '[data-tab]', function (e) {
        e.preventDefault();
        $(".tab.active").removeClass("active");
        let tabId = $(e.currentTarget).data("tab");
        $("#" + tabId).addClass("active");
      });
});