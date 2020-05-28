import LeBackToTop from './src/index'

// 为组件提供 install 安装方法，供按需引入
LeBackToTop.install = function (Vue) {
    Vue.component(LeBackToTop.name, LeBackToTop)
}

// 导出组件
export default LeBackToTop