//@ts-check
export default function ExpressionInput(props) {

    const handleChange = (event) => {
        props.setInput(event.target.value);
    }

    return (
        <div>
            <input type="text" style={{ width: "60%"}} value={props.input} onChange={handleChange}></input>
        </div>
    );
}