var setOverdraftBackup = function(account, backupAccount) {
  account.overdraftBackup = backupAccount;
}

var transact = function(account, byAmount) {
  var result = account.balance + byAmount;

  if (result >= 0) {
    account.balance = result;
  } else if (account.overdraftBackup !== undefined && account.overdraftBackup.balance >= -result) {
    account.balance = 0;
    account.overdraftBackup.balance += result;
  }

  updateViews(accounts);
};

var updateViews = function(accounts) {
  accounts.map(function(account) {
    if (account.balance <= 0) {
      account.view.style.backgroundColor = 'red';
    } else {
      account.view.style.backgroundColor = 'gray';
    }

    account.view.querySelector('.dollars-cents').textContent = Number(account.balance).toFixed(2);
  });
};

var savings = {
  balance: 100,
  view: document.querySelector('.savings-view')
}

var checking = {
  balance: 10,
  view: document.querySelector('.checking-view')
}

var accounts = [savings, checking];

setOverdraftBackup(savings, checking);
setOverdraftBackup(checking, savings);

accounts.map(function(account) {
  var input = account.view.querySelector('input');

  account.view.querySelector('.withdraw-btn').addEventListener('click', function() {
    transact(account, -(+input.value));
  });

  account.view.querySelector('.deposit-btn').addEventListener('click', function() {
    transact(account, +input.value);
  });
});

updateViews(accounts);
