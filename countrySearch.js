$('#btnSearch').click(function(){
    var search = $('#search').val();
    // alert(search)
    $.ajax({
        url: "https://restcountry.eu/#api-endpoints-all",
        type: 'get',
        success : function(response){
            console.log(response);
            console.log(JSON.stringify(response));
        }
    })
})