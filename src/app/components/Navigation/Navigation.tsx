'use client';

import Link from 'next/link';
import { useState } from 'react';
const Navigation = () => {
  const [edClasses, setEdClasses] = useState([
    { id: 1, name: 'Навчальний клас гіпертоніка і кардіохворого' },
    { id: 2, name: 'Навчальний клас неврології, психіатрії та наркології' },
    { id: 3, name: 'Навчальний клас дерматології та медичної косметології' },
    { id: 4, name: 'Навчальний клас невідкладної допомоги' },
    { id: 5, name: 'Рух — це життя. Травматологія і ревматологія' },

    { id: 6, name: 'Навчальний клас алергіка' },
    { id: 7, name: 'Здорова дитина' },
    { id: 8, name: 'ЛОР-питання, ЛОР-відповіді' },
    { id: 9, name: 'Здоровий зір' },
    { id: 10, name: 'Жіноче здоров’я' },
  ]);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleOpenDropdown = () => {
    setDropdownOpen(true);
  };
  const handleCloseDropdown = () => {
    setDropdownOpen(false);
  };
  return (
    <header>
      <nav className='pt-4 pb-4 bg-white'>
        <ul className='flex gap-4'>
          <li>
            <Link href='/'>Головна</Link>
          </li>
          <li onMouseEnter={handleOpenDropdown} onMouseLeave={handleCloseDropdown}>
            <Link href='/pages/educational_class'>Навчальні класи</Link>
            <div className={`absolute bg-white w-full z-10 left-0 p-4 border border-gray-300 rounded-md shadow-md transition-all duration-300 ease-in-out ${dropdownOpen ? '' : 'hidden'}`}>
              <ul className='flex flex-wrap gap-4'>
                {edClasses.map((el) => (
                  <li key={el.id}>
                    <Link href={`/educational_class/${el.id}`}>{el.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li>
            <Link href='/pages/speakers'>Спікери</Link>
          </li>
          <li>
            <Link href='/pages/doctors'>Для Лікарів</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
