import LeLogin from './src/index'

// 为组件提供 install 安装方法，供按需引入
LeLogin.install = function (Vue) {
    Vue.component(LeLogin.name, LeLogin)
}

// 导出组件
export default LeLogin