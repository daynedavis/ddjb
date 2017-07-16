import React from 'react';
import Title from './Title';
import styles from '../style/app.css';
import userFetcher from '../data/userFetcher';
import recipeFetcher from '../data/recipeFetcher';

export default class Home extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      users: []
    }

    this.addUser = this.addUser.bind(this);
    this.removeUser = this.removeUser.bind(this);
  }

  componentDidMount () {
    this.fetchUsers();
    this.fetchRecipes('turkey');
  }

  async fetchChickenRecipes (query) {
    const recipes = await recipeFetcher.getRecipes(query, 0, 10);
    console.log(recipes);
  }

  async fetchUsers () {
    const users = await userFetcher.getUsers();
    this.setState({ users });
  }

  async addUser () {
    const users = await userFetcher.addUser(this.newName.value);
    this.setState({ users });
    this.newName.value = '';
  }

  async removeUser (id) {
    const users = await userFetcher.removeUser(id);
    this.setState({ users });
  }

  getUsers () {
    const { users } = this.state;
    return users.map((user, idx) => {
      return (
        <div className={styles.user} key={`User${idx}`}>
          {user.name}
          <div className={styles.remove} onClick={() => this.removeUser(user._id)}>x</div>
        </div>
      );
    })
  }

  render () {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <Title title="Users" />
          <input type="text" ref={(ref) => this.newName = ref} />
          <button className={styles.add} onClick={this.addUser}>Add user</button>
          <div className={styles.userlist}>
            {this.getUsers()}
          </div>
        </div>
      </div>
    );
  }
}
