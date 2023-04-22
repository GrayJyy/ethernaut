# receive和fallback

---

These are two special callback functions that are commonly used in the following scenarios:

1. receiving ETH
2. When handling function calls that do not exist in the contract (including proxy contracts)

> It's worth noting that prior to Solidity 0.6.x there was only a fallback function, and receive was separated in later versions.

Both of them have a unique declaration syntax that does not require the `function` keyword:

`receive` is used only for handling the receipt of `ETH`. A contract can have only one `receive` function.

The `receive` function can't have any parameters, can't return any value, and must include `external` and `payable`.

It's important to note that complex logic should not be handled in the `receive` function, as `send` and `transfer` functions have a gas limit of 2300 when sending ETH, which could result in an out of gas error (especially in the case of malicious contracts).

The `fallback` function is triggered when a non-existent function in the contract is called.

In summary, when a contract receives `ETH`, it first checks if `msg.data` is empty. If it is not, it triggers the `receive` function. If `msg.data` is not empty or the `receive` function does not exist, it triggers the `fallback` function. If neither of these functions exist, sending `ETH` directly to the contract will result in an error (though it can still be sent through a payable function in the contract).



```solidity
    receive() external payable {
    // ...
    }
    fallback() external payable {
    // ...
    }
```

