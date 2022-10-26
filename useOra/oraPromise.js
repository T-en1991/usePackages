import {oraPromise} from 'ora';
import chalk from 'chalk';

const a=await oraPromise((spinner) => {
  return new Promise((res,rej)=>{
    spinner.start()
    spinner.text=`准备下载中${chalk.red('...')}`
    setTimeout(() => {
      spinner.color = 'yellow';//loading的颜色
      //spinner.prefixText='在转圈的前面显示的东西';//loading前面的内容
      spinner.text = '下载中。。。';//loading后面的内容
      spinner.hideCursor=true;//false时阻止隐藏ora光标，默认true
      spinner.indent=20;//缩进多少格，默认0
      console.log(spinner.isSpinning);//实例目前是否在旋转中
      //改变默认loading的样子
      // spinner.spinner={
      //   interval: 80, // Optional
      //   frames: ['-', '+', '-']
      // }


      setTimeout(() => {
        spinner.color = 'green';
        spinner.text = '下载完成！！！'
        // spinner.stop();//停止并清除 spinner. 返回实例
        spinner.succeed(`下载${chalk('成功')}`)//停止 spinner, 会变成绿色 ✔ 并设置相关文本. 返回实例.
        // spinner.fail();//停止 spinner, 会变成红色 ✖ 并设置相关文本. 返回实例
        // spinner.warn();//停止 spinner, 会变成黄色  ⚠ 并设置相关文本. 返回实例
        // spinner.info();//停止 spinner, ,会变成蓝色  ℹ 并设置相关文本. 返回实例
      }, 3000);
    }, 1000);
  })
})

