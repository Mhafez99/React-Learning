
function Blog(props) {
    // const sidebar = props.posts.map((post) => {
    //     <li key={post.id} > {post.title}</li >;
    // });
    return (
        <ul>
            {props.posts.map((post) => <li key={post.id} > {post.title}</li >)}
        </ul>
    );
}

export default Blog;