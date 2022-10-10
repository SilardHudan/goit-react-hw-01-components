import {
  username,
  tag,
  location,
  avatar,
  stats,
} from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

import Profile from './data/Profile';
import Statistics from './data/Statiatics';
import FriendList from './data/FriendList';
import TransactionHistory from './data/TransactionHistory';

function App() {
  return (
    <div>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload Stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
