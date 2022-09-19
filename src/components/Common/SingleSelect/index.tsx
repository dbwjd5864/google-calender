import React, { useCallback, useState } from 'react';
import { Option } from '../../../utils/createTimeOptions';

type SingleSelectProps = {
  valueKey?: string;
  labelKey?: string;
  options: Option[];
  selected: Option | null;
  onChange: (selected: Option, index?: number) => void;
  placeholder?: string;
  className?: string;
  isCustomSelectedOption?: boolean;
};

const SingleSelect = ({
  valueKey = 'value',
  labelKey = 'label',
  options,
  selected,
  onChange,
  placeholder = '선택하세요',
  className = '',
}: SingleSelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handlePlaceHolder = useCallback(() => {
    let foundOption: Option | undefined;
    if (selected !== null) {
      foundOption = options?.find(
        (option: Option) => option[valueKey] === selected[valueKey],
      );
    }

    if (foundOption != null) {
      return foundOption[labelKey];
    } else {
      return placeholder;
    }
  }, [selected]);

  const handleSelectedClick = (index: number) => {
    const selected = options[index];
    onChange(selected, index);

    setIsOpen(prev => !prev);
  };

  return (
    <div className={`relative min-w-32 w-[7rem] ${className}`}>
      <button
        className={
          'relative p-1 flex items-center w-full h-full border rounded-lg'
        }
        onClick={e => {
          e.stopPropagation();
          setIsOpen(prev => !prev);
        }}>
        <div className="overflow-hidden truncate text-left w-full">
          {handlePlaceHolder()}
        </div>

        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-4">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-4">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </button>
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute z-10 t-100 l-1 w-calc[100%-2px] p-0 border rounded-lg h-40 overflow-y-scroll w-full`}>
        {options.map((list, index) => {
          return (
            <li
              key={`${list[valueKey]}${index}`}
              className={`${
                selected !== null && selected[valueKey] === list[valueKey]
                  ? 'bg-blue-500 text-white'
                  : 'bg-white'
              } p-1 hover:bg-gray-200 transition cursor-pointer`}
              onClick={e => {
                e.stopPropagation();
                handleSelectedClick(index);
              }}>
              {list[labelKey]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default React.memo(SingleSelect);
