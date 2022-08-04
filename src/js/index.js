import '../css/a.css'; // 使用 ESM 方式引入
import '../css/b.css'; // 使用 ESM 方式引入


function add(x, y) {
    return x + y;
}

// 開啟 HMR 支持 (全部模組)
if (module.hot) {
    module.hot.accept();
}