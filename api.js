/* 
    user{
        _id: - уникальный ключ пользователя для взаимодействия(+localStorage)
        name: "" /String
        password: string,
        image: string - ссылка на картинку из открытого источника
        email: string - чувствителен к регистру
        description string - описание
        favorites: Array - массив из id любимых постов
        posts: Array - массив из id своих постов
    }
*/
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
class Api {
    constructor(){
        this.url = "https://ithub-blog.herokuapp.com/api/"
    }
    //получить всех пользователи в блоге
    getUsers(){
        return fetch(`${this.url} users`)
    }
    //один пользователь
    getUser(id){
        return fetch(`${this.url}users/${id}`)
    }
    //информация о себе 
    getPersonInfo(){
        return fetch(`${this.url}users/me/${id}`)
    }
    //изменение данных пользователя(имя, описание, изображение) нельзя менять почту и пароль
    setPersonInfo(id,body){
        return fetch(`${this.url}users/update/${id}`,{
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
    }
    //email и password required
    signUp(body){
        return fetch(`${this.url}users/add`,{
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
    }
     //email и password only
    logIn(body){
        return fetch(`${this.url}users/auth`,{
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
    }
    //когда грузится главная страница
    getPosts(){
        return fetch(`${this.url}posts`)
    }
    //когда я авторизован и хочу добавить пост
    getPost(id){
        return fetch(`${this.url}posts/${id}`)
    }
    //когда я авторизован и хочу добавить пост 
    addPost(body){
        return fetch(`${this.url}posts/add`,{
            method:"POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
    }
    //если автор поста - пользователь сайта(я), на странице с постом изменить свой пост 
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