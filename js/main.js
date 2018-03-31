$("#Parent").click( () => {
    $(".A, .T, .SA").addClass("q");
    $(".P").removeClass("q");
});

$("#Admin").click( () => {
    $(".P, .T, .SA").addClass("q");
    $(".A").removeClass("q");
});

$("#Super-Admin").click( () => {
    $(".P, .A, .T").addClass("q");
    $(".SA").removeClass("q");
});

$("#Teacher").click( () => {
    $(".P, .A, .SA").addClass("q");
    $(".T").removeClass("q");
});