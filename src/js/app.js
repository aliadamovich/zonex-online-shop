import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();


import Swiper from 'swiper';
import Pagination from 'swiper/modules';
// import 'swiper/css'
// import 'swiper/css/pagination';

const swiperBanner = new Swiper('.cover__swiper', {
	// loop: true,
	// direction: 'vertical',
	pagination: {
		el: '.swiper-pagination',
	},

});