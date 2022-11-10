export const List = props => {
    return (
        <div>
            <li key={props.id} >{props.data}</li>
            <button onClick={() => props.delete(props.id)}>delete {props.data}</button>
        </div>
    );
}