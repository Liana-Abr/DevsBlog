class Api {
    constructor(){
        this.url = "https://ithub-blog.herokuapp.com/api"
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
        return fetch(`${this.url}users/me`)
    }
    //изменение данных пользователя(имя, описание, изображение)
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
}
export default Api;