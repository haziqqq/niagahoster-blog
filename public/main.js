// Textarea Function
$('.trigger').hide();

$('#textarea').on('keyup', function () {
    if (this.value.length) {
        $('.trigger').show();
    } else {
        $('.trigger').hide();
    }
});
// End Function

// Replied Function
function repliedFunction() {
    const targetDiv = document.getElementById("replied-section");
    if (targetDiv.className == "hide") {
        targetDiv.className = "show";
        document.getElementById("replied-section").style.transition = "all 2s";
        document.getElementById("replied-btn").innerHTML = "Sembunyikan Balasan";
    } else {
        targetDiv.className = "hide";
        document.getElementById("replied-section").style.transition = "all 2s";
        document.getElementById("replied-btn").innerHTML = "Tampilkan Balasan";
    }
}
// End Function