export const List = props => {
    return (
        <div>
            <li key={props.id} >{props.data}</li>
            <button onClick={() => props.delete(props.data)}>delete {props.data}</button>
        </div>
    );
}