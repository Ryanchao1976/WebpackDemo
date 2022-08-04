# webpack demo project

## Chunk
* 一堆module的集合(a unit of encapsulation for Modules)
* 過程中的代碼塊
* 產生Chunk的三種途徑
  * entry入口
  * 異步加載模塊
  * 代碼分割（code spliting）

## Bundle
* 最終輸出的一個或多個打包文件
* 結果的代碼塊

* loader
    * CSS loader
    * url-loade
    * file-loader
    * style loader
	* less loader
	* image-webpack-loader
* plugins
  * SplitChunksPlugin
  * purgecss-webpack-plugin
  * mini-css-extract-plugin
* babel
* HMR
* webpack-merge
* SourceMap
* 
* Dev tools
  * webpack-dev-server
    * 打包後的檔案暫存在記憶體內，並不會打包出實體的檔案
  * eslint
