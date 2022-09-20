import React from "react";
import "./style.css"
export default () => {
  return (
    <div>
      <h1>Тут можно создать пост</h1>
        <form className="form-createpost" action="" >
            <input type="text" name="name" placeholder="Название"  />
            <br />
            <input type="text" name="description" placeholder="Описание"  />
            <br />
            <input type="url" placeholder="image link" name="img_link" />
            <br />
            <input type="text" name="author" placeholder="Автор"  />
            <br />
            <input type="text" name="createdAt" placeholder="2022-09-05"  />
            <br />
            <button type="submit">Создать пост</button>
        </form>
    </div>
  );
};
