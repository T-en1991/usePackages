简介：用来从一个代码仓库中下载代码用的
参考文档：https://blog.csdn.net/liubangbo/article/details/121760721
### 一、包的安装和引用

```
npm install download-git-repo
```

### 二、用法

```
GitHub - github:owner/name or simply owner/name
GitLab - gitlab:owner/name
Bitbucket - bitbucket:owner/name
```
2.1 使用http下载github主分支

```
download('flipxfx/download-git-repo-fixture', 'test/tmp', function (err) {
  console.log(err ? 'Error' : 'Success')
})
```
2.2 使用git clone 方式下载指定分支

```
download('bitbucket:flipxfx/download-git-repo-fixture#my-branch', 'test/tmp', { clone: true }, function (err) {
  console.log(err ? 'Error' : 'Success')
})
```
2.3 使用http下载gitlab指定分支

```
download('gitlab:mygitlab.com:flipxfx/download-git-repo-fixture#my-branch', 'test/tmp', function (err) {
  console.log(err ? 'Error' : 'Success')
})
```
### 三、项目实操
##### 3.1 新建根目录，初始化npm init -y
##### 3.2 新建index.j文件，并加入以下代码

```
const download=require('download-git-repo')
download('github:T-en1991/vue-js-frame', 'test', function (err) {
  console.log(err ? 'Error' : 'Success')
})
```
##### 3.3 运行index文件
### 四、全部代码参考
https://github.com/T-en1991/usedownload-git-repo
