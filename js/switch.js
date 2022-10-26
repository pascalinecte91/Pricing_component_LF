$(document).ready(function () {
    $('[name="priceAnnuality"]').change(function () {
        if ($('[name="priceAnnuality"]:checked').is(":checked")) {
            $(".show").hide();
            $(".hidden").show();
        } else {
            $(".show").show();
            $(".hidden").hide();
        }
    });
});
