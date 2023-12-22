const contents = [
  "About Me",
  "Education",
  "My Life",
  "Projects",
]

const SideNav = () => {
  return (
    <ul className="side-nav-ul">
      {contents.map((content) => 
        <li>{content}</li>
      )}
    </ul>
  )
}

export default SideNav;
