$("#Parent").click( () => {
    $(".S, .T, .SA").addClass("q");
    $(".P").removeClass("q");
});

$("#Student").click( () => {
    $(".P, .T, .SA").addClass("q");
    $(".S").removeClass("q");
});

$("#Super-Admin").click( () => {
    $(".P, .S, .T").addClass("q");
    $(".SA").removeClass("q");
});

$("#Teacher").click( () => {
    $(".P, .S, .SA").addClass("q");
    $(".T").removeClass("q");
});