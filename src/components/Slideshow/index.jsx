import React from "react";

import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

const SlideShow = (props) => {
    // Utiliser l'état local pour suivre l'image actuelle
    const [currentImage, setCurrentImage] = React.useState(0);
    const slidesLenght = props.imagesUrl.length;

// Des bulles indicateurs (les "●" sous les images)
    const toggleBullet = (indexPic) => {
        let bulletsImg = [];
        for (let i = 0; i < slidesLenght; i++) {
            bulletsImg = [
                ...bulletsImg,
                <li
                    key={i}
                    className={
                        i === indexPic
                            ? `slidecontainer_bulletactive`
                            : `slidecontainer__bullet`
                    }
                >
                    ●
                </li>,
            ];
        }
        return bulletsImg;
    };

    const nextSlide = () => {
        setCurrentImage(
            currentImage === slidesLenght - 1 ? 0 : currentImage + 1
        );
    };

    const prevSlide = () => {
        setCurrentImage(
            currentImage === 0 ? slidesLenght - 1 : currentImage - 1
        );
    };

    return (
        <div className="slidecontainer">
            <div
                className="slidecontainer__element"
                style={{
                    transform: `translateX(${-currentImage * 100}%)` 
                }}
            >
                {props.imagesUrl.map((url, index) => (
                    <img key={index} src={url} alt={`accomodation ${index}`} />
                ))}
            </div>
            <img
                className={
                    slidesLenght > 1
                        ? `slidecontainer__leftArrow`
                        : `slidecontainer__noArrow`
                }
                src={leftArrow}
                alt="left arrow icon"
                onClick={prevSlide}
            />
            <img
                className={
                    slidesLenght > 1
                        ? `slidecontainer__rightArrow`
                        : `slidecontainer__noArrow`
                }
                src={rightArrow}
                alt="right arrow icon"
                onClick={nextSlide}
            />
            <ul>{slidesLenght > 1 ? toggleBullet(currentImage) : null}</ul>
        </div>
    );
};

export default SlideShow;
