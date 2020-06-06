import LeCountDown from './src/index'

// 为组件提供 install 安装方法，供按需引入
LeCountDown.install = function (Vue) {
    Vue.component(LeCountDown.name, LeCountDown)
}

// 导出组件
export default LeCountDown