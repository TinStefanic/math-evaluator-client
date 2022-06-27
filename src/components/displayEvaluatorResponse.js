import EvaluationResult from "./evaluationResult";
import EvaluationError from "./evaluationError";

//@ts-check
export default function DisplayEvaluatorResponse(props) {
    if (props.response.result != null) {
        return (
            <EvaluationResult result={props.response.result}/>
        );
    } else if (props.response.errorMessage != null) {
        return (
            <EvaluationError {...props.response}/>
        );
    } else {
        return (null);
    }
}