import React from 'react'; 

function ProductItem(props) {
  console.log(props?.src);
  return (
    <>
    
      <li className='product__item'>
        <a className='product__item__link' href={`https://shop.kps.co.th/product/${props.path}`} target='_blank'>
          <figure className='product__item__pic-wrap' data-category={props.label}>
          
            <img
              className='product__item__img'
              alt='Travel'
              src={props?.src}
            />
          </figure>
          <div className='product__item__info'>
            <h5 className='product__item__text'>ราคา {props.text} บาท</h5>
            <h5 className='product__item__text'>เหลือ  {props.text1} ชิ้น</h5>
          </div>
        </a>
      </li>
    
    </>
  );
}

export default ProductItem;