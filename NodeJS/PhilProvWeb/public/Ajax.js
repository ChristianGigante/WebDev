$(document).ready(function () {
    $("button").click(function () {
        var rate = $(this).text();
        var city = $('title').text();
        $.ajax({
            url: "/rate",
            data: { rate: rate, city: city },
            type: "GET",
            success: function (data) {
                $('#rating').text('Average Rate ' + data)
            },
            error: function (e) {
                console.log(e);
            }
        })
    });
});
