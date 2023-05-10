function List() {
    const arr = ['HTML', 'CSS', 'JS'];
    const lis = arr.map((li) =>
        <li key={li.toString()}>{li}</li>
    );
    return (
        <ul>
            {/* {arr.map((li) => <li>{li}</li>)} */}
            {lis}
        </ul>
    );
}
export default List;