// starting page hide/show bars ********
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

    // ****************************
// Admin Page hide-show bars *********
$(".myBtn1").click( () => {
    $(".acad-yr-plan, .rep-gen").addClass("q");
    $(".view-edit").removeClass("q");
});
$(".myBtn2").click( () => {
    $(".view-edit, .rep-gen").addClass("q");
    $(".acad-yr-plan").removeClass("q");
});
$(".myBtn3").click( () => {
    $(".view-edit, .acad-yr-plan").addClass("q");
    $(".rep-gen").removeClass("q");
});
    // go to top
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

    // ****************************
    // Super-Admin
$(".MB1").click( () => {
    $(".bw1").toggle();
    $(".bw2").hide();
    $(".btn-wrap").hide();
});
$(".MB2").click(() => {
    $(".bw2").toggle();
    $(".bw1").hide();
});
$(".Btn1").click( () => {
    $(".BW1").toggle();
    $(".BW2").hide();
    $(".BW3").hide();
});
$(".Btn2").click(() => {
    $(".BW2").toggle();
    $(".BW1").hide();
    $(".BW3").hide();
});
$(".Btn3").click(() => {
    $(".BW3").toggle();
    $(".BW2").hide();
    $(".BW1").hide();
});