// PollingApp.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { voteAction } from './redux/actions';

const PollingApp = ({ options, vote, storedVotes }) => {
  useEffect(() => {
    const storedOptions = JSON.parse(localStorage.getItem('pollOptions'));
    if (storedOptions) {
      storedOptions.forEach((storedOption) => {
        const matchingOption = options.find((option) => option.id === storedOption.id);
        if (matchingOption) {
          vote(storedOption.id, storedOption.votes);
        }
      });
    }
  }, []);

  const handleVote = (optionId) => {
    vote(optionId);

    const storedOptions = JSON.parse(localStorage.getItem('pollOptions')) || [];
    const updatedOptions = storedOptions.map((storedOption) => {
      if (storedOption.id === optionId) {
        return { ...storedOption, votes: storedOption.votes + 1 };
      }
      return storedOption;
    });
    const matchingOption = options.find((option) => option.id === optionId);
    if (matchingOption) {
      updatedOptions.push({ id: optionId, votes: matchingOption.votes + 1 });
    }
    localStorage.setItem('pollOptions', JSON.stringify(updatedOptions));
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
  vote: (optionId, votes) => dispatch(voteAction(optionId, votes)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PollingApp);
