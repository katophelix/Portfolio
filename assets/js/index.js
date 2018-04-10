// initialize Packery
var $grid = $('.grid').packery({
  itemSelector: '.grid-item',
  // columnWidth helps with drop positioning
  columnWidth: 100
});

// make all items draggable
var $items = $grid.find('.grid-item').draggable();
// bind drag events to Packery
$grid.packery( 'bindUIDraggableEvents', $items );

var $grid = $('.grid');
$grid.packery({
  itemSelector: '.grid-item', 
  // gutter: 0,
  // columnWidth: 90,
  // rowHeight: 90
})
  .imagesLoaded( function() {
    // trigger packery layout after images have loaded
    grid.packery();
  });

// bind draggabilly events to item elements
$container.find('.item').each( makeEachDraggable );

function makeEachDraggable( i, itemElem ) {
  // make element draggable with Draggabilly
  var draggie = new Draggabilly( itemElem );
  // bind Draggabilly events to Packery
  $container.packery( 'bindDraggabillyEvents', draggie );
}

