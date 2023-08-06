import axios from 'axios';
import './App.css';
import React from 'react';
import UserProfile from './components/userProfile';
import Loader from './components/loader';

function App() {

  let [state, setState] = React.useState({
    data: null,
    url: 'https://api.github.com/users/ameer255',
    userName: '',
    loaderShown: false
  });


  const fetchData = (url) => {
    setState({ ...state, loaderShown: true });

    axios.get(url)
      .then(response => {
        setState({ ...state, data: response.data, loaderShown: false });
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        alert('Sorry, something went wrong.')
        setState({ ...state, loaderShown: false })
      });
  }


  return (
    <div className="App">

      {/* <p>
          {state.data ?  <img src={state.data.avatar_url} alt='user img' /> : ''}
        </p> */}
      <div className='search'>
        <input type='text'
          placeholder='Enter github user name'
          value={state.userName}
          onChange={(e) => {
            setState({ ...state, userName: e.target.value, url: `https://api.github.com/users/${e.target.value}` })
          }}
        />

        <br />
        <button
          onClick={() => {
            fetchData(state.url)
          }}
        >Search</button>

      </div>


      {state.data ?
        <UserProfile avatar={state.data.avatar_url}
        name={state.data.name}
        bio={state.data.bio}
        location={state.data.location}
        email={state.data.email}
        followers={state.data.followers}
        following={state.data.following}
        url={state.data.html_url}


        />

        : ''}

      {state.loaderShown ? <Loader /> : ''}


    </div>
  );
}

export default App;
