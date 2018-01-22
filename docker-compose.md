# docker-compose

一、在虛擬機上安裝docker-compose

![](/assets/docker-compose_1.png)

二、在專案中建立docker-compose.yml檔案

> 以下內容提供參考

![](/assets/docker-compose_2.png)

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

