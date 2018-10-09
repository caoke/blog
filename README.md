### caoke的博客
    主要是记录工作中遇到的各种问题
    分为vue、js、css、webpack
#### vue 
    1、 vue ajax请求当离开页面或者点击查询中断上一个请求
        代码块：
        在data中初始化变量previousRequest
        `data () {
            return {
                // 初始化上一个请求为null变量
                previousRequest: null
            }
        }` 