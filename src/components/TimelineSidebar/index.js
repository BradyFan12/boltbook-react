import React from 'react';
import { Card } from 'components/Card';

export const TimelineSidebar = ({ user }) => {
  return (
    <div>
      <input type='text' placeholder='Search user profile' className='form-control' />
      <Card>
        <h3>Intro</h3>
        <p>{user.bio}</p>
        <p>{user.currentCity}</p>
        <p>{user.relationshipStatus}</p>
        <p>{user.phoneNumber}</p>
        {user.featuredImages.map((image) => {
          return (<img key={image} src={image} alt='none' className='img-responsive' />)
        })}
      </Card>
    </div>
  );
}