'use strict';
debugger;

const friends = [{
  username: 'Alice',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy',
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob',
  status: 'online',
  lastActivity: 104
}];

  const rResult = {
    online: [],
    offline: [],
    away: [],
  };

  for (const rKey of friends) {
    if (rKey.status === 'online' && rKey.lastActivity <= 10) {
      rResult.online.push(rKey.username);
    } else if (rKey.status === 'online' && rKey.lastActivity > 10) {
      rResult.away.push(rKey.username);
    } else if (rKey.status === 'offline') {
      rResult.offline.push(rKey.username);
    }
  }

  alert(rResult)