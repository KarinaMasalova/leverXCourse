import React from "react";
import Select from 'react-select';

export default function FormSelect() {
    const options = [
        { value: 'vacation', label: 'Vacation' },
        { value: 'sick-leave', label: 'Sick leave' },
        { value: 'own-expense-leave', label: 'Own expense leave' }
    ];

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: '1px dotted lightgray',
            color: state.isSelected ? 'white' : 'black',
            fontSize: '1.3rem',
            fontFamily: 'Open Sans',
            padding: 10,
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
            return { ...provided, opacity, transition };
        },
        menu: (provided) => ({
            ...provided,
            margin: '0px'
        }),
        placeholder: (provided) => ({
            ...provided,
            fontSize: '1.3rem',
            fontFamily: 'Open Sans',
        })
      }

    return (
        <Select 
            options={options}
            styles={customStyles}
        />
    );
}