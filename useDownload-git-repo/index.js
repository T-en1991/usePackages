const download=require('download-git-repo')
download('github:T-en1991/vue-js-frame', 'test', function (err) {
  console.log(err ? 'Error' : 'Success')
})
