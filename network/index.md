# Networking

::: info
This section will be expanded in the future, but it remains incomplete for now. Other sections such as [Ideas](/concepts/), [Runtime](/runtime/), and [Palette](/palette/) are a higher priority to write at the moment. However, once started, it does not seem it should be *too* difficult to complete.

In the meantime, here are some resources that may be useful if one would like to learn more about Scratch's handling of external network connections:

- [TurboWarp Cloud Variable Protocol](https://github.com/TurboWarp/cloud-server/blob/master/doc/protocol.md) (highly similar to the cloud variable protocol used by Scratch)
- [`fetchWithTimeout` Source Code](https://github.com/scratchfoundation/scratch-vm/blob/b3266a0cfe5122f20b72ccd738a3dd4dff4fc5a5/src/util/fetch-with-timeout.js#L30) (function used in official Scratch runtime by certain extensions to make requests to the Internet)

Feel free to offer insight!
:::

When connected to the Internet, the Scratch runtime can interact with external servers to provide support for cloud variables and certain extension blocks.
