# Install 安装与启动

## Clone 克隆仓库
> git clone git@github.com:GreenMelon/vue2-cookbook.git

## Node Modules 安装依赖
> npm install

## Run 启动
> npm run dev

> open localhost:8484 in browser 本地打开 localhost:8484

# Directory 项目结构

```
├── app
│   ├── assets                    # 图标资源
│   ├── components                # 组件
│   ├── config                    # 配置信息
│       └── routes.js             # 路由地址
│
│   ├── data                      # 静态数据文件
│   ├── directives                # 指令
│   ├── filters                   # 过滤器
│   ├── images                    # 图片资源
│   ├── less                      # 样式表
│   ├── pages                     # 所有页面模块
│       ├── components            # 组件模块
│       └── ...
│
│   ├── utils                     # 工具函数
│   ├── ...
│   ├── app.vue                   # 路由挂载元素
│   └── main.js                   # 主入口
│
├── docs                          # 开发说明文档
├── node_modules                  # 依赖包
├── test                          # 测试用例
│
├── webpack.base.config.js        # webpack基础配置
└── webpack.dev.config.js         # webpack开发环境配置
```

# 技术栈
- vue
- vue-router

# 其他库
- jquery

# 其他工具
- rasterizehtml     # 截图
