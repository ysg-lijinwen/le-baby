import LeStickyHeadList from './src/index'

// 为组件提供 install 安装方法，供按需引入
LeStickyHeadList.install = function (Vue) {
    Vue.component(LeStickyHeadList.name, LeStickyHeadList)
}

// 导出组件
export default LeStickyHeadList