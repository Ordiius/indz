// PollingApp.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { voteAction } from './redux/actions';

const PollingApp = ({ options, vote }) => {
  useEffect(() => {
    // Отримати голоси з localStorage та оновити їх у Redux
    const storedVotes = JSON.parse(localStorage.getItem('pollVotes'));
    if (storedVotes) {
      storedVotes.forEach((optionId) => {
        vote(optionId);
      });
    }
  }, []); // Запустити ефект один раз після завантаження компонента

  const handleVote = (optionId) => {
    vote(optionId);

    // Зберегти голос в localStorage
    const storedVotes = JSON.parse(localStorage.getItem('pollVotes')) || [];
    storedVotes.push(optionId);
    localStorage.setItem('pollVotes', JSON.stringify(storedVotes));
  };

  return (
    <div>
      <h1>Polling App</h1>
      <ul>
        {options.map((option) => (
          <li key={option.id}>
            {option.text} - Votes: {option.votes}
            <button onClick={() => handleVote(option.id)}>Vote</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  options: state.options,
});

const mapDispatchToProps = (dispatch) => ({
  vote: (optionId) => dispatch(voteAction(optionId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PollingApp);
