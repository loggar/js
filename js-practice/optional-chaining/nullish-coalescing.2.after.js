const darkModePreference1 = true
const darkModePreference2 = false
const darkModePreference3 = undefined
const darkModePreference4 = null
const getUserDarkModePreference = (darkModePreference) => {
  return darkModePreference ?? true;
}
getUserDarkModePreference(darkModePreference1) 
// true
getUserDarkModePreference(darkModePreference2) 
// false
getUserDarkModePreference(darkModePreference3) 
// true
getUserDarkModePreference(darkModePreference4) 
// true