import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmlrZXxlbnwwfHwwfHw%3D/1000/600/',
      thumbnail: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmlrZXxlbnwwfHwwfHw%3D/250/150/',
    },
    {
      original:  'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW90b3JiaWtlfGVufDB8fDB8fA%3D%3D/1000/600/',
      thumbnail: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW90b3JiaWtlfGVufDB8fDB8fA%3D%3D/250/150/',
    },
    {
      original:  'https://images.unsplash.com/photo-1580310614729-ccd69652491d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vdG9yYmlrZXxlbnwwfHwwfHw%3D/1000/600/',
      thumbnail: 'https://images.unsplash.com/photo-1580310614729-ccd69652491d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vdG9yYmlrZXxlbnwwfHwwfHw%3D/250/150/',
    },
    {
      original:  'https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG1vdG9yYmlrZXxlbnwwfHwwfHw%3D/1000/600/',
      thumbnail: 'https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG1vdG9yYmlrZXxlbnwwfHwwfHw%3D/250/150/',
    },
    {
      original:  'https://images.unsplash.com/photo-1621967390503-e3cd1f6b27fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vdG9yYmlrZXxlbnwwfHwwfHw%3D/1000/600/',
      thumbnail: 'https://images.unsplash.com/photo-1621967390503-e3cd1f6b27fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vdG9yYmlrZXxlbnwwfHwwfHw%3D/250/150/',
    }
  ];

const Banner = () => {
    return <ImageGallery items={images}></ImageGallery>;

};

export default Banner;