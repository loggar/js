// React

function prefixer(s1, s2) {
  return s1 + "-" + s2;
}

const listPrefixer = prefixer.bind(null, "shopping-list");

function ShoppingListItem(props) {
  return <li className={listPrefixer("item")}>{props.item}</li>;
}
