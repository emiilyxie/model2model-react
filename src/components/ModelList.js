import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

import Model from './Model';
import ModelAdder from './ModelAdder'
import SubmitButton from './SubmitButton'

const url = 'http://localhost:5000';
const socket = io.connect(url);

function ModelList(props) {
    const [models, setModels] = useState([]);

    useEffect(() => { 
        socket.on('connect', () => {
            console.log("connected to server");
            //socket.emit('after connect', {'data':'hiiiiii ;)'})
        });

        socket.on('model output', (data) => {
            console.log(data);
        });

        socket.on('server action', (msg) => {
            console.log(msg);
        })
          
        // socket.on('server response', (data) => {
        //     console.log(data)
        // });
    }, [])

    const addModel = model => {
        //console.log(`old models ${models}`)
        const newModels = [...models, model];
        setModels(newModels);
        console.log(newModels);
    }

    // TODO: add updateModel
    const updateModel = (index, newModel) => {
        const newModels = [...models];
        console.log(JSON.stringify(newModels[index]))
        newModels[index] = newModel;
        console.log(JSON.stringify(newModels[index]))
        console.log(newModels);
        setModels(newModels);
    }

    // TODO: add removeModel

    // TODO: turn current list into list of models
    const submitModel = () => {
        const inputs = ['hello world, sample text '];
        const modelIndices = models.map(model => model.modelID);
        console.log(`model indices: ${modelIndices}`)
        socket.emit('process data', {'inputs': inputs, 'modelIndices': modelIndices});
    }

    // TODO: add input layer

    return <div>
        {models.map((model, index) => (
           <Model key={index} index={index} data={model} updateModel={updateModel}/>
        ))}
        <ModelAdder addModel={addModel} />
        <SubmitButton submitModel={submitModel}/>
    </div> 
}

export default ModelList;