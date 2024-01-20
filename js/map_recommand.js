import { drawMap } from './draw_map.js';

drawMap();

$('.reset-map').click(function () {
    $('.content-containe').removeClass('hide');
});
