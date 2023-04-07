import './card.css'; 
import { Task } from '../tasks/task';
import { Button } from '../buttons/buttonAddCard'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useState } from 'react';

export const Card = () => {

    return (
  
      <div className='card'>
        <Scrollbars autoHeight autoHeightMax={550}>
        </Scrollbars>
        <Button/>
        </div>
    )
}
