# 关于tx.origin钓鱼攻击

In `Solidity`, `tx.origin` traverses the entire call stack and returns the address of the account from which the initial call (or transaction) was sent. On the other hand, `msg.sender` represents the account or contract address that directly called the smart contract function. The difference between the two is that if multiple calls exist within the same transaction, `tx.origin` remains unchanged, while `msg.sender` changes.
---



Graphical Representation：
---
![different](https://img.learnblockchain.cn/attachments/2022/02/XyJFUGH5620dcb1e08bda.jpg 'different')
---
Example：
The developer of a certain banking contract used `tx.origin` as `msg.sender` and relied on it to restrict access in a key function, checking if `tx.origin` was equivalent to `owner`. This creates a vulnerability that can be exploited by attackers. They can deploy their own malicious contract and call the vulnerable function of the banking contract, say, one that transfers funds, by invoking the attack function of their contract and passing in the owner address as input. In this process, `tx.origin` will be the `owner` (as induced). This circumvents the restriction condition and facilitates contract exploitation.

### How to avoid？
1. If the restriction condition is require(`msg.sender == owner, "Not owner"`);, it will ensure that only the account or address that directly calls the critical function can access it, preventing external attack contracts from becoming part of the calling process. This is what the developer intended to do (instead of using `tx.origin` as `msg.sender`).
2. If you insist on using `tx.origin` as a restriction condition, you can add an additional requirement `tx.origin == msg.sender`. This can help prevent attacks, but the downside is that it will reject all calls from other contracts.


