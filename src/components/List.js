export const List = props => {
    return (
        <div>
            <li>{props.data}</li>
            <button onClick={() => props.delete(props.data)}>delete {props.data}</button>
        </div>
    );
}