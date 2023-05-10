function Category({category, onClick}) {
    return (
        <li  className="nav-item">
            <button className="nav-link text-uppercase " onClick={onClick}>{category}</button>
        </li>
    );
}
export default Category;