
//var myvariable = 5;
//
//var myFunction = function(cat, dog) {
//    alert("cat: "+ cat);
//};
//
//var meowfunction = function(){
////    console.log(arguments);
//    console.log("hi", arguments);
//    var newVar = "test";
//    alert("meow");
//};

//myFunction("mycat");

//var animalsObject = {
//    cat:{
//        name:"ted",
//        color:"red",
//        meow: meowfunction
//    },
//    dog:"mydog"
//};
//
//var myArray = [
//    animalsObject,
//    "test",
//    "red"
//];





//jquery example
//cache our book lists dom elements
var availableBooks = $('#available-books');
var checkedOutBooks = $('#checked-out-books');

//checkout book
$(".checkout-book").click(function(){
//    alert("checking out book");
    var book = $(this).parent('li');
//    book.find('button').removeClass("checkout-book btn-info").addClass("return-book btn-warning").text("Return Book");
    checkedOutBooks.append(book);
});

//return book
$(".return-book").click(function(){
//    alert("returning book");
    var book = $(this).parent('li');
//    book.find('button').removeClass("return-book btn-warning").addClass("checkout-book btn-info").text("Checkout Book");
    availableBooks.append(book);
});

//add new book
$("#add-book").click(function(e){
    e.preventDefault();
//    alert("adding book");
    var newBookName = $('#book-name').val();
//    alert("new book name: ", newBookName);
    availableBooks.append('<li>'+newBookName+'<button type="button" class="btn btn-info btn-xs checkout-book">Checkout Book</button></li>');

});


//hide buttons first
$(".books-section .btn").hide();


$(".books-section li").hover(
    function(){
        var bookItem = $(this);
        var bookBtn = bookItem.find(".btn");
        bookBtn.show();
//        bookBtn.css("display","block");
//        bookBtn.removeClass("hidden");
    },
    function(){
        var bookItem = $(this);
        var bookBtn = bookItem.find(".btn");
        bookBtn.hide();
//        bookBtn.css("display","none");
//        bookBtn.addClass("hidden");
    }
);

//
//$(".books-section li").hover(
//    function(){
//        var bookItem = $(this);
//        var bookBtn = bookItem.find(".btn");
//
//        bookBtn.removeClass("hidden");
//    },
//    function(){
//        var bookItem = $(this);
//        var bookBtn = bookItem.find(".btn");
//
//        bookBtn.addClass("hidden");
//    }
//);
