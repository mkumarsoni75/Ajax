$(function(){
    var $ordr = $('#orders');
$.ajax({
type: 'GET',
url: 'https://jsonplaceholder.typicode.com/users',
success: function(data){
    console.log(data);
    $.each(data,function(dataCount,data){
        $ordr.append('<li> Name :'+data.name+'</li>');

    });
}

})




})