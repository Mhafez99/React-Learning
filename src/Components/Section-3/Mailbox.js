function Mailbox(props) {
    const unreadMsg = props.unreadMessages;
    const connection = true;
    return (
        <div>
            <h1>Hallo, {props.name}</h1>
            {unreadMsg.length > 0 &&
                <h2>You Have {unreadMsg.length} Unread Messages</h2>}
            {connection ? <div>Your Massages Is {unreadMsg}</div> : <div>You Are Welcome Can You Come After 10sec To Read Massages</div>}

        </div>
    );
}
export default Mailbox;