class Api {
    constructor() {
        this.url = "https://ithub-blog.herokuapp.com/api/"
    }
    getUsers() {
        return fetch(`${this.url}users`)
    }
    getUser(id) {
        return fetch(`${this.url}users/${id}`)
    }
    getPersonInfo(id) { // информация о себе
        return fetch(`${this.url}users/me/${id}`)
    }
    setPersonInfo(id, body) { // можно поменять имя, описание, изображение
        return fetch(`${this.url}users/update/${id}`, { // нельзя меня почту и пароль!!!
            method: "PUT",
            header: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
    }
    signUp(body) { // email и password required!
        return fetch(`${this.url}users/add`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
    }
    logIn(body) { // email и password only
        return fetch(`${this.url}users/auth`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
    }
    /*
        post {
            _id: String,
            title: String,
            author: String - id автора,
            image: String - ссылка на картинку,
            isPublished: Boolean - статус поста (открыт для просмотра / закрыт)
            tags: [String] - список тегов для фильтрации поста
            createdAt: Date - дата создания (new Date() ) 2022-09-28T18:20
            updatedAt: Date
            likes: [String] - id пользователей
            comments: [String] - id комментария
        }
    */
    getPosts() { // когда грузится главная страница
        return fetch(`${this.url}posts`)
    }
    getPost(id) { // в момент открытия страницы с постом
        return fetch(`${this.url}posts/${id}`)
    }
    addPost(body) { // когда я авторизован и хочу добавить пост
        return fetch(`${this.url}posts/add`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
    }
    updatePost(id, body) { // если автор поста - пользователь сайта (я), на странице с постом изменять свой пост (можно в личном кабинете).
        return fetch(`${this.url}posts/update/${id}`, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
    }
    deletePost(id) { // если я авторизован на сайте, можно удалять свой пост
        return fetch(`${this.url}posts/${id}`, {
            method: "DELETE"
        })
    }
}

export default Api;