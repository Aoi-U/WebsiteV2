const SideNav = (props) => {
  return (
    <li>
      <a href={props.page}>{props.name}</a>
    </li>
  );
};

export default SideNav;
