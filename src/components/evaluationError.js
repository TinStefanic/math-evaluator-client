//@ts-check
export default function EvaluationError(props) {
    /**
     * @param {string} input 
     * @param {number} offset 
     * @returns {JSX.Element}
     */
    const highlightOperator = (input, offset) => {
        const startPos = props.errorOpStartPos;
        const endPos = props.errorOpEndPos;

        if (startPos == null || endPos == null) {
            return (<>{input}</>);
        } else return (
            <>
                {input.substring(0, startPos - offset)}
                <span className="text-warning">
                    {input.substring(startPos - offset, endPos - offset)}
                </span>
                {input.substring(endPos - offset)}
            </>
        );
    }

    const highlightError = () => {
        const input = props.input;
        const startPos = props.errorStartPos;
        const endPos = props.errorEndPos;

        if (startPos == null || endPos == null) {
            return (<>{input}</>);
        } else return (
            <>
                {input.substring(0, startPos)}
                <span className="text-danger">
                    {highlightOperator(input.substring(startPos, endPos), startPos)}
                </span>
                {input.substring(endPos)}
            </>
        );
    }

    return (
        <div>
            <div>
                <h3>{props.errorMessage}</h3>
            </div>
            <div>
                <h2>{highlightError()}</h2>
            </div>
        </div>
    );
}