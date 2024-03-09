import HotelCard from '@/components/hotel-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Lugband = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-4 mt-10">
        <div className="col-span-12 md:col-span-1"></div>
        <div className="col-span-12 md:col-span-10">
          <div className="grid grid-cols-12 gap-8 mt-10">
            <div className="col-span-12 md:col-span-4">
              <Input value="2" />
              <div className="flex gap-4 flex-wrap justify-center mt-10">
                {options.map((option) => (
                  <Button className="w-12 h-12" size="icon" key={option}>
                    {option}
                  </Button>
                ))}
              </div>
              <div className="bg-gray-600 py-6 min-h-[300px] flex items-center px-8 text-white mt-10">
                <div className="w-full text-center">
                  <div className="flex justify-between items-center mb-10">
                    <p>2 LugBands</p>
                    <p>$8.00 each</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>Total</p>
                    <p>$16.00 each</p>
                  </div>
                  <Button className="mt-10 bg-gray-400 text-white">
                    Click Here
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-8">
              <HotelCard id="01000420" className="mb-4" />
              <HotelCard id="01000421" className="mb-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lugband;
