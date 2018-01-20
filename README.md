# 20180119-Express todoList with mongo db

1.建立一個Express專案，並寫好get/post/patch/delete的api router
https://bignerdcoding.gitbooks.io/express/content/gou-jian-api-jie-kou.html

2.安裝並啟動mongoDB環境

**（Mac版本做法）**

``` 
# brew install mongoDB
# brew service start mongoldb
```

**(Windows版本做法)**
下載MongoDB

[Mongodb下載連結](https://www.mongodb.com/download-center#community)

Configure a Windows Service

[參考網站](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#configure-a-windows-service-for-mongodb-community-edition)

```
mkdir c:\data\db
mkdir c:\data\log
```

create file

```
C:\Program Files\MongoDB\Server\3.6\mongod.cfg
```

install as a service

```
"C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe" --config "C:\Program Files\MongoDB\Server\3.6\mongod.cfg" --install
```

3.下載robomongo（mongoDB用的UI控制介面）

https://robomongo.org/download

4.在Express專案中安裝mongoose套件
```
# yarn add mongoose
```
> 可參考此網址：http://mongoosejs.com/

5.app.js中加入
```
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
```

6.專案內加入dotenv套件，並建立.env檔案將環境變數存入，並且在app.js中引入，改寫

![](/assets/todolist_1.png)

> 可參考此網址：https://github.com/motdotla/dotenv

7.建立models資料夾，並且建立一個Todo.js用來寫noSQL DBSchema

![](/assets/todolist_5.png)

8.在routes/todo.js中引入/models/Todo.js

![](/assets/todolist_6.png)

9.修改todo.js中的api post，改為存資料入mongodb，並且使用async

![](/assets/todolist_2.png)

> 參考網址：
>
> **Promise:** http://jazzlion.github.io/2016/06/18/Javascript%E7%9A%84%E9%9D%9E%E5%90%8C%E6%AD%A5%E4%B9%8B%E6%97%85-Part-I/
> 
> **async:** https://jigsawye.com/2016/04/18/understanding-javascript-async-await/

8.Run專案會發現有了Promise的Error，解決方式就是在app.js加上此行程式

![](/assets/todolist_3.png)

9.作業：完成todolist的CRUD
