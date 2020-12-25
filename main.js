$(function(){
    var $ordr = $('#orders'); 
    var $name = $('#name');
    var $drink = $('#drink');
$.ajax({
type: 'GET',
url: 'https://jsonplaceholder.typicode.com/users',
success: function(data){
    console.log(data);
    $.each(data,function(dataCount,data){
        $ordr.append('<li> Name :'+data.name+'</li>');

    });
},
error: function(){
    alert("There is an error");
}
});

$('#add-order').on('click',function(){
var order = {
    name: $name.val(),
    drink: $drink.val()
};
$.ajax({
type:'POST',
url: "https://jsonplaceholder.typicode.com/users",
data: order,
success: function(newData){
    console.log(newData);
    $ordr.append('<li> Name :'+newData.name+'</li>');
  
},
error:function(data){
    alert(data);
}


});



})




})