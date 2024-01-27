import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();


// import Swiper from 'swiper';
// import Pagination from 'swiper/modules';
// import 'swiper/css'
// import 'swiper/css/pagination';

// const swiperBanner = new Swiper('.cover__swiper', {

// 	pagination: {
// 		el: '.swiper-pagination',
// 	},

// });


const swiper = new Swiper('.cover__swiper', {
	loop: true,
		pagination: {
			el: '.cover__pagination',
		},
});