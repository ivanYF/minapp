# 微信小程序 模块集合

> 一个为微信小程序开发准备的基础模块


## 介绍

- 添加常用导航，可自动定位聚焦，可直接投入使用，而且支持不同长度的导航子模块，可以拉取代码查看。 end

- 增加竖直导航页面，可以点击首页卡片模块入口查看。end

- 录音功能，录音 计时 播放 暂停 end

- 瀑布流 操作，未知图片比例的前提下，loading图片，分析宽高 放入正确的view轨道 end

- 地址选择 三级地址联动 同理可用服用与其他 选择类型 end

- map使用，获取当前定位详细地址 address detail end

- 上拉分屏加载客服模块 end

- 导航定点fix && 自动定位前进  end

- 数据模版的推送通知  wait

 


## 将项目克隆到本地

```bash
# 定位到任意目录
$ cd path/to/root

# 克隆仓库到指定的文件夹
$ git clone https://github.com/ivanYF/minapp.git [project-name] --depth 1

# 进入指定的文件夹
$ cd [project-name]
```

## 安装项目`CNPM`依赖

```bash
$ cnpm install
```

# 查看demo
$ npm run watch
```

通过`微信Web开放者工具`打开项目根目录下`dist`文件夹，预览~

可以通过任意开发工具完成`src`下的编码，`gulp`会监视项目根目录下`src`文件夹，当文件变化自动编译


### 生产阶段

执行如下命令

```bash
# 启动编译
$ npm run build
```

生产阶段的代码会经过压缩处理，最终输出到`dist`下。

同样可以通过`微信Web开放者工具`测试。



## 有问题？

Welcome PR or Issue！


## 许可

MIT &copy; [ivan](https://github.com/ivanYF)
