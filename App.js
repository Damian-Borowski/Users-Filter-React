const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
      sex: "male",
    },
    {
      id: 2,
      age: 21,
      name: "Asia",
      sex: "female",
    },
    {
      id: 3,
      age: 19,
      name: "Antek",
      sex: "male",
    }
  ]
}

const Item = (props) => (
  <div className="userInfo">
    <h1>Użytkownik {props.user.name}</h1>
    <p>Informacje o użytkowniku</p>
    <p>Wiek użytkownika: {props.user.age}</p>
    <p>Płeć użytkownika: {props.user.sex}</p>
  </div>
)


class ListItems extends React.Component {
  state = {
    select: "all",
  }

  handleUsersFilter(option) {
    this.setState({
      select: option
    })
  }

  usersList = () => {
    let users = this.props.data.users;
    switch (this.state.select) {
      case "all":
        return users.map(user => <Item user={user} key={user.id} />)
      case "female":
        users = users.filter(user => user.sex === "female");
        return users.map(user => <Item user={user} key={user.id} />)
      case "male":
        users = users.filter(user => user.sex === "male");
        return users.map(user => <Item user={user} key={user.id} />)
      default:
        return "Brak danych"
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.handleUsersFilter.bind(this, "all")}>Wszyscy</button>
        <button onClick={this.handleUsersFilter.bind(this, "female")}>Kobiety</button>
        <button onClick={this.handleUsersFilter.bind(this, "male")}>Mężczyźni</button>
        {this.usersList()}
      </div>
    )
  }

}

ReactDOM.render(<ListItems data={data} />, document.getElementById('root'))