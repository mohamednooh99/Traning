$(function () {
    var header = $('header').outerHeight();
    var footer = $('footer').outerHeight();
    var pages = header + footer;
    $('.pages').css('min-height', "calc(100vh - ".concat(pages, "px)"));
    $(document).on('click', '.reg-st', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.student').removeClass('d-none')
        $('.teacher').addClass('d-none')
    })
    $(document).on('click', '.reg-tc', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.student').addClass('d-none')
        $('.teacher').removeClass('d-none')
    })

    function triggerClick(elem) {
        $(elem).click();
    }
    var $progressWizard = $('.stepper'),
        $tab_active,
        $tab_prev,
        $tab_next,
        $btn_prev = $progressWizard.find('.prev-step'),
        $btn_next = $progressWizard.find('.next-step'),
        $tab_toggle = $progressWizard.find('[data-toggle="tab"]'),
        $tooltips = $progressWizard.find('[data-toggle="tab"][title]');

    // To do:
    // Disable User select drop-down after first step.
    // Add support for payment type switching.

    //Initialize tooltips
    $tooltips.tooltip();

    //Wizard
    $tab_toggle.on('show.bs.tab', function(e) {
        var $target = $(e.target);

        if (!$target.parent().hasClass('active, disabled')) {
            $target.parent().prev().addClass('completed');
        }
        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    // $tab_toggle.on('click', function(event) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     return false;
    // });

    $btn_next.on('click', function() {
        $tab_active = $progressWizard.find('.active');

        $tab_active.next().removeClass('disabled');

        $tab_next = $tab_active.next().find('a[data-toggle="tab"]');
        triggerClick($tab_next);

    });
    $btn_prev.click(function() {
        $tab_active = $progressWizard.find('.active');
        $tab_prev = $tab_active.prev().find('a[data-toggle="tab"]');
        triggerClick($tab_prev);
    });
    
});


