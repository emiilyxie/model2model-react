function SubmitButton(props) {
    async function testSubmit() {
        //console.log("pressed submit")
        // const url = "http://localhost:5000/stream"

        // fetch(url, {
        //     method: 'POST',
        //     mode: 'cors'
        // })
        // .then((response) => response.body)
        // .then((body) => {
        //     const reader = body.getReader();

        //     return new ReadableStream({
        //         start(controller) {
        //         return pump();

        //         function pump() {
        //             return reader.read().then(({ done, value }) => {
        //             // When no more data needs to be consumed, close the stream
        //             if (done) {
        //                 controller.close();
        //                 return;
        //             }

        //             // Enqueue the next data chunk into our target stream
        //             controller.enqueue(value);
        //             console.log(value)
        //             return pump();
        //             });
        //         }
        //         }
        //     })
        // })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.submitModel();
    }

    return <button onClick={handleSubmit}>Submit</button>
}

export default SubmitButton;