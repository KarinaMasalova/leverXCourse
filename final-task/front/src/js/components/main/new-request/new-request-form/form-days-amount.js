import React, { useState } from 'react';

import LabelInput from './label-input';
import DisabledInput from './disabled-input';
import Hint from './hint';

export default function FormDaysAmount(props) {
    const [state, setState] = useState({ isHovered: false });
    const hintStyle = { display: state.isHovered ? 'block' : 'none' };

    const handleOnMouseOver = () => setState({ isHovered: true });
    const handleOnMouseLeave = () => setState({ isHovered: false });

    return (
        <div className="days-amount">
            <LabelInput
                text={'Day(s)'}
                className={props.className}
                onMouseOver={handleOnMouseOver}
                onMouseLeave={handleOnMouseLeave}
            />
            <DisabledInput value={props.value}/>
            <Hint
                hintStyle={hintStyle}
            />
        </div>
    );
}
