import React from 'react';
import { SIDEBAR_LINKS1, SIDEBAR_LINKS2, SIDEBAR_LINKS3 } from '@/constants';
import Image from 'next/image';

type MobileNavbarProps = {
  Header1 : string,
  Header2: string,
  Header3 : string
}

const MobileNavbar = ({Header1,Header2,Header3} : MobileNavbarProps) => {
  return (
    <>
      <div className="pt-4 mx-4 mb-3">
        {true && <span className='text-2xl text-user'>Bienvenido</span>}
      </div>
      <div className='h-[1px] bg-red-200 mx-1'></div>
      <h1 className="text-3xl pt-3 mx-2">{Header1}</h1>
      <ul className="space-y-3 pt-3">
        {SIDEBAR_LINKS1.map((link, key) => (
          <li className='w-full h-[50px] flex items-center rounded-full hover:bg-red-100 pl-6' key={key}>
            <Image src={link.icon} width={20} height={20} alt='icon' className='mr-3' />
            <span>{link.label}</span>
          </li>
        ))}
      </ul>
      <h1 className="text-3xl pt-3 mx-2">{Header2}</h1>
      <ul className="space-y-3 pt-3">
        {SIDEBAR_LINKS2.map((link,key) => (
          <li className="w-full h-[50px] flex items-center rounded-full hover:bg-red-100 pl-6" key={key}>
            <Image src={link.icon} width={20} height={20} alt='icon' className='mr-3'/>
            <span>{link.label}</span>
          </li>
        ))}
      </ul>
      <h1 className="text-3xl pt-3 mx-2">{Header3}</h1>
      <ul className="space-y-3 pt-3">
        {SIDEBAR_LINKS3.map((link,key) => (
          <li className="w-full h-[50px] flex items-center rounded-full hover:bg-red-100 pl-6" key={key}>
            <Image src={link.icon} width={20} height={20} alt='icon' className='mr-3'/>
            <span>{link.label}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MobileNavbar;
