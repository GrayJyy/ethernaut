# receive和fallback

---

这是两种特殊的回调函数，主要使用场景：

1. 接收ETH时
2. 处理合约中不存在的函数调用（包括代理合约）

> 需要注意的是，在`Solidity 0.6.x`以前只有fallback函数，在这之后才分为`receive`和`fallback`两个函数。

两者的声明方式都较为特殊，不需要`function`关键字：

`receive`只用于处理接收`ETH`。一个合约最多有一个`receive`函数。

`receive`函数不能有任何的参数，不能返回任何值，必须包含`external`和`payable`。

需要注意的是，`receive`函数中不要处理太复杂的逻辑，因为如果用`send`和`transfer`函数发送`ETH`的话，`gas`限制是2300，可能会出现`out of gas`错误（注意一些恶意合约的情况）。

`fallback`函数会在调用合约不存在的函数时被触发。

简而言之，合约接受`ETH`时，先看`msg.data`是否为空，如果不为空，触发`receive`函数，如果`msg.data`不为空或者`receive`函数不存在，触发`fallback`函数，两者都不存在时，向合约直接发送`ETH`会报错（但可以通过合约中的payable函数发送）。



```solidity
    receive() external payable {
    // ...
    }
    fallback() external payable {
    // ...
    }
```

