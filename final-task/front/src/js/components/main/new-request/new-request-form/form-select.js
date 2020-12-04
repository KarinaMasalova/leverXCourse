import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from 'react-select';

import setSelectedValue from '../../../../store/actionCreators/setSelectedValue';

export default function FormSelect(props) {
    const dispatch = useDispatch();

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
            return {
                ...provided,
                opacity,
                transition,
                fontFamily: 'Open Sans',
                fontSize: '1.3rem'
            };
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

    const handleChange = (event) => dispatch(setSelectedValue(event.label));

    const getSelectedValue = (state) => state.selectedValueReducer.selectedValue;
    const value = useSelector(getSelectedValue);

    const selectedValue = options.filter((option) => option.label === value);

    return (
        <Select
            options={options}
            styles={customStyles}
            ref={props.refSelectValue}
            value={selectedValue}
            onChange={handleChange}
        />
    );
}