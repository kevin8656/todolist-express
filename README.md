# 20180119-Express todoList with mongo db

一、建立一個Express專案，並寫好get/post/patch/delete的api router
https://bignerdcoding.gitbooks.io/express/content/gou-jian-api-jie-kou.html

二、安裝並啟動mongoDB環境

**（Mac版本做法）**

```bash
# brew install mongoDB
# brew service start mongoldb
```

**(Windows版本做法)**

1.下載MongoDB

[Mongodb下載連結](https://www.mongodb.com/download-center#community)

選擇Community Server分頁並下載

![](/assets/mongodb-installation_1.png)

2.Step By Step Installation

![](/assets/mongodb-installation_2.png)

Complete 儲存至預設路徑，Costom 可自訂儲存路徑

![](/assets/mongodb-installation_3.png)

選擇儲存路徑

![](/assets/mongodb-installation_4.png)

取消勾選Install MongoDB Compass

![](/assets/mongodb-installation_5.png)

點選Install

![](/assets/mongodb-installation_6.png)

3.自訂存放db及log檔位置，範例為：

D:\MongoDB\data\db

D:\MongoDB\data\log

![](/assets/mongodb-installation_7.png)

4.新增一個mongod.cfg檔案，範例為：

D:\MongoDB\Server\3.6\mongod.cfg，並以記事本開啟檔案。

![](/assets/mongodb-installation_8.png)

5.將此段程式碼放入檔案中，設定存放log檔及db資料路徑

```
systemLog:
    destination: file
    path: D:\MongoDB\data\log\mongod.log
storage:
    dbPath: D:\MongoDB\data\db
```

6.點選Win，搜尋cmd找到命令提示字元，右鍵選擇以系統管理員身分執行開啟

![](/assets/mongodb-installation_9.png)

7.找到mongod.exe檔案執行，輸入程式碼
```
"D:\MongoDB\Server\3.6\bin\mongod.exe" --config D:\MongoDB\Server\3.6\mongod.cfg" –install
```

![](/assets/mongodb-installation_10.png)

8.開啟cmd搜尋服務

![](/assets/mongodb-installation_11.png)

9.找到MongoDB

![](/assets/mongodb-installation_12.png)

10.啟動mongoDB服務

![](/assets/mongodb-installation_13.png)

三、下載robomongo（mongoDB用的UI控制介面）

https://robomongo.org/download

四、在Express專案中安裝mongoose套件
```bash
# yarn add mongoose
```
> 可參考此網址：http://mongoosejs.com/

五、app.js中加入
```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
```

六、專案內加入dotenv套件，並建立.env檔案將環境變數存入（環境變數內容請依照自己的環境來更改）

> 如何加入dotenv套件，可參考此網址：https://github.com/motdotla/dotenv

1.建立.env檔案並且輸入所需要的環境變數

![](/assets/todolist_7.png)

2.通常.env檔案不會跟著專案push到git上面（因為每個人的環境變數不盡相同），因此我們新增一個.gitignore檔案，並且在裡面直接加入node.js的檔案忽略

![](/assets/todolist_8.png)

> node.js的檔案忽略請參考：
https://github.com/github/gitignore/blob/master/Node.gitignore

七、在app.js中引入../models/Todo，將剛剛五、中的程式碼改寫成下圖中的樣子：

> 請注意要使用${}變數，外面的字串包覆是``不是''

![](/assets/todolist_1.png)

八、建立models資料夾，並且建立一個Todo.js用來寫noSQL DBSchema

> 有點類似MVC裡面的ADO.net資料模型面做的事情，專業一點講叫做DB ORM，而因為這邊使用的是noSQL，所以會在程式中將db Schema定義好

![](/assets/todolist_5.png)

九、在routes/todo.js中引入/models/Todo.js

![](/assets/todolist_6.png)

十、修改todo.js中的api post，改為存資料入mongodb，並且使用async

![](/assets/todolist_2.png)

> 參考網址：
>
> **Promise:** http://jazzlion.github.io/2016/06/18/Javascript%E7%9A%84%E9%9D%9E%E5%90%8C%E6%AD%A5%E4%B9%8B%E6%97%85-Part-I/
> 
> **async:** https://jigsawye.com/2016/04/18/understanding-javascript-async-await/

十一.Run專案會發現有了Promise的Error，解決方式就是在app.js加上此行程式

![](/assets/todolist_3.png)

十二、作業：完成todolist的CRUD
