const getUser = () => ({
  id: 156,
  isAdmin: true,
  fullName: "Mahmoud Elmahdi",
  email: "abracadabra@email.com",
  languages: ["Arabic", "English", "Russian"]
});

const { isAdmin } = getUser();

isAdmin && retrieveSensitiveData();
