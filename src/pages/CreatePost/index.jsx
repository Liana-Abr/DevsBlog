import React from "react";
import "./style.css"
export default () => {
  return (
    <div>
      <h1>Тут можно создать пост</h1>
      <form className="form-createpost" action="" >
            <input type="text" name="title" placeholder="Заголовок"  />
            <br />
            <input className="post-text" type="text" name="text" placeholder="Пост"  />
            <br />
            <input type="url" placeholder="Ссылка на изображение" name="img_link" />
            <br />
            <input type="text" name="tags" placeholder="Теги" />
            <br />
            <button type="submit">Создать пост</button>
        </form>
    </div>
  );
};
