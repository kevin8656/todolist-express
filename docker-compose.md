# docker-compose

一、在虛擬機上安裝docker-compose

> 可參考此官方文件：https://docs.docker.com/compose/install/#install-compose

![](/assets/docker-compose_1.png)

二、在專案中建立docker-compose.yml檔案

> 以下內容提供參考

```yml
version: "3"             //此為docker-compose語法版本號

services:                //services是要建立的容器清單
  api:                   //為自己的容器自由命名，這邊第一個命名叫做api
    build: .             //build . 是指build同目錄下的docker file
    ports:               //開放對外port對應
      - "3000:3000"
    environment:         //在此台容器中設定環境變數
      - DB_HOST=mongodb  //這邊的mongodb是下面那個容器的名字，在docker-compose.yml中可以自由互相呼叫
      - DB_PORT=27017
      - DB_DATABASE=test1
      - DB_USER=root
      - DB_PASS=s1mpl3
  mongodb:               //第二個容器
    image: mongo         //此容器使用到的是網路上的docker image
    ports: 
      - "27017:27017"

```

三、docker-compose是用於快速在集群中部署分佈式的應用程式,將此docker-compose.yml檔案傳入docker的底層linux伺服器後，開始執行啟動動作。

1.進入到docker-compose.yml檔案所在的資料夾中

```bash
# cd 檔案目錄
```

2.輸入以下指令啟動docker-compose

```bash
# docker-compose up -d
```

下圖圖片中可看出，docker-compose已開始啟動docker容器，詳細步驟請參考docker-compose.yml檔案以及此圖中的log

![](/assets/docker-compose_3.png)

4.若要關閉此docker-compose描述檔中的docker 容器，可使用以下指令：

```bash
# docker-compose down
```

> 詳細cmd使用方法請參考docker-compose官方文件：https://docs.docker.com/compose/reference/down/

![](/assets/docker-compose_4.png)

會了以上基本操作後，就可以使用docker-compose來快速啟動多台容器囉！

