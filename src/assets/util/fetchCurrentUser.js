function fetchCurrentUser(cb) {
  cb({
    fullName: '',
    loggedIn: false,		
  });
}

module.exports = fetchCurrentUser;


