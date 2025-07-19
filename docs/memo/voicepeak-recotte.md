# ボイスピAPI調査

## VOCEPEAKとレコッテスタジオの通信方式

ボイスピ(クライアント)とレコッテ(サーバ)は[名前付きパイプ](https://learn.microsoft.com/ja-jp/windows/win32/ipc/named-pipes)を用いてプロセス間通信しています。
これは[プロセスエクスプローラー](https://learn.microsoft.com/ja-jp/sysinternals/downloads/process-explorer)から両者が開いているファイルオブジェクトを調べると確認できます。  
パイプ名 => \\Device\\NamedPipe\\BFDves6BVsGgVXUYkl


## どうやって通信内容を見るの？

[NamedPipeMaster](https://github.com/zeze-zeze/NamedPipeMaster)を使うことで名前付きパイプ内の通信内容を見ることができますよ。


## それで肝心のプロトコルは？

わからん。
