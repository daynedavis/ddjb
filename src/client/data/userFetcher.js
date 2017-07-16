export default class userFetcher {
    static async addUser(name) {
        const request = new Request('/api/users', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({ name })
        });

        const res = await fetch(request);
        const users = await res.json();
        return users;
    }

    static async getUsers () {
        const request = new Request('/api/users', {
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            method: 'GET',
        });

        const res = await fetch(request);
        const users = await res.json();
        return users;
    }

    static async removeUser (id) {
        const request = new Request('/api/users', {
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            method: 'DELETE',
            body: JSON.stringify({ id })
        });
        const res = await fetch(request);
        const users = await res.json();
        return users;
    }
};