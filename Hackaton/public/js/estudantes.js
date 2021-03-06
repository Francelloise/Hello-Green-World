$("#posicaoRanking").hide();
$("#extratoBem").hide();

$(".verdadeiro").click(function(){
    $(this).hide()
});

$("#AtivaExtratoBem").click(function(){
  $("#extratoBem").show("slow");
})



$(document).ready(function ($) {

  var drag_items = $('.drop-effect .drag');
  var drop_items = $('.drop-effect').find('.drop');

  //sets up the drag and drop event listeners
  function setUpEventListeners() {

    drag_items.each(function () {
      var thisDrag = $(this);
      thisDrag[0].addEventListener('dragstart', dragStart);
      thisDrag[0].addEventListener('drag', drag);
      thisDrag[0].addEventListener('dragend', dragEnd);
    });

    drop_items.each(function () {
      var thisDrop = $(this);

      thisDrop[0].addEventListener('dragenter', dragEnter);
      thisDrop[0].addEventListener('dragover', dragOver);
      thisDrop[0].addEventListener('dragleave', dragLeave);
      thisDrop[0].addEventListener('drop', drop);

    });

  }
  setUpEventListeners();

  var dragItem;

  //called as soon as the draggable starts being dragged
  //used to set up data and options
  function dragStart(event) {
    console.log('dragStart')

    drag = event.target;
    dragItem = event.target;

    //set the effectAllowed for the drag item
    event.dataTransfer.effectAllowed = $(this).attr('data-effect-allowed');

    var imageSrc = $(dragItem).prop('src');
    var imageHTML = $(dragItem).prop('outerHTML');

    //check for IE (it supports only 'text' or 'URL')
    try {
      event.dataTransfer.setData('text/uri-list', imageSrc);
      event.dataTransfer.setData('text/html', imageHTML);
    } catch (e) {
      event.dataTransfer.setData('text', imageSrc);
    }

    $(drag).addClass('drag-active');

  }

  //called as the draggable enters a droppable 
  //needs to return false to make droppable area valid
  function dragEnter(event) {
    console.log('dragEnter')
    var drop = this;

    //set the drop effect for this zone
    event.dataTransfer.dropEffect = $(drop).attr('data-drop-effect');
    $(drop).addClass('drop-active');

    event.preventDefault();
    event.stopPropagation();

  }

  //called continually while the draggable is over a droppable 
  //needs to return false to make droppable area valid
  function dragOver(event) {
    console.log('dragOver')
    var drop = this;

    //set the drop effect for this zone
    event.dataTransfer.dropEffect = $(drop).attr('data-drop-effect');
    $(drop).addClass('drop-active');

    event.preventDefault();
    event.stopPropagation();
  }

  //called when the draggable was inside a droppable but then left
  function dragLeave(event) {
    console.log('dragLeave')
    var drop = this;
    $(drop).removeClass('drop-active');
  }

  //called continually as the draggable is dragged
  function drag(event) { }

  //called when the draggable has been released (either on droppable or not)
  //may be called on invalid or valid drop
  function dragEnd(event) {
    console.log('dragEnd')
    var drag = this;
    $(drag).removeClass('drag-active');

  }

  //called when draggable is dropped on droppable 
  //final process, used to copy data or update UI on successful drop
  function drop(event) {
    console.log('drop');
    console.log(event.dataTransfer.getData('text'));

    drop = this;
    console.log('arrastando', dragItem.getAttribute('data-effect-allowed'));
    console.log('destino aceita', drop.getAttribute('data-drop-effect'));

    if (dragItem.getAttribute('data-effect-allowed') === drop.getAttribute('data-drop-effect')) {
      $(drop).removeClass('drop-active');
      $(drop).addClass('correct');

      event.dataTransfer.dropEffect = $(drop).attr('data-drop-effect');

      var dataList, dataHTML, dataText;

      //collect our data (based on what browser support we have)
      try {
        dataList = event.dataTransfer.getData('text/uri-list');
        dataHTML = event.dataTransfer.getData('text/html');
      } catch (e) {
        ;
        dataText = event.dataTransfer.getData('text');
      }

      //we have access to the HTML
      if (dataHTML) {
        $(drop).empty();
        $(drop).prepend(dataHTML);
      }
      //only have access to text (old browsers + IE)
      else {
        $(drop).empty();
        $(drop).prepend($(dragItem).clone());
      }
    } else {

      alert('Descarte incorreto');

    }
    event.preventDefault();
    event.stopPropagation();
  }
  var userAgent = window.navigator.userAgent;
  if (userAgent.indexOf('MSIE') != -1) {
    $('.ie-message').show();
  }
});