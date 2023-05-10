
import '../../App.css';
import Greeting from './Greeting';

function App() {
  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };

  // --------------------------------
  function getGreeting(user) {
    if (user) {
      return <h3>Hello, {user}</h3>;
    }
    return <h3>Stranger</h3>;
  }

  // --------------------------------
  function getGreeting(name) {
    const profileLink = 'https://www.google.com';
    if (name) {
      return <h3 className='name-title'>Hello , <a href={profileLink}>{name}</a></h3>;
    }
    return <h3>Hello, Guest</h3>;
  }

  const myName = 'Hafez';
  const element = <h2>Hello, {myName}</h2>;

  return (
    // fragment Only one Parent
    <>
      <div>
        <h1>Mohamed Hafez</h1>
        {element}
        <h2>{formatName(user)}</h2>
        {getGreeting("Mohamed")}
        <p>{getGreeting("Hafez")}</p>
      </div>
      <div className='test'>
        <h3>24year</h3>
      </div>
      <Greeting />
    </>
  );
}

export default App;
