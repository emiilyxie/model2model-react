import React, { useState } from 'react';

const exampleModelOptions = [
    {name: 'gpt-2', modelID:0},
    {name: 'dalle-mini', modelID:1},
    {name: 'image-captioning', modelID:2}
]

function Model(props) {
    const [options, setOptions] = useState(exampleModelOptions);

    return <div>
        <select name='modelSelector' value={props.data.modelID} onChange={e => props.updateModel(props.index,  exampleModelOptions[e.target.value])}>
        {options.map(option => {
            return <option key={option.modelID} value={option.modelID}>
                     {option.name}
                 </option>
        })}
    </select>
    </div>

}

export default Model;