// Storage封装
const STORAGE_KEY = 'mall';
export default {
  // 存值
  setItem(key, value, module_name) { 
    if (module_name) {
      let val = this.getItem(module_name);
      val[key] = value;
      this.setItem(module_name, val)
    } else {
      let val = this.getStorage();
      val[key] = value;
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify)
    }
  },

  // 获取某个模块下的属性 : user下的username  getItem(username, mall.user)
  getItem(key, module_name) {
    if (module_name) {
      let val = this.getItem(module_name);
      if (val) return val[key];
    }
    return this.getStorage()[key];
  },
  //获取整个数据
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },
  clear(key, module_name) {
    let val = this.getStorage();
    if (module_name) {  //如果有这个模块
      if (!val[module_name]) return;  //没有这个属性就返回
      delete val[module_name][key];  //有这个属性就删掉
    } else {
      delete val[key];  //没有第二个参数就删除整个数据的key
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
  }
}
/* 
  storage.setItem('a',1)  =>{"a":1,""}
  storage.setItem('abc',{a:1},'user')  //向mall的user模块下添加abc属性
  storage.clear('a',')  //删除user下面的a；

 */