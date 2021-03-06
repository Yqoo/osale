/*
 * @Date: 2019-10-14 09:11:04
 * @LastEditors: Yqoo
 * @LastEditTime: 2019-10-14 11:18:56
 * @Desc:引入全局组件
 */
const requireComponent = require.context('@/components', true, /\.vue/);
const capitalizeFirstLetter = str => {//首字母大写
    return str.charAt(0).toUpperCase() + str.slice(1)
};
const validateFileName = str => {//匹配文件
    return /^\S+\.vue$/.test(str) &&
        str.replace(/^\S+\/(\w+)\.vue$/, (rs, $1) => capitalizeFirstLetter($1))
};
let globalComp = {};
requireComponent.keys().forEach(key => {
    const componentConfig = requireComponent(key);
    const fileName = validateFileName(key);
    globalComp[fileName] = componentConfig.default || componentConfig;
});
export default globalComp;