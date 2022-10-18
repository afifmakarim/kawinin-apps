import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useState, useRef } from "react";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";
import { Box, Heading, Img } from "@chakra-ui/react";
import { AttentionSeeker, Fade } from "react-awesome-reveal";

export default function GallerySection({ data }: any) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Box sx={{ background: "#F8E1CD" }} p={6} id="gallery">
        <Fade>
          <AttentionSeeker effect="pulse">
            <Heading textAlign="center" mb={8} color="brand.100">
              Gallery
            </Heading>
          </AttentionSeeker>
          <Swiper
            style={
              {
                "--swiper-navigation-color": "#ffff",
                "--swiper-pagination-color": "#ffff",
              } as React.CSSProperties
            }
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {data.galleries?.map((item: any, index: any) => (
              <SwiperSlide key={index}>
                <Image
                  style={{ borderRadius: "8px" }}
                  src={`${process.env.NEXT_PUBLIC_IMAGES}${item.imageUrl}`}
                  width={400}
                  height={400}
                  alt=""
                  objectFit="cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={() => setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {data.galleries?.map((item: any, index: any) => (
              <SwiperSlide key={index}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGES}${item.imageUrl}`}
                  width={200}
                  height={200}
                  alt=""
                  objectFit="cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Fade>
      </Box>
    </>
  );
}
