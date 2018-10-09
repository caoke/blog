### caoke的博客
    主要是记录工作中遇到的各种问题
    分为vue、js、css、webpack
#### vue 
    1、 vue ajax请求当离开页面或者点击查询中断上一个请求

        

<pre>
    // 在data中初始化变量previousRequest
    data() {
        return{
            previousRequest: null
        }
    }
    // 发出请求之前 给previousRequest 赋值
    this.$http.get('/_nearest_nodes', {
        params: option,
        before (request) {
            // abort previous request, if exists
            if (this.previousRequest) {
                this.previousRequest.abort()
            }
            this.previousRequest = request
        }
    }).then((res) => {
        if (res.data.error_flag) {
            _this.myEchart.hideLoading()
            this.$alert(res.data.error_message)
        } else {
            this.setData(res.data)
        }
    }, (err) => {

    })
</pre>