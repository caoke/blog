### caoke的博客
    主要是记录工作中遇到的各种问题
    分为vue、js、css、webpack
#### vue 
1. vue ajax请求当离开页面或者点击查询中断上一个请求
``` js
        // 在data中初始化变量previousRequest
        data() {
            return{
                url: '',
                previousRequest: null
            }
        },
        // 发出请求之前 给previousRequest 赋值
        this.$http.get(url, {
            params: option,
            before (request) {
                // abort previous request, if exists
                if (this.previousRequest) {
                    this.previousRequest.abort() // 若上一个请求存在 则终止请求
                }
                this.previousRequest = request // 赋值为最新的请求
            }
        }).then((res) => {

        }, (err) => 

        }),
        /**
        * 离开守卫 离开页面
        */
        beforeRouteLeave (to, from, next) {
            // abort previous request, if exists
            if (this.previousRequest) {
                this.previousRequest.abort() // 离开页面是存在请求则终止
            }
            next()
        }
    
``` 
2. vue中计算属性和方法的区别

    

***
#### js

***
#### webpack
