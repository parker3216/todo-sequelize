# Todo-List(SQL)
透過Node.js、Express及sequelize、MySQL所建立的Todo-List

## 專案功能
- 使用者可以直接註冊帳號或使用Facebook帳號登入
- 使用者登入後可以新增、修改、刪除、瀏覽自己的Todo
- 登入或註冊失敗皆有提示訊息

## 環境建置要求
- MySQL
- MySQLWorkbench
- Node.js

## 安裝及執行程序
1.打開終端機並將專案clone到本機
   ```bash
$ git clone https://github.com/parker3216/todo-sequelize.git
   ```
2.進入專案資料夾
   ```
$ cd todo-sequelize
   ```
3.確認已安裝node.js,npm套件,MySQL,MySQLWorkbench

4.依據.env.example建立環境變數及建立.env檔

5.啟用伺服器執行app.js檔案
   ```bash
   npm run dev
   ```
6.當終端機出現下列字樣代表伺服器啟動成功
```bash
App is running on http://localhost:3000
 ```
7.開啟瀏覽器網址列輸入 http://localhost:3000/ 即可看到本專案的網頁呈現
