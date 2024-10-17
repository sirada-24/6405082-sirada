import React from 'react';
import MyButton from './MyButton';
import CarImage from './CarImage';

const CarDetail = () => {
  return (
    <div>
      <h1>Honda Civic</h1>
      <CarImage />
      <h2>Specifications</h2>
      <ul>
        <li>อัตราสิ้นเปลือง: 17.2 km/l</li>
        <li>ปล่อย CO2 ที่: 139 g./km</li>
        <li>ความจุถังน้ำมัน: 47 ลิตร</li>
        <li>ระยะต่ำสุดถึงพื้น Ground Clearance  126 มิลลิเมตร</li>
        <li>ระยะฐานล้อ:  2,733 มิลลิเมตร</li>
      </ul>
      <h2>Features</h2>
      <p>Honda Sensing, Lane Keeping Assist, Adaptive Cruise Control, and more.</p>
      <MyButton label="Learn More" />
    </div>
  );
};

export default CarDetail;
