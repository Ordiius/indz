// PollingApp.js
import React from 'react';
import { connect } from 'react-redux';
import { voteAction } from './redux/actions';

const PollingApp = ({ options, vote }) => {
  const handleVote = (optionId) => {
    vote(optionId);
    // Збережіть голоси в localStorage
    localStorage.setItem('pollVotes', JSON.stringify(optionId));
  };

  return (
    <div>
      <h1>Голоса</h1>
      <ul>
        {options.map((option) => (
          <li key={option.id}>
            {option.text} - Голоса: {option.votes}
            <button onClick={() => handleVote(option.id)}>Голоса</button>
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
