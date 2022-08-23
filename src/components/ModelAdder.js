const exampleModelOptions = [
    {name: 'gpt-2', modelID:0},
    {name: 'dalle-mini', modelID:1},
    {name: 'image-captioning', modelID:2}
]

function ModelAdder(props) {
    const handleSubmit = e => {
        e.preventDefault();
        props.addModel(exampleModelOptions[0])
    }

    return <button onClick={handleSubmit}>add</button>
}

export default ModelAdder;