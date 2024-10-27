import React, { useState } from "react";
import { Carousel, Modal } from "antd";
import carouselStyle from "./carousel.module.scss";

const CarouselItem = ({ carouselItems }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  // Function to open modal and set the clicked image
  const handleImageClick = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // List of carousel items

  return (
    <div className={carouselStyle.carousel_container}>
      <Carousel autoplay>
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={carouselStyle.carousel_item}
            style={{ position: "relative" }}
          >
            <img
              style={{ width: "100%", height: "50vh" }}
              src={item.src}
              alt={`carousel-item-${index}`}
            />
            {/* Message overlay */}
            <button
              className={carouselStyle.message_overlay}
              onClick={() => handleImageClick(item.src)}
            >
              Click
            </button>
            {/* Title at the bottom */}
            <div className={carouselStyle.title_overlay}>{item.title}</div>
          </div>
        ))}
      </Carousel>

      {/* Modal to show the image when clicked */}
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={"80%"} // Adjust the width of the modal as needed
      >
        <img
          src={modalImage}
          alt="enlarged"
          className={carouselStyle.modal_img}
        />
      </Modal>
    </div>
  );
};

export default CarouselItem;
