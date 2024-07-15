import { ProductImages } from "../../../../constants/productImages";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function ProductImagesSlider() {
    return (
        <>
            <div className="relative max-w-6xl mx-auto flex items-center justify-center gap-4 p-4">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    grabCursor={true}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Autoplay, Navigation, Pagination]}
                    navigation={false}
                    onSlideChange={() => {}}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {ProductImages.map((product) => (
                        <SwiperSlide key={product.id} className="mb-10">
                            <img className="w-full h-96 object-cover rounded-xl" src={product.image} alt={`Slide ${product.id}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}
