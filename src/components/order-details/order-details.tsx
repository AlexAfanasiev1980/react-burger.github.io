import React, { useState, useEffect } from 'react';
import styleOrder from './order-details.module.css';
import Gif from '../../images/done1.svg';

export default function OrderDetails() {

  return (
    <>
      <h2 className={`${styleOrder.numberOrder} mt-4 mb-8 text text_type_digits-large`}>034536</h2>
      <p className='text text_type_main-medium'>идентификатор заказа</p>
      <img src={Gif} alt="icon" className={`${styleOrder.icon} mt-15 mb-15`}/>
      <p className='text text_type_main-default mb-2'>Ваш заказ начали готовить</p>
      <p className={`${styleOrder.bottomText} text text_type_main-default mb-30`}>Дождитесь готовности на орбитальной станции</p>
    </>  
  )
  
} 