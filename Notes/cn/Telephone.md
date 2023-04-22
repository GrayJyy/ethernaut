# 关于tx.origin钓鱼攻击

在`solidity`中，`tx.origin`会遍历整个调用栈并返回最初发送调用（或交易）的帐户的地址。`msg.sender`为直接调用智能合约功能的帐户或智能合约的地址。两者区别在于如果同一笔交易内有多笔调用，`tx.origin`保持不变，而`msg.sender`将会发生改变。



一张图理解：
---
![different](https://img.learnblockchain.cn/attachments/2022/02/XyJFUGH5620dcb1e08bda.jpg 'different')
---
举个🌰：
某个银行合约的开发者将`tx.origin`当作`msg.sender`来用，在关键函数中通过判断`tx.origin`是否等于`owner`作为限制，这就给了黑客可乘之机。黑客可以部署自己的攻击合约，在攻击合约的攻击函数中调用银行合约有漏洞的函数(比如存在转账逻辑)，通过owner地址调用攻击函数。在这个过程中`tx.origin`是owner(被诱导),完美避过了限制条件实现合约攻击。

### 如何避免？
1. 如果限制条件是`require(msg.sender == owner, "Not owner");`,那么因为msg.sender总是为直接调用关键函数的账户或地址，可以避免整个调用过程中混入外部攻击合约对当前合约的调用,这也是笨蛋开发者的本意(而不是把`tx.origin`当`msg.sender`用)。
2. 如果非要用`tx.origin`作为限制,那么可以再加一个限制条件`tx.origin == msg.sender`,这样也可以避免攻击，但是副作用就是会拒绝所有来自其他合约的调用。


